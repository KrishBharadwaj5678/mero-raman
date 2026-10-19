import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  skeletonClassName?: string;
};

export function ImageWithSkeleton({
  className,
  wrapperClassName,
  skeletonClassName,
  onLoad,
  onError,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <span className={cn("relative block overflow-hidden", wrapperClassName)}>
      {!loaded && (
        <span
          aria-hidden
          className={cn(
            "absolute inset-0 animate-pulse bg-linear-to-br from-temple-stone/10 via-temple-stone/15 to-temple-stone/5",
            skeletonClassName,
          )}
        />
      )}
      <img
        {...rest}
        loading={rest.loading ?? "lazy"}
        decoding={rest.decoding ?? "async"}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setLoaded(true);
          onError?.(e);
        }}
        className={cn(
          "transition-[opacity,transform] duration-700 ease-out",
          className,
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </span>
  );
}
