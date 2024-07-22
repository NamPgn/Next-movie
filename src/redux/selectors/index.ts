//product
export const product$ = (state: any) => state.product.value;
export const getOneProduct$ = (state: any) => state.product.getOneProduct;
export const getAllProductsByCategory$ = (state: any) =>
  state.product.getAllProductByCategory;
//category
export const category$ = (state: any) => state.category.category;
export const allCategoryNotReq$ = (state: any) =>
  state.category.categoryNotReqId;
export const getCategoryOne$ = (state: any) => state.category.details;

//user
export const user$ = (state: any) => state.user.value;

//admin
export const admin$ = (state: any) => state.user.value;

//post

export const post$ = (state: any) => state.post.value;
export const trailerEdit$ = (state: any) => state.post.trailerValues;

//comment

export const comment$ = (state: any) => state.comment.value;