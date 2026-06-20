// --------------------------- arreglo de objetos


let array = [
    {
        img : "assets/img example/pascua.webp",
        donde : "La Pascua de Resurrección se celebra en iglesias, templos y hogares de todo el mundo, siendo la fiesta más importante del calendario cristiano.",
        cuando : "La Pascua de Resurrección (o Domingo de Pascua) se celebra el primer domingo después de la primera luna llena tras el equinoccio de primavera",
        porque : "ella se celebra el regreso a la vida de Jesucristo al tercer día de haber sido crucificado,",
        fiesta : "Pascua De Resurreción"
    },
    {
        img : "assets/img example/navidad.webp",
        donde : "La Navidad se celebra en la mayoría de los países del mundo, principalmente el 25 de diciembre",
        cuando : "La Navidad se celebra el 25 de diciembre en la mayoría de los países, incluyendo a Venezuela",
        porque : "La Navidad se celebra principalmente para conmemorar el nacimiento de Jesucristo",
        fiesta : "La Navidad"
    },
    {
        img : "assets/img example/pentecostes.jpg",
        donde : "Pentecostés es una fiesta universal del cristianismo (católica, ortodoxa y protestante) que se celebra en las iglesias y templos de todo el mundo",
        cuando : "La fiesta de Pentecostés se celebró el domingo 24 de mayo de 2026",
        porque : "los cristianos tenemos la oportunidad de vivir intensamente la relación existente entre la Resurrección de Cristo, su Ascensión y la venida del Espíritu Santo.",
        fiesta : "Pentecostés"
    },
    {
        img : "assets/img example/inmaculadad conceccion.jpg",
        donde : "Por decreto pontificio, es la fiesta patronal de Argentina, Brasil, Chile, Italia, Corea, Nicaragua, Paraguay, Filipinas, España, Estados Unidos y Uruguay",
        cuando : "La Inmaculada Concepción se celebra cada 8 de diciembre",
        porque : "Se celebra para conmemorar el dogma de fe católica que sostiene que la Virgen María fue preservada del pecado original desde el primer instante de su concepción",
        fiesta : "La Inmaculada Concepción"
    },
    {
        img : "assets/img example/inmaculadad conceccion.jpg",
        donde:"La Asunción de la Virgen María se celebra universalmente cada 15 de agosto en toda la Iglesia Católica",
        cuando : "El Día de la Virgen de la Asunción se celebra cada 15 de agosto",
        porque:"La Asunción de la Virgen celebra el hecho de que María, madre de Jesús, fue llevada al cielo en cuerpo y alma al final de su vida terrena",
        fiesta : "La Asunción de la Virgen"
    },
    {
        img : "assets/img example/corpus christi.jpg",
        donde:"El Corpus Christi (Cuerpo de Cristo) es una celebración de la Iglesia Católica que honra el sacramento de la Eucaristía",
        cuando : "El Corpus Christi se celebra exactamente 60 días después del Domingo de Resurrección",
        porque:"El Corpus Christi del latín (Cuerpo de Cristo) es una solemnidad de la Iglesia Católica cuyo objetivo es proclamar y aumentar la fe de los creyentes en la presencia real de Jesucristo en la Eucaristía",
        fiesta : "El Corpus Christi"
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