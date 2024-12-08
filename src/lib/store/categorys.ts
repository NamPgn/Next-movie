import { create } from "lodash";

export const useCategoryStore = create((set: any) => ({
  test: "test",
  setCategory: (data: any) => set({ categorys: data }),
}));
