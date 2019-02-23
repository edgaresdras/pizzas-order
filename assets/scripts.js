// Guardamos elementos del DOM en variables que podemos utilizar

//form
const pizzaForm = document.querySelector('#pizza-form');
//inputs
const pizza = document.querySelector('#pizza');
const pizzaSize = document.getElementById('size');
//section
const list = document.querySelector('#lista');

//Nos suscribimos al evento submit de pizzaFrom (nuestro formulario)
pizzaForm.addEventListener('submit', function(event){
  // Previene el default del submit para que no se actualize la página
  event.preventDefault();

//Preguntamos por el valor de los inputs (Dentro de la función que se ejecuta a raiz del evento de submit)
  const pizzaFlavor = pizza.value;
  const sizeValue = pizzaSize.value;

let pizzaImg;
if (pizzaFlavor == 'Carnes Frias') {
  pizzaImg = 'CarnesFrias.jpg';
} else if (pizzaFlavor == 'Hawaiana') {
  pizzaImg = 'Hawaiana.jpg'; 
}  else {
  pizzaImg ='Pepperoni.jpg';
}

let pizzaPrice;
if (sizeValue == 'Chica') {
  pizzaPrice = 80;
} else if (sizeValue == 'Mediana') {
  pizzaPrice = 100;
} else if (sizeValue == 'Grande') {
  pizzaPrice = 120;  
} else {
  pizzaPrice = 140;
}

  //Estamos inyectando código HTML a el elemento list (Solo funciona usando backtips ``)
  list.innerHTML += `
    <div class="pizza-orden">
      <h3>Pidieron una pizza: ${pizzaFlavor}</h3>
      <p>De tamaño: ${sizeValue}</p>
      <p></p>
      <img src="assets/img/${pizzaImg}">
      <p>Con precio de: ${pizzaPrice}</p>
    </div>
  `
});







//
