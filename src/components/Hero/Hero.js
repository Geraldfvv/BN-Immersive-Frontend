import { useRef, React } from "react";

import { AnchorBtn } from "../AnchorBtn/AnchorBtn";

export const Hero = () => {
  const block = "hero";
  const hero = useRef();


  return (
    <div className={`${block}__root`} ref={hero}>
      <div className={`${block}__content`}>
        <h1 className={`${block}__title`}>
          You want a better future, we want to help you.
        </h1>
        <AnchorBtn theme='primary' text='Learn More' url="#products" ></AnchorBtn>
      </div>
    </div>
  );
};