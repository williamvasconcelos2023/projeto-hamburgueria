const menu = document.querySelector("ul");
const mybutton = document.querySelector(".mostrar-tudo");
const myDiscont = document.querySelector(".discont")
const reduce = document.querySelector(".soma")
const filter = document.querySelector(".filtra")


function mycurrency(value){
const newvalue = value.toLocaleString ("pt-bt", {
  style:"currency",
  currency:"BRL",
  
})

return newvalue

}




function myMenu(productarray) {

  let myLi = "";

  productarray.forEach((products) => {
    myLi =
      myLi +
      `    
        <li>
        <img src=${products.src}>
        <p>${products.name}</p>
        <p class="item-price">R$${mycurrency (products.price)}</p>
    
      </li>
    
        `;
  });

  menu.innerHTML = myLi;
}




function newDiscont(){

  const meudiscont = menuOptions.map((discont) =>({
   
    ...discont,
   price: discont.price * 0.9,
   
   
  }))

  myMenu(meudiscont)
  
}

function myReduce(){
     const soma = menuOptions.reduce((acc, products) => acc + products.price , 0)
  

  menu.innerHTML = `    
                  <li>
                     <p> o valor total dos itens é R$${mycurrency(soma)}</p>
                  </li>
                   `
}
  
function myFilter(){


  const meuFiltro = menuOptions.filter(filtro =>  filtro.vegan === true)
  
 myMenu(meuFiltro)
    
  

}

  


mybutton.addEventListener("click", ()=> myMenu (menuOptions));
myDiscont.addEventListener("click", newDiscont)
reduce.addEventListener("click", myReduce)
filter.addEventListener("click", myFilter)
