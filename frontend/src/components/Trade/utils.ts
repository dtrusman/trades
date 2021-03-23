import { OnFinish } from "../../interfaces";

export const onFinish = ({ setFormData, values }: OnFinish) => {
  const {
    currency,
    code,
    quantity,
    price,
    value,
    gain1,
    sell1,
    gain2,
    sell2,
    gain3,
    sell3,
  } = values;

  const out1 = parseFloat(price) + parseFloat(price) * (parseInt(gain1) / 100);
  const out2 =
    gain2 && parseFloat(price) + parseFloat(price) * (parseInt(gain2) / 100);
  const out3 =
    gain3 && parseFloat(price) + parseFloat(price) * (parseInt(gain3) / 100);

  setFormData({
    currency,
    code,
    quantity,
    price: parseFloat(price),
    value: parseFloat(value),
    gain1: parseFloat(gain1),
    sell1: parseFloat(sell1),
    gain2: gain2 && parseFloat(gain2),
    sell2: sell2 && parseFloat(sell2),
    gain3: gain3 && parseFloat(gain3),
    sell3: sell3 && parseFloat(sell3),
    out1,
    out2,
    out3,
  });
};
