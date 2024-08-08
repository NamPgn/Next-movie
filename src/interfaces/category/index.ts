import { ObjectId } from "bson";
import { IProduct } from "../product";

export interface Icategory {
  _id?: ObjectId;
  name: string;
  linkImg?: string;
  des: string;
  sumSeri: string | number;
  products: IProduct[];
  type: string;
}

export interface isCategorysSlice {
  category: {
    data: string[];
    length: number;
  };
  isError: boolean;
  isLoading: boolean;
  categoryNotReqId: string[];
  details: {};
}
