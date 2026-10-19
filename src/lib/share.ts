export async function shareLink({
  title,
  text,
  url,
}: {
  title: string;
  text: string;
  url: string;
}): Promise<"shared" | "copied"> {
  if (navigator.share) {
    await navigator.share({ title, text, url });
    return "shared";
  }

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url);
    return "copied";
  }

  throw new Error("Sharing and clipboard access are unavailable.");
}
