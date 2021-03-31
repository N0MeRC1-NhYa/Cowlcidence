const owlDataRU = '[{"word" : "пляж"}, {"word" : "дикий запад"}, {"word" : "древний рим"}, {"word" : "завтрак"}, {"word" : "сыр"}, {"word" : "кухня"}, {"word" : "химимческие элементы"}, {"word" : "поход"}, {"word" : "школа"}, {"word" : "сила"}, {"word" : "корабль"}, {"word" : "телепередачи"}, {"word" : "космос"}, {"word" : "известные картины"}, {"word" : "российские музыкальные группы"}, {"word" : "погода"}, {"word" : "осень"}, {"word" : "ключи"}, {"word" : "опасные профессии"}, {"word" : "российские фильмы"}, {"word" : "цирк"}, {"word" : "центр города"}, {"word" : "театр"}, {"word" : "обитатели зоопарка"}, {"word" : "компьютер"}, {"word" : "ванная комната"}, {"word" : "вампиры"}]';
const larkDataRU = '[{"word" : "телеведущие"}, {"word" : "злодеи из мультфильмов"}, {"word" : "название конфет и шоколада"}, {"word" : "напитки"}, {"word" : "копытные животные"}, {"word" : "известные писатели"}, {"word" : "телеканалы"}, {"word" : "детективные фильмы и сериалы"}, {"word" : "породы собак"}, {"word" : "существительные, заканчивающиеся на -ай "}, {"word" : "города россии"}, {"word" : "созвездия"}, {"word" : "ученые"}, {"word" : "художники"}, {"word" : "государства африки"}, {"word" : "герои и боги древней греции"}, {"word" : "кондитерские изделия"}, {"word" : "металлы и сплавы"}, {"word" : "фильмы и мультфильмы, в названии которых есть цвет"}, {"word" : "предметы интерьера"}, {"word" : "известные животные"}, {"word" : "транспортные средства"}, {"word" : "электричесикие приборы"}, {"word" : "архитектурные приборы"}]';
const blitzDataRU = '[{"word" : "топливо,архитектурный стиль,книга с мужским именем в названии,инструмент в оркестре,полководец,соревнования"}, {"word" : "газета,известный кот,слово начинающееся на комб-,зарубежный режиссер,минеральная вода,марка чая"}, {"word" : "шотландия,образоваие,морское млекопитающее,песня группы кино,военный корабль,зарубежный политик"}, {"word" : "тембр голоса,скандинавия,гостиница,фруктовый сок,произведение чехова,имя птицы из мультфильма"}, {"word" : "соус,вулкан,сказка андерсена,лиственные дерево,средневековое оружие,сантехника"},{"word" : "известная елена,квентин тарантино,фехтование,пещерный человек,пустыня,чудо света"},{"word" : "нобелевская премия,персонаж из русских народных сказок,субкультура,бабочка,карта,подарок"},{"word" : "сахар,Германия,популярная профессия,водный вид спорта,герой анекдота,ящерица"},{"word" : "флот,дорожнй знак,островное государство,известная наталья,ландшафт,комик"},{"word" : "пирожное,слово заканчивающееся на нс,музыкальная группа 90-ых,торговая сеть,фокусник,ирландия"},{"word" : "дворец,сектор,фильм про шпионов,начинка для конфет,нелетающая птица,солнце"},{"word" : "механизм,цирковая профессия,рогатое животное,крупная иностранная компания,телевикторина,титул"},{"word" : "экстренная служба, природное явление,европейская столица,рифма к слову дуб, хищная птица, мост"},{"word" : "кофе,монета,капитан...,жалящее насекомое,головной убор,чувство"},{"word" : "праздник,команда собаке,дальний родственник,иностранный футбольный клуб,известная мария,журнал"},{"word" : "Маша,посуда,русский художник,изобретение 20 века,цвет глаз,улица"}]';

