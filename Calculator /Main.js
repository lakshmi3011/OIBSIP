let screen = document.getElementById('output')

function display(num){

  

  screen.value += num;

  

}

function Calculate (){

  

  try{

    

      screen.value = eval(screen.value)

      

  }

  

  catch(err){

    

    alert('invalid operation')

    

  }

  

}

function clear (){

  

  screen.value='';

  

}

function del(){

  

  screen.value = screen.value.slice(0-1)

  

}
