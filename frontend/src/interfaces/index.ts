export interface Order {
  currency: string;
  code: string;
  quantity: number;
  price: number;
  value: number;
  gain: number;
  sell: number;
  out?: number;
  loss?: any;
  stop?: any;
}

export interface OnFinish {
  setFormData: Function;
  values: {
    currency: string;
    code: string;
    quantity: number;
    price: string;
    value: string;
    gain: string;
    sell: string;
    loss?: any;
    stop?: any;
  };
}