const owlDataEN = '[{"word" : "beach"}, {"word" : "wild west"}, {"word" : "Ancient Rome"}, {"word" : "breakfast"}, {"word" : "cheese"}, {"word" : "kitchen"}, {"word" : "chemical elements"}, {"word" : "trip"}, {"word" : "school"}, {"word" : "power"}, {"word" : "ship"}, {"word" : "TV shows"}, {"word" : "space"}, {"word" : "famous drawings"}, {"word" : "Russian musical groups"}, {"word" : "weather"}, {"word" : "fall"}, {"word" : "keys"}, {"word" : "dangerous professions"}, {"word" : "russian films"}, {"word" : "circus"}, {"word" : "city center"}, {"word" : "theater"}, {"word" : "zoo inhabitants"}, {"word" : "computer"}, {"word" : "bathroom"}, {"word" : "vampires"}]';
const larkDataEN = '[{"word" : "TV presenters"}, {"word" : "cartoon villains"}, {"word" : "sweets or chocolates name"}, {"word" : "drinks"}, {"word" : "hoofed animals"}, {"word" : "famous writers"}, {"word" : "TV channels"}, {"word" : "detective films or series"}, {"word" : "dog breeds"}, {"word" : "nouns with -te ending"}, {"word" : "russian cities"}, {"word" : "constellations"}, {"word" : "scientists"}, {"word" : "drawers"}, {"word" : "african states"}, {"word" : "heroes and gods of Ancient Greece"}, {"word" : "confectionery"}, {"word" : "metals and alloys"}, {"word" : "films or cartoons with color in their name"}, {"word" : "interior items"}, {"word" : "famous animals"}, {"word" : "vehicles"}, {"word" : "electrical appliances"}, {"word" : "architecture appliances"}]';
const blitzDataEN = '[{"word" : "fuel,architecture style,a book with man\'s name in the heading, orchestra instrument, general, competition"}, {"word" : "newspaper, famous cat, word starting with -comb, foreign director, mineral water, brand of tea"}, {"word" : "scotland, education, marine mammal, movie group song, warship, foreign politician"}, {"word" : "timbre of voice, scandinavia, hotel, fruit juice, chekhov\'s work, the name of a bird from the cartoon"}, {"word" : "sauce, volcano, andersen\'s tale, deciduous tree, medieval weapons, plumbing"},{"word" : "famous elena, quentin tarantino, fencing, caveman, desert, wonder of the world"},{"word" : "Nobel Prize, character from Russian folk tales, subculture, butterfly, card, gift"},{"word" : "sugar, Germany, popular profession, water sport, hero of anecdote, lizard"},{"word" : "navy, road sign, island state, famous natalia, landscape, comedian"},{"word" : "cake, -nce ending word, 90s music group, retail chain, magician, ireland"},{"word" : "palace, sector, spy movie, candy filling, flightless bird, sun"},{"word" : "mechanism, circus profession, horned animal, large foreign company, game show, title"},{"word" : "emergency service, natural phenomenon, European capital, rhyme for the word oak, bird of prey, bridge"},{"word" : "coffee, coin, captain ..., sting insect, hat, feeling"},{"word" : "holiday, dog team, distant relative, foreign football club, famous maria, magazine"},{"word" : "Masha, dishes, Russian artist, invention of the 20th century, eye color, street"}]';

let EN = false;


let owlSet = new Set();
document.getElementById("owls").addEventListener('click', function (){
    blockCards();
    let generated = Math.floor(Math.random() * 27);
    if (owlSet.has(generated)){
        generated = Math.floor(Math.random() * 27);
    }
    else{
        owlSet.add(generated);
    }
    const datalist = returnData("owl");
    console.log(owlSet);
    document.getElementById("owl").innerHTML = "<p>" + datalist[generated].word + "</p>";
    setTimer();
    }
)
let larkSet = new Set();
document.getElementById("larks").addEventListener('click', function (){
    blockCards();
    let generated = Math.floor(Math.random() * 24);
    if (larkSet.has(generated)){
        generated = Math.floor(Math.random() * 24);
    }
    else{
        larkSet.add(generated);
    }
    const datalist = returnData("lark");
    document.getElementById("lark").innerHTML = "<p>"  + datalist[generated].word + "</p>";
    setTimer();
    }
)
let blitzSet = new Set();
document.getElementById("blitzes").addEventListener('click', function (){
    blockCards();
    let generated = Math.floor(Math.random() * 16);
    if (blitzSet.has(generated)){
        generated = Math.floor(Math.random() * 16);
    }
    else{
        blitzSet.add(generated);
    }
    const datalist = returnData("blitz");
    const blitzWords = datalist[generated].word.split(",");
    let newblock="<ol>";
    for (let i = 0; i < blitzWords.length; i++){
        newblock += "<li>" + blitzWords[i] + "</li>";
    }
    newblock += "</ol>";
    document.getElementById("blitz").innerHTML = newblock;
    setTimer();
    }
)


function setTimer(){
    let timer; // пока пустая переменная
    let x = 60; // стартовое значение обратного отсчета
    countdown(); // вызов функции
    function countdown(){  // функция обратного отсчета
        document.getElementById('timer').innerHTML = "<p>" + x + "</p>";
        x--; // уменьшаем число на единицу
        if (x<0){
            clearTimeout(timer); // таймер остановится на нуле
            alert("Time's up!");
            unblockCards();
        }
        else {
            timer = setTimeout(countdown, 1000);
        }
    }
}

