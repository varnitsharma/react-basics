export const validEmail = new RegExp(
  /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
);
export const validPassword = new RegExp(/^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/);

export const validPhone = new RegExp(/^[0-9\b]+$/);
