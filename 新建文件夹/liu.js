// alert("this is a 计算器");

var num=0;
function haha(num) {
  document.getElementById("screenname").value +=
  num.value
}
function eva() {
  document.getElementById("screenname") .value=eval(document.getElementById("screenname").value);

}
function clear() {
  document.getElementById("screenname") .value = null;

   
 
  }
   function onLoad() {
  document.getElementById("screenname") .focus();
}
