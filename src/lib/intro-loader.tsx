import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type IntroLoaderContextValue = {
  isComplete: boolean;
  complete: () => void;
};

const IntroLoaderContext = createContext<IntroLoaderContextValue | null>(null);

export function IntroLoaderProvider({
  children,
  initialComplete = false,
}: {
  children: ReactNode;
  initialComplete?: boolean;
}) {
  const [isComplete, setIsComplete] = useState(initialComplete);
  const complete = useCallback(() => setIsComplete(true), []);

  return (
    <IntroLoaderContext.Provider value={{ isComplete, complete }}>
      {children}
    </IntroLoaderContext.Provider>
  );
}

export function useIntroLoader() {
  const context = useContext(IntroLoaderContext);
  if (!context) {
    throw new Error("useIntroLoader must be used within IntroLoaderProvider");
  }
  return context;
}
