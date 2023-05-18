import axios from "axios";
import { UserData } from "../Interface/Interface";

const url = "http://localhost:2002";

export const postData = async (data: UserData) => {
  await axios.post(`${url}/register`, data), (res: any) => res.data;
};
