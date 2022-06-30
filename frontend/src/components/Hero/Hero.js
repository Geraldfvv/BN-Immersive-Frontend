import { useRef, React } from "react";

import { Button } from "../Button/Button";

export const Hero = () => {
  const block = "hero";
  const hero = useRef();


  return (
    <section className={`${block}__root`} ref={hero}>
      <div className={`${block}__content`}>
        <h1 className={`${block}__title`}>
          You want a better future, we want to help you.
        </h1>
        <Button theme='primary' text='Learn More' handleClick=''></Button>
      </div>
    </section>
  );
};
