var ul = document.getElementById('ul');
var list = document.getElementsByTagName('li');
var submit = document.getElementById('add');
var form = document.getElementById('form');
var input = document.getElementById('text');

submit.addEventListener('click', function(e) {
  e.preventDefault();
  var text = document.createTextNode(input.value);
  var newli = document.createElement('li');
 
  newli.appendChild(text);
  ul.appendChild(newli);
  input.value = '';

  // var item = document.querySelectorAll('ul li'); 
  //   for (const i of item) {
  //     i.addEventListener('click' ,  function(e) {
  //       e.preventDefault();
  //       this.remove();
  //     });
  //   }
});

ul.addEventListener("click", function(e) {
    e.preventDefault();
    e.target.remove();
});
