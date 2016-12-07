// accept a selector
// @return first element match
var getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

// pull .target out of #nested

var nestedTarget = () => {
  return document.querySelector('#nested .target')
}

// icrease rank of ranked-list by n
var increaseRankBy = (n) => {
  var lis = document.querySelectorAll('.ranked-list li')
  for(var i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

var deepestChild = () => {
  var lis = document.querySelectorAll('div#grand-node')[0]
  var max = 0;
  var parent_node;
  for(var i = 0; i < lis.children.length; i++){
    var h = getHeight(lis.children[i], 0)
    if(max < h){
      parent_node = lis.children[i]
      max = h
    }
  }
  return parent_node;
}

function getHeight(node, t){
  if(node.children.length === 0)
    return 0;
  else {
    var max = t;
    for(var i = 0; i < node.children.length; i++)
       max = Math.max(max, getHeight(node.children[i], t)+1)
    return max;
  }
}
