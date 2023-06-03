let button = document.getElementById('add');

let container = document.getElementById('todocontainer');

let inputField = document.getElementById('Input')

button.addEventListener('click', function(){
  let paragraph = document.createElement('p')
  
  paragraph.classList.add('paragraph-styling');
  
  paragraph.innerText = inputField.value;
  
  
  container.appendChild(paragraph);
  inputField.value='';
  
  
  
  paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration ='line-through';
    paragraph.style.color='red';
  })
  
  paragraph.addEventListener('dblclick', function(){
    container.removeChild(paragraph);
  })



})
