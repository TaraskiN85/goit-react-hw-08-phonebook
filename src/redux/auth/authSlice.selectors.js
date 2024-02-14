export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectUser = state => state.auth.userData;
export const selectError = state => state.auth.error;
export const selectToken = state => state.auth.token;
