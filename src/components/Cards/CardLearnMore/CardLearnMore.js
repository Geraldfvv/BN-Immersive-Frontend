import { useEffect, useRef, useState } from "react";
import { useOnScreen } from "../../../utils/hooks/useOnScreen";

export const CardLearnMore = (props) => {
  const { img, title } = props;
  const [visible, setVisible] = useState("");
  const block = "learn-more";
  const card = useRef(null);
  const onScreen = useOnScreen(card);

  useEffect(() => {
    if (onScreen) {
      setVisible(`${block}--visible`);
    }
  }, [onScreen]);

  return (
    <div className={`${block}__root ${visible}`} ref={card}>
      <img className={`${block}__img`} src={img} alt={title} />
      <div className={`${block}__info`}>
        <div className={`${block}__content`}>
          <p className={`${block}__title`}>{title}</p>
          <p className={`${block}__subtitle`}>Learn More</p>
        </div>
        <div className={`${block}__icon`}>
          <svg viewBox='0 0 28 25'>
            <path d='M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z' ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
