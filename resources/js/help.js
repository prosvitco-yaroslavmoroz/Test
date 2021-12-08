export const select = (el) => document.querySelector(el);
export const selectAll = (el) => document.querySelectorAll(el);
export const exist = (el) => typeof select(el) !== 'undefined' && select(el) !== null;