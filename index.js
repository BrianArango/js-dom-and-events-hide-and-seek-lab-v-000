const getFirstSelector = (selector) => {
  return document.querySelector(selector);
};

const nestedTarget = (selector) => {
  return document.querySelector(".target");
};

const increaseRankBy = (n) => {
  for (let i = 0; i < n.length; i++) {
    n[i].innerHTML = (i + 1).parseInt(".ranked-list");
  }
};