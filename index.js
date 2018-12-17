function getFirstSelector(selector){
  let doc = document.getElementById('app');
  return doc.querySelector(selector);
}
function nestedTarget(){
  let doc = document.getElementById('app');
  return doc.querySelector("#nested .target");
  
}
function increaseRankBy(n){
  let doc = document.getElementById('app');
  const lis = doc.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    let oldn = parseInt(lis[i].innerHTML, 10);
    lis[i].innerHTML = (n + oldn).toString();
  }
}
function deepestChild(){
  let doc = document.getElementById('app');
  return find(doc.querySelector("#grand-node div"));
}

function find(dom){
  return findaux(null ,dom, 0)[0];
}
function findaux(lastparent, dom, depth) {
  // First check that the element has child nodes 
  if (dom.hasChildNodes()) {
    let children = dom.childNodes;
    let maxDepth = depth; 
    let parent = lastparent;
    for (let i = 0; i < children.length; i++) {
      let ans = findaux(dom, children[i], 1 + depth);
      if (ans){
      let parentans = ans[0];
      let depthans = ans[1];
      if (depthans > maxDepth){
        parent = parentans;
        maxDepth = depthans;
      }
        
      }
    }
    return [parent, maxDepth];
  } else {return null;} 
}