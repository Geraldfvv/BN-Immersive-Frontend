import logoBN from "../../../assets/logoBN.png";

//Icons
import { BiTransfer, BiDownload, BiHistory } from "react-icons/bi";
import { AnchorIcon } from "../../AnchorIcon/AnchorIcon";

export const CardAccount = (props) => {
  const { account } = props;
  const { currency, balance, iban } = account;
  const block = "account";
  return (
    <>
      <div className={`${block}__root`}>
        <div className={`${block}__content`}>
          <div className={`${block}__header`}>
            <div className={`${block}__balance`}>
              <p className={`${block}__text`}>BALANCE</p>
              <p className={`${block}__value ${block}__value--number`}>
                {currency === "$" ? "USD" : "CRC"} {balance}
              </p>
            </div>
          </div>
          <div className={`${block}__footer`}>
            <p className={`${block}__text`}>IBAN</p>
            <p className={`${block}__value`}>{iban}</p>
          </div>
        </div>

        <div className={`${block}__actions`}>
          <AnchorIcon text='Transfer' url='transfer'>
            <BiTransfer className={`${block}__icon`} />
          </AnchorIcon>

          <AnchorIcon text='Fund' url='/fund'>
            <BiDownload className={`${block}__icon`} />
          </AnchorIcon>

          <AnchorIcon text='History' url='/account'>
            <BiHistory className={`${block}__icon`} />
          </AnchorIcon>
        </div>
      </div>
    </>
  );
};
