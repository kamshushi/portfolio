"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type TScrollContext = {
  scrollY: number;
  isScrollingUp: boolean;
};
type TProviderProps = { children: ReactNode };

const ScrollContext = createContext<TScrollContext | null>(null);

export function ScrollContextProvider({ children }: TProviderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollYValue = window.scrollY;

      let isSameDirection = false;
      if (
        (isScrollingUp && scrollYValue <= scrollY) ||
        (!isScrollingUp && scrollYValue >= scrollY)
      ) {
        isSameDirection = true;
      }

      setScrollY(scrollYValue);
      if (!isSameDirection) {
        setIsScrollingUp((oldVal) => !oldVal);
      }
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scrollY]);

  const value = useMemo(
    () => ({
      scrollY,
      isScrollingUp,
    }),
    [scrollY, isScrollingUp]
  );

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const contextValue = useContext(ScrollContext);
  if (!contextValue) {
    throw new Error("useScrollContext must be uset in ScrollContext.Provider");
  }

  return contextValue;
}
