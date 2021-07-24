/* eslint-disable no-useless-escape */
export const removeDotsAndDash = (text: string) => {
  return text.replace(/\./g, "").replace(/\-/g, "");
};