document.getElementById("change-lang").addEventListener('click', function (qualifiedName) {
        if (!EN) {
            document.getElementById("change-lang").style.backgroundImage ="url('https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg')";
            EN = true;
            const textField = document.getElementsByClassName("text-field");
            for (let field = 0; field < textField.length; field++){
                if (textField[field].textContent === "Здесь будет слово") {
                    textField[field].innerHTML = "<p>Word will be here</p>";
                }
                else {
                    let data;
                    switch(textField[field].id) {
                        case "owl":
                            data = returnData("owl");
                            textField[field].innerHTML = "<p>" + data[getValueByIndex(owlSet, owlSet.size - 1)].word  + "</p>";
                            break;
                        case "lark":
                            data = returnData("lark");
                            textField[field].innerHTML = "<p>" + data[getValueByIndex(larkSet, larkSet.size - 1)].word + "</p>";
                            break;
                        case "blitz":
                            data = returnData("blitz");
                            const blitzWords = data[getValueByIndex(blitzSet, blitzSet.size - 1)].word.split(",");
                            let newblock="<ol>";
                            for (let i = 0; i < blitzWords.length; i++){
                                newblock += "<li>" + blitzWords[i] + "</li>";
                            }
                            newblock += "</ol>";
                            document.getElementById("blitz").innerHTML = newblock;
                            break;
                    }
                }
            }
            document.getElementById("owl-heading").innerText = "Owls";
            document.getElementById("lark-heading").innerText = "Larks";
            document.getElementById("blitz-heading").innerText = "Blitz";
            const cons = document.getElementsByClassName("cons");
            for (let i = 0; i < cons.length; i++){
                cons[i].innerHTML = "<p>Coincidence round</p>";
            }
            let nonCons = document.getElementsByClassName("non-cons");
            for (let i = 0; i < nonCons.length; i++){
                nonCons[i].innerHTML = "<p>Non-coincidence round</p>";
            }
        } else{
            document.getElementById("change-lang").style.backgroundImage = "url('https://st.depositphotos.com/2711989/3513/v/600/depositphotos_35135847-stock-illustration-british-union-jack-flag.jpg')";
            EN = false;
            const textField = document.getElementsByClassName("text-field");
            for (let field = 0; field < textField.length; field++){
                if (textField[field].textContent === "Word will be here") {
                    textField[field].innerHTML = "<p>Здесь будет слово</p>";
                }
                else {
                    let data;
                    switch(textField[field].id) {
                        case "owl":
                            data = returnData("owl");
                            textField[field].innerHTML = "<p>" + data[getValueByIndex(owlSet, owlSet.size - 1)].word  + "</p>";
                            break;
                        case "lark":
                            data = returnData("lark");
                            textField[field].innerHTML = "<p>" + data[getValueByIndex(larkSet, larkSet.size - 1)].word  + "</p>";
                            break;
                        case "blitz":
                            data = returnData("blitz");
                            const blitzWords = data[getValueByIndex(blitzSet, blitzSet.size - 1)].word.split(",");
                            let newblock="<ol>";
                            for (let i = 0; i < blitzWords.length; i++){
                                newblock += "<li>" + blitzWords[i] + "</li>";
                            }
                            newblock += "</ol>";
                            document.getElementById("blitz").innerHTML = newblock;
                            break;
                    }
                }
            }
            document.getElementById("owl-heading").innerText = "Совы";
            document.getElementById("lark-heading").innerText = "Жаворонки";
            document.getElementById("blitz-heading").innerText = "Блиц";
            const cons = document.getElementsByClassName("cons");
            for (let i = 0; i < cons.length; i++){
                cons[i].innerHTML = "<p>Раунд на совпадения</p>";
            }
            let nonCons = document.getElementsByClassName("non-cons");
            for (let i = 0; i < nonCons.length; i++){
                nonCons[i].innerHTML = "<p>Раунд на несовпадения</p>";
            }
        }
    }
)
function blockCards(){
    const cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++){
        cards[i].style.pointerEvents = 'none';
    }
}

function unblockCards(){
    const cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++){
        cards[i].style.pointerEvents = 'auto';
    }
}

function returnData(card){
    if (EN){
        switch(card){
            case "owl":
                return JSON.parse(owlDataEN);
            case "lark":
                return JSON.parse(larkDataEN);
            case "blitz":
                return JSON.parse(blitzDataEN);

        }
    }
    else {
        switch(card){
            case "owl":
                return JSON.parse(owlDataRU);
            case "lark":
                return JSON.parse(larkDataRU);
            case "blitz":
                return JSON.parse(blitzDataRU);

        }
    }
}

const getValueByIndex = (set, index) => {
    let ind = 0
    let res

    for (let value of set) {
        if (ind === index) {
            res = value
            break
        }
        ind++
    }
    return res
}