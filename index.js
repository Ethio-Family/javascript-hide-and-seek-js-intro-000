// Define a function getFirstSelector(selector),
// which accepts a selector and returns the first element that matches

function getFirstSelector(selector) {

    return document.querySelector(selector);
}

function nestedTarget() {
  var nodes = document.querySelectorAll('nested');
}


function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
