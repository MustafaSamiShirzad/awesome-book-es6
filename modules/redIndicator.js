export const redIndicator = (red, noRedA, noRedB) => {
  red.classList.add('dark-red');
  noRedA.classList.remove('dark-red');
  noRedB.classList.remove('dark-red');
};
