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
