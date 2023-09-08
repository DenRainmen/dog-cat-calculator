 /*location.assign("./index.html");*/

function catRun() {

    let main = document.querySelector('main');
    
    main.innerHTML = `
    <h1>Сколько лет твоему питомцу?</h1>
    <p>Введите возраст кошки(только для кошек старше 3 лет)</p>
    <input class="petAge" type="text"  >
    <input type="button" class="btnRes" value="Посчитать">
    <p>Возраст кошки в человеческих годах</p>
    <input class="humanAge" type="text" >
    <br>
    <br>
    
    <input type="button" class="btn" value="НАЗАД" onclick="location.reload()">
        
     
   `;


function ageСalculation(){
    let petAge = document.querySelector(".petAge");
    let humanAge = document.querySelector(".humanAge");
    let age = petAge.value;

    age = 24 + (age - 2) * 4;
    humanAge.value = Math.floor(age);
}

let button = document.querySelector('.btnRes');
button.addEventListener('click', ageСalculation);
    
}



function dogRun() {
    let main = document.querySelector('main');
    main.innerHTML = `<h1>Сколько лет твоему питомцу?</h1>
    <p>Введите возраст собаки</p>
    <input class="petAge" type="text" >
    <input type="button" class="btnRes" value="Посчитать">
    <p>Возраст собаки в человеческих годах</p>
    <input class="humanAge" type="text" >
    <br>
    <br>
    <input type="button" class="btn" value="НАЗАД" onclick="location.reload()">`;

    function ageСalculation() {
        let petAge = document.querySelector(".petAge"); // помещаем поле для записи возраста в переменную petAge
        let humanAge = document.querySelector(".humanAge"); // что нужно написать в скобочках?
        let age = petAge.value; // помещаем введенный пользователем возраст в переменную age
        age = Math.log(age) * 16 + 31; // вычисляем возраст по формуле с логарифмами, которая точнее других всего отражает возраст собаки
        humanAge.value = Math.floor(age); // выводим результат в поле humanAge
        
        
        }
        
        let button = document.querySelector('.btnRes');
        button.addEventListener('click', ageСalculation);


}

function blindVer(){
    let body = document.querySelector("body");
    body.style.fontSize = "160%";

    let bigText = document.getElementsByClassName("btn")
    for (let i = 0; i < bigText.length; i++) {
        bigText[i].style.fontSize = "large";
        
    }
}


let dogButton = document.querySelector(".btnDog");
dogButton.addEventListener("click", dogRun);


let catButton = document.querySelector(".btnCat");
catButton.addEventListener("click", catRun);


let bigText = document.querySelector(".bigText")
bigText.addEventListener("click", blindVer)