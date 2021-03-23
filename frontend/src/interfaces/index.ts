export interface Order {
  currency: string;
  code: string;
  quantity: number;
  price: number;
  value: number;
  gain1: number;
  sell1: number;
  gain2?: number;
  sell2?: number;
  gain3?: number;
  sell3?: number;
  out1?: number;
  out2?: number;
  out3?: number;
}

export interface OnFinish {
  setFormData: Function;
  values: {
    currency: string;
    code: string;
    quantity: number;
    price: string;
    value: string;
    gain1: string;
    sell1: string;
    gain2?: string;
    sell2?: string;
    gain3?: string;
    sell3?: string;
  };
}
