import { monthNames } from "../../../utils/constants";
import { useRef } from "react";

export const CardTransaction = (props) => {
  const block = "transaction";
  const { date, type, currency, amount, detail } = props;
  const card = useRef(null);
  const transDate = new Date(date);

  return (
    <div
      className={`${block}__root ${block}__root${
        type === "-" ? "--red" : "--green"
      }`}
      ref={card}
      tabIndex={0}
    >
      <div className={`${block}__section ${block}__section--left`}>
        <div className={`${block}__date`}>
          <p>{transDate.getDate()}</p>
          <p>{monthNames[transDate.getMonth()]}</p>
        </div>
        <div className={`${block}__info`}>
          <p className={`${block}__detail`}>{detail}</p>
          <p className={`${block}__hour`}>
            {type === "-" ? "Sent at" : "Received at"}{" "}
            {`${transDate.getHours()}:${transDate.getMinutes()}`}
          </p>
          <p className={`${block}__amount--hidden`}>
            {type} {currency} {Math.round(amount * 100) / 100}
          </p>
        </div>
      </div>
      <div className={`${block}__section ${block}__section--right`}>
        <p
          className={`${block}__amount ${block}__amount${
            type === "-" ? "--red" : "--green"
          }`}
        >
          {type} {currency} {Math.round(amount * 100) / 100}
        </p>
      </div>
    </div>
  );
};
