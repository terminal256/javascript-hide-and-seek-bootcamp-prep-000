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
  return doc.querySelector
}
