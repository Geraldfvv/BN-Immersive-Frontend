import { useState, useEffect } from "react";

export const Hero = () => {
  const block = "hero";
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => setScroll(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${block}__root `}>
    
    </div>
  );
};
