export const userErr$ = ((state:any) => state.user.error);
export const loginUser$ = ((state:any) => state.user.login);
export const isLogin$=((state:any) => state.user.isLogin);

export const cartUserPending$ = ((state:any) => state.user.isLoading);
export const cartUserFulfilled$ = ((state:any) => state.user.cartUser);