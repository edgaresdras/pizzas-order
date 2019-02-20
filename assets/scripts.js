console.log('yey!');

//form
const pizzaForm = document.querySelector('#pizza-form');
//inputs
const pizza = document.querySelector('#pizza');
const pizzaSize = document.getElementById('size');
//section
const list = document.querySelector('#lista');


pizzaForm.addEventListener('submit', function(event){
  event.preventDefault();

  const pizzaFlavor = pizza.value;
  const sizeValue = pizzaSize.value;

  list.innerHTML += `
    <div class="pizza-orden">
      <h3>Pidieron una pizza ${pizzaFlavor}</h3>
      <p>De tamaño ${sizeValue}</p>
      <p>Otra cosa</p>
      <img src="pizza.png">
      <input id="confirm-button" type="button" value="confirmar">
    </div>
  `

});







//
