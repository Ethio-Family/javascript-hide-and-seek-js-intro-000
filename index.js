// Define a function getFirstSelector(selector),
// which accepts a selector and returns the first element that matches

function getFirstSelector(selector) {

    return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}


function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}


function increaseRankBy(n) {
  const list = document.quarySelectorAll('ul.ranked-list li')
  for (var i = 0; i < list.length; i++) {
      list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    }
  }