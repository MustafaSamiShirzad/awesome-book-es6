const changeDisplayedPage = (diplay, notDisplayedA, notDisplayedB) => {
  diplay.classList.remove('no-display');
  notDisplayedA.classList.add('no-display');
  notDisplayedB.classList.add('no-display');
};

export { changeDisplayedPage };