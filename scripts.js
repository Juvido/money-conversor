const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('currency-select');


const dolar = 5.0
const euro = 5.9

const convertValues = () => {
    const inputREal = document.getElementById('input-real').value
    const realValue = document.getElementById('real-value');
    const currencyValue = document.getElementById('currency-value');

    //realValue.innerHTML = inputREal

    //currencyValue.innerHTML = (inputREal / dolar) //apresenta o valor sem formatacao

    realValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputREal ); 

    if (select.value === 'US$ Dolar Americano'){    
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(inputREal / dolar); 
    }

    if (select.value === '€ Euro'){
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(inputREal / euro);
    }
} //biblioteca JS que faz a formatacao de moeda

changeCurrency = () =>{
    const currencyName = document.getElementById('text-result')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./Assets/Euro.png"
    } 
    if(select.value === 'US$ Dolar Americano'){
        currencyName.innerHTML = 'Dolar Americano'
        currencyImg.src = "./Assets/estados-unidos (1) 1.png"
    } 
    convertValues ()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
