const owlData = '[{"word" : "пляж"}, {"word" : "дикий запад"}, {"word" : "древний рим"}, {"word" : "завтрак"}, {"word" : "сыр"}, {"word" : "кухня"}, {"word" : "химимческие элементы"}, {"word" : "поход"}, {"word" : "школа"}, {"word" : "сила"}, {"word" : "корабль"}, {"word" : "телепередачи"}, {"word" : "космос"}, {"word" : "известные картины"}, {"word" : "российские музыкальные группы"}, {"word" : "погода"}, {"word" : "осень"}, {"word" : "ключи"}, {"word" : "опасные профессии"}, {"word" : "российские фильмы"}, {"word" : "цирк"}, {"word" : "центр города"}, {"word" : "театр}, {"word" : "обитатели зоопарка"}, {"word" : "российские фильмы"}, {"word" : "ванная комната"}, {"word" : "вампиры"}]';
const larkData = '[{"word" : "телеведущие"}, {"word" : "злодеи из мультфильмов"}, {"word" : "название конфет и шоколада"}, {"word" : "напитки"}, {"word" : "копытные животные"}, {"word" : "напитки"}, {"word" : "телеканалы"}, {"word" : "детективные фильмы и сериалы"}, {"word" : "породы собак"}, {"word" : "существительные, заканчивающиеся на -ай "}, {"word" : "города россии"}, {"word" : "созвездия"}, {"word" : "ученые"}, {"word" : "художники"}, {"word" : "государства африки"}, {"word" : "герои и боги древней греции"}, {"word" : "кондитерские изделия"}, {"word" : "металлы и сплавы"}, {"word" : "фильмы и мультфильмы, в названии которых есть цвет"}, {"word" : "предметы интерьера"}, {"word" : "созвездия"}, {"word" : "транспортные средства"}, {"word" : "электричесике приборы"}, {"word" : "архитектурные приборы"}]';
const blitzData = '[{"word" : "топливо,архитектурный стиль,книга с мужским именем в названии,инструмент в оркестре,полководец,соревнования"}, {"word" : "газета,известный кот,слово начинающееся на комб-,зарубежный режиссер,минеральная вода,марка чая"}, {"word" : "шотландия,образоваие,морское млекопитающее,песня группы кино,военный корабль,зарубежный политик"}, {"word" : "тембр голоса,скандинавия,гостиница,фруктовый сок,произведение чехова,имя птицы из мультфильма"}, {"word" : "соус,вулкан,сказка андерсена,лиственные дерево,средневековое оружие,сантехника"},{"word" : "известная елена,квентин тарантино,фехтование,пещерный человек,пустыня,чудо света"},{"word" : "нобелевская премия,персонаж из русских народных сказок,субкультура,бабочка,карта,подарок"},{"word" : "сахар,Германия,популярная профессия,водный вид спорта,герой анекдота,ящерица"},{"word" : "флот,дорожнй знак,островное государство,известная наталья,ландшафт,комик"},{"word" : "пирожное,слово заканчивающееся на нс,музыкальная группа 90-ых,торговая сеть,фокусник,ирландия"},{"word" : "дворец,сектор,фильм про шпионов,начинка для конфет,нелетающая птица,солнце"},{"word" : "механизм,цирковая профессия,рогатое животное,крупная иностранная компания,телевикторина,титул"},{"word" : "экстренная служба, природное явление,европейская столица,рифма к слову дуб, хищная птица, мост},{"word" : "кофе,монета,капитан...,жалящее насекомое,головной убор,чувство"},{"word" : "праздник,команда собаке,дальний родственник,иностранный футбольный клуб,известная мария,журнал"},{"word" : "Маша,посуда,русский художник,изобретение 20 века,цвет глаз,улица"}]';





document.getElementById("owls").addEventListener('click', function (){
    const generated = Math.floor(Math.random() * owlData.length);
    const datalist = JSON.parse(owlData);
    console.log(datalist);
    document.getElementById("owl").innerHTML = "<p>" + datalist[generated].word + "</p>";
    alert(owlData.length);
    setTimer();
    }
)

document.getElementById("larks").addEventListener('click', function (){
    const generated = Math.floor(Math.random() * larkData.length);
    const datalist = JSON.parse(larkData);
    document.getElementById("lark").innerHTML = "<p>"  + datalist[generated].word + "</p>";
    alert(larkData.length);
    setTimer();
    }
)

document.getElementById("blitzes").addEventListener('click', function (){
    const generated = Math.floor(Math.random() * blitzData.length);
    const datalist = JSON.parse(blitzData);
    const blitzWords = datalist[generated].word.split(",");
    let newblock="";
    for (let i = 0; i < blitzWords.length; i++){
        newblock += "<p>" + blitzWords[i] + "</p>";
    }
    document.getElementById("blitz").innerHTML = newblock;
    alert(blitzData.length);
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
            setInterval(function (){
                document.getElementById('timer').innerHTML = "<p>" + 60 + "</p>";
            }, 1000);

        }
        else {
            timer = setTimeout(countdown, 1000);
        }
    }
}

let flag = 0;

document.getElementById("change-lang").addEventListener('click', function () {
        if (flag === 0) {
            document.getElementById("change-lang").style.backgroundImage ="url('https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg')";
            flag = 1;
            const textField = document.getElementsByClassName("text-field");
            for (let field = 0; field < textField.length; field++){
                textField[field].innerHTML = "<p>Word will be here</p>";
            }
            document.getElementById("owl-heading").innerText = "Owls";
            document.getElementById("lark-heading").innerText = "Larks";
            document.getElementById("blitz-heading").innerText = "Blitz";
            const cons = document.getElementsByClassName("cons");
            for (let i = 0; i < cons.length; i++){
                cons[i].innerHTML = "<p>Coincidence round</p>";
            }
            let nonCons = document.getElementsByClassName("non-cons");
            for (let i = 0; i < cons.length; i++){
                nonCons[i].innerHTML = "<p>Non-coincidence round</p>";
            }
        } else{
            document.getElementById("change-lang").style.backgroundImage = "url('https://st.depositphotos.com/2711989/3513/v/600/depositphotos_35135847-stock-illustration-british-union-jack-flag.jpg')";
            flag = 0;
            const textField = document.getElementsByClassName("text-field");
            for (let field = 0; field < textField.length; field++){
                textField[field].innerHTML = "<p>Здесь будет слово</p>";
            }
            document.getElementById("owl-heading").innerText = "Совы";
            document.getElementById("lark-heading").innerText = "Жаворонки";
            document.getElementById("blitz-heading").innerText = "Блиц";
            const cons = document.getElementsByClassName("cons");
            for (let i = 0; i < cons.length; i++){
                cons[i].innerHTML = "<p>Раунд на совпадения</p>";
            }
            let nonCons = document.getElementsByClassName("non-cons");
            for (let i = 0; i < cons.length; i++){
                nonCons[i].innerHTML = "<p>Раунд на несовпадения</p>";
            }
        }
    }
)