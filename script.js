// --------------------------- arreglo de objetos


let array = [
    {
        img : "assets/img example/img1 (4).jpg",
        donde : "esta fiesta se celebra al sur de yaracuy especificamente en beroes",
        cuando : "la celabracion se hace los primeros dias de junio hasta el 20 de junio",
        porque : "se celebra por la gran conmemoracion de san felipe apostol como nuestro patrono",
        fiesta : " consagracion "
    },
    {
        img : "assets/img example/img1 (1).jpg",
        donde : "esta fiesta se celebra al sur de yaracuy especificamente en beroes",
        cuando : "la celabracion se hace los primeros dias de junio hasta el 20 de junio",
        porque : "se celebra por la gran conmemoracion de san felipe apostol como nuestro patrono",
        fiesta : " la natividad"
    },
    {
        img : "assets/img example/img1 (4).jpg",
        donde : "esta fiesta se celebra al sur de yaracuy especificamente en beroes",
        cuando : "la celabracion se hace los primeros dias de junio hasta el 20 de junio",
        porque : "se celebra por la gran conmemoracion de san felipe apostol como nuestro patrono",
        fiesta : "pentecostes"
    },
    {
        img : "assets/img example/img1 (4).jpg",
        donde : "esta fiesta se celebra al sur de yaracuy especificamente en beroes",
        cuando : "la celabracion se hace los primeros dias de junio hasta el 20 de junio",
        porque : "se celebra por la gran conmemoracion de san felipe apostol como nuestro patrono",
        fiesta : " pascua "
    },
]

let parrafo_1 = document.getElementById("parrafo_1")
let parrafo_2 = document.getElementById("parrafo_2")
let parrafo_3 = document.getElementById("parrafo_3")
let img = document.getElementById("img")
let fiesta = document.getElementById("fiesta")
let cards = document.getElementById("cards")

function select(i){
    let objeto_fiesta = array[i]

    cards.classList.add("hola")

    parrafo_1.textContent = objeto_fiesta.cuando
    parrafo_2.textContent = objeto_fiesta.donde
    parrafo_3.textContent = objeto_fiesta.porque
    fiesta.textContent = objeto_fiesta.fiesta
    img.src = objeto_fiesta.img
}

function borrar(){
    cards.classList.remove("hola")
}