let calculation = localStorage.getItem('calculation') || '';

  display();

  function updateCalculation(value){

    calculation += value;
    display();
    localStorage.setItem('calculation',calculation);

  }

  function display(){
    document.querySelector('.js-visible').innerHTML = calculation;
  }
      