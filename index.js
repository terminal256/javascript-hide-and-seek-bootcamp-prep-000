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
  return find(doc.querySelector("#grand-node"));
}

function find(dom){
  return findaux(dom, 0);
}
function findaux(dom, depth) {
  // First check that the element has child nodes 
  if (dom.hasChildNodes()) {
    let children = dom.childNodes;
    let maxDepth = depth;
    let domAnswer = dom;
    for (let i = 0; i < children.length; i++) {
      let ans = findaux(children[i], 1 + depth);
      let domans = ans[0];
      let depthans = ans[1];
      if (depthans > maxDepth){
        domAnswer = domans; 
        maxDepth = depthans;
      }
    }
    return [domAnswer, maxDepth];
  } else {return [dom, depth];} 
}