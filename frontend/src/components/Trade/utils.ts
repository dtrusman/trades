import { OnFinish } from "../../interfaces";

export const onFinish = ({ setFormData, values }: OnFinish) => {
  const {
    currency,
    code,
    quantity,
    price,
    value,
    gain,
    sell,
    loss,
    stop,
  } = values;

  const out = parseFloat(price) + parseFloat(price) * (parseInt(gain) / 100);

  setFormData({
    currency,
    code,
    quantity,
    price: parseFloat(price),
    value: parseFloat(value),
    gain: parseFloat(gain),
    sell: parseFloat(sell),
    out,
    loss,
    stop,
  });
};
