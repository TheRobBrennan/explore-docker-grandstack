export const storeAuthenticationToken = (token: string) => {
  localStorage.setItem("token", token);
}