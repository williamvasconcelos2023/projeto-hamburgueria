const menu = document.querySelector("ul")
const mybutton = document.querySelector(".mostrar-tudo")
const discont = document.querySelector(".discont")
const somar = document.querySelector(".soma")
const filtar = document.querySelector(".filtra")

function myforeach(meuValor){

  let= myLi= ""

const meubutton = meuValor.forEach(products =>{

myLi = 

myLi + `
            <li>
              <img src=${products.src}>
              <p>${products.name}</p>
              <p class="item-price">${products.price}</p>
            </li>
        
            `

})

menu.innerHTML = myLi
 

}



function mydiscont(){

  const meuDiscont = menuOptions.map ((discont) => ({

    ...discont,
    price: discont.price * 0.9,
    
  
  }))

  myforeach(meuDiscont)

}



function mysome(){

const minhasoma = menuOptions.reduce( (acc, product) => acc + product.price ,0)

menu.innerHTML =  `<li>
                      <p> o valor total da compra é de R$ ${minhasoma}</p>
                  </li>
                  
                  `
  //console. log("chamei")
}




function myFilter(){
  const meuFiltro = menuOptions.filter( products => products.vegan === true)


  myforeach(meuFiltro)
}






mybutton.addEventListener("click", ()=> myforeach(menuOptions))
discont.addEventListener("click", mydiscont)
somar.addEventListener("click", mysome)
filtar.addEventListener("click", myFilter)