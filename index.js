const doc = document
  .getElementById('app');
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
}

function getFirstSelector(selector){}
function nestedTarget(){}
function increaseRankBy(n){
  const lis = doc.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    let oldn = parseInt(lis[i].innerHTML, 10);
    lis[i].innerHTML = (n + oldn).toString();
  }
}
function deepestChild(){}
