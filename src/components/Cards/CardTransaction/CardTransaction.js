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
    >
      <div className={`${block}__section ${block}__section--left`}>
        <div className={`${block}__date`}>
          <p>{transDate.getDate()}</p>
          <p>{monthNames[transDate.getMonth()]}</p>
        </div>
        <div>
          <p className={`${block}__detail`}>{detail}</p>
          <p className={`${block}__hour`}>
            {type === "-" ? "Sent at" : "Received at"}{" "}
            {`${transDate.getHours()}:${transDate.getMinutes()}`}
          </p>
        </div>
      </div>
      <div className={`${block}__section ${block}__section--right`}>
        <p
          className={`${block}__amount ${block}__amount${
            type === "-" ? "--red" : "--green"
          }`}
        >
          {type} {currency} {amount}
        </p>
      </div>
    </div>
  );
};
