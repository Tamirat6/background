var index=0;
function changeColors(){
var colors=  ["red","green","yellow","pink","orange","purple","blue"];
var bac=document.getElementsByTagName("body")[0];
bac.style.backgroundColor=colors[index++];
if(index>colors.length-1)
  index=0;
}