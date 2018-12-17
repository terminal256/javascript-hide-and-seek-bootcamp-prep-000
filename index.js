const doc = document
  .getElementById('app');

function getFirstSelector(selector){
  return doc.querySelector(selector);
}
function nestedTarget(){
  return doc.querySelector("#nested .target");
  
}
function increaseRankBy(n){
  const lis = doc.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    let oldn = parseInt(lis[i].innerHTML, 10);
    lis[i].innerHTML = (n + oldn).toString();
  }
}
function deepestChild(){
  return doc.querySelector("#grand-node");
}

function find(dom) {
  // parg is an object reference to a <p> element

  // First check that the element has child nodes 
  if (dom.hasChildNodes()) {
    var children = parg.childNodes;
  
    for (var i = 0; i < children.length; i++) {
      find children[i]

    }
  } 
}