const getFirstSelector = (selector) => {
  return document.querySelector(selector);
};

const nestedTarget = () => {
  return document.querySelector('.target');
};

const deepestChild = () => {
 return document.querySelector('#grand-node div div div div');
};

const increaseRankBy = (n) => {
   const increase = document.getElementById('app').querySelectorAll('ul.ranked-list');
    for (let i = 0; i < increase.length; i++){
     increase[i].innerHTML = ((parseInt(increase[i].innerHTML)) + n);
     }
};