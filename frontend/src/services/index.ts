import axios from "axios";
import { Order } from "../interfaces";

const baseUrl = "http://localhost:3333";

export const save = async (order: Order, setData: Function) => {
  await axios.post(`${baseUrl}/trades`, order);
  list(setData);
};

export const list = async (setData: Function) => {
  const { data } = await axios.get(`${baseUrl}/trades`);
  setData(data);
};

export const remove = async (id: string, setData: Function) => {
  await axios.delete(`${baseUrl}/trades/${id}`);
  list(setData);
};
