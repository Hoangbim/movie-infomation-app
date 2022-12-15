import { useState, useEffect } from "react";

export function useScrollY() {
  //taọ biến nhận giá trị scrolly
  const [scrollY, setScrollY] = useState(0);
  //hàm quản lý giá trị scrollY
  const handlerScrollY = () => {
    const scrollYValue = window.scrollY || document.documentElement.scrollTop;

    setScrollY(scrollYValue);
  };

  useEffect(() => {
    // handlerScrollY();
    window.addEventListener("scroll", handlerScrollY);

    return () => {
      window.removeEventListener("scroll", handlerScrollY);
    };
  }, []);

  return [scrollY];
}
