const countries = [
    { ru: "Афганистан", en: "Afghanistan", flag: "../img/flags/af.webp" },
    { ru: "Албания", en: "Albania", flag: "../img/flags/al.webp" },
    { ru: "Алжир", en: "Algeria", flag: "../img/flags/ad.webp" },
    { ru: "Андорра", en: "Andorra", flag: "../img/flags/af.webp" },
    { ru: "Ангола", en: "Angola", flag: "../img/flags/ao.webp" },
    {
        ru: "Антигуа и Барбуда",
        en: "Antigua and Barbuda",
        flag: "../img/flags/ag.webp",
    },
    { ru: "Аргентина", en: "Argentina", flag: "../img/flags/ar.webp" },
    { ru: "Армения", en: "Armenia", flag: "../img/flags/am.webp" },
    { ru: "Австралия", en: "Australia", flag: "../img/flags/au.webp" },
    { ru: "Австрия", en: "Austria", flag: "../img/flags/at.webp" },
    { ru: "Азербайджан", en: "Azerbaijan", flag: "../img/flags/az.webp" },
    { ru: "Багамские острова", en: "Bahamas", flag: "../img/flags/bs.webp" },
    { ru: "Бахрейн", en: "Bahrain", flag: "../img/flags/bh.webp" },
    { ru: "Бангладеш", en: "Bangladesh", flag: "../img/flags/bd.webp" },
    { ru: "Барбадос", en: "Barbados", flag: "../img/flags/bb.webp" },
    { ru: "Беларусь", en: "Belarus", flag: "../img/flags/by.webp" },
    { ru: "Бельгия", en: "Belgium", flag: "../img/flags/be.webp" },
    { ru: "Белиз", en: "Belize", flag: "../img/flags/bz.webp" },
    { ru: "Бенин", en: "Benin", flag: "../img/flags/bj.webp" },
    { ru: "Бутан", en: "Bhutan", flag: "../img/flags/bt.webp" },
    { ru: "Боливия", en: "Bolivia", flag: "../img/flags/bo.webp" },
    {
        ru: "Босния и Герцеговина",
        en: "Bosnia and Herzegovina",
        flag: "../img/flags/ba.webp",
    },
    { ru: "Ботсвана", en: "Botswana", flag: "../img/flags/bw.webp" },
    { ru: "Бразилия", en: "Brazil", flag: "../img/flags/br.webp" },
    { ru: "Бруней", en: "Brunei", flag: "../img/flags/bn.webp" },
    { ru: "Болгария", en: "Bulgaria", flag: "../img/flags/bg.webp" },
    { ru: "Буркина-Фасо", en: "Burkina Faso", flag: "../img/flags/bf.webp" },
    { ru: "Бурунди", en: "Burundi", flag: "../img/flags/bi.webp" },
    { ru: "Кабо-Верде", en: "Cabo Verde", flag: "../img/flags/cv.webp" },
    { ru: "Камбоджа", en: "Cambodia", flag: "../img/flags/kh.webp" },
    { ru: "Камерун", en: "Cameroon", flag: "../img/flags/cm.webp" },
    { ru: "Канада", en: "Canada", flag: "../img/flags/ca.webp" },
    {
        ru: "Центральноафриканская Республика",
        en: "Central African Republic",
        flag: "../img/flags/cf.webp",
    },
    { ru: "Чад", en: "Chad", flag: "../img/flags/td.webp" },
    { ru: "Чили", en: "Chile", flag: "../img/flags/cl.webp" },
    { ru: "Китай", en: "China", flag: "../img/flags/cn.webp" },
    { ru: "Колумбия", en: "Colombia", flag: "../img/flags/co.webp" },
    { ru: "Коморы", en: "Comoros", flag: "../img/flags/km.webp" },
    {
        ru: "Республика Конго",
        en: "Republic of the Congo",
        flag: "../img/flags/cg.webp",
    },
    { ru: "Коста-Рика", en: "Costa Rica", flag: "../img/flags/cr.webp" },
    { ru: "Хорватия", en: "Croatia", flag: "../img/flags/hr.webp" },
    { ru: "Куба", en: "Cuba", flag: "../img/flags/cu.webp" },
    { ru: "Кипр", en: "Cyprus", flag: "../img/flags/cy.webp" },
    { ru: "Чехия", en: "Czechia", flag: "../img/flags/cz.webp" },
    { ru: "Дания", en: "Denmark", flag: "../img/flags/dk.webp" },
    { ru: "Джибути", en: "Djibouti", flag: "../img/flags/dj.webp" },
    { ru: "Доминика", en: "Dominica", flag: "../img/flags/dm.webp" },
    {
        ru: "Доминиканская Республика",
        en: "Dominican Republic",
        flag: "../img/flags/do.webp",
    },
    { ru: "Эквадор", en: "Ecuador", flag: "../img/flags/ec.webp" },
    { ru: "Египет", en: "Egypt", flag: "../img/flags/eg.webp" },
    { ru: "Сальвадор", en: "El Salvador", flag: "../img/flags/sv.webp" },
    {
        ru: "Экваториальная Гвинея",
        en: "Equatorial Guinea",
        flag: "../img/flags/gq.webp",
    },
    { ru: "Эритрея", en: "Eritrea", flag: "../img/flags/er.webp" },
    { ru: "Эстония", en: "Estonia", flag: "../img/flags/ee.webp" },
    { ru: "Эсватини", en: "Eswatini", flag: "../img/flags/sz.webp" },
    { ru: "Эфиопия", en: "Ethiopia", flag: "../img/flags/et.webp" },
    { ru: "Фиджи", en: "Fiji", flag: "../img/flags/fj.webp" },
    { ru: "Финляндия", en: "Finland", flag: "../img/flags/fi.webp" },
    { ru: "Франция", en: "France", flag: "../img/flags/fr.webp" },
    { ru: "Габон", en: "Gabon", flag: "../img/flags/ga.webp" },
    { ru: "Гамбия", en: "Gambia", flag: "../img/flags/gm.webp" },
    { ru: "Грузия", en: "Georgia", flag: "../img/flags/ge.webp" },
    { ru: "Германия", en: "Germany", flag: "../img/flags/de.webp" },
    { ru: "Гана", en: "Ghana", flag: "../img/flags/gh.webp" },
    { ru: "Греция", en: "Greece", flag: "../img/flags/gr.webp" },
    { ru: "Гренада", en: "Grenada", flag: "../img/flags/gd.webp" },
    { ru: "Гватемала", en: "Guatemala", flag: "../img/flags/gt.webp" },
    { ru: "Гвинея", en: "Guinea", flag: "../img/flags/gn.webp" },
    { ru: "Гвинея-Бисау", en: "Guinea-Bissau", flag: "../img/flags/gw.webp" },
    { ru: "Гайана", en: "Guyana", flag: "../img/flags/gy.webp" },
    { ru: "Республика Гаити", en: "Haiti", flag: "../img/flags/ht.webp" },
    { ru: "Гондурас", en: "Honduras", flag: "../img/flags/hn.webp" },
    { ru: "Венгрия", en: "Hungary", flag: "../img/flags/hu.webp" },
    { ru: "Исландия", en: "Iceland", flag: "../img/flags/is.webp" },
    { ru: "Индия", en: "India", flag: "../img/flags/in.webp" },
    { ru: "Индонезия", en: "Indonesia", flag: "../img/flags/id.webp" },
    { ru: "Иран", en: "Iran", flag: "../img/flags/ir.webp" },
    { ru: "Ирак", en: "Iraq", flag: "../img/flags/iq.webp" },
    { ru: "Ирландия", en: "Ireland", flag: "../img/flags/ie.webp" },
    { ru: "Израиль", en: "Israel", flag: "../img/flags/il.webp" },
    { ru: "Италия", en: "Italy", flag: "../img/flags/it.webp" },
    { ru: "Кот-д’Ивуар", en: "Ivory Coast", flag: "../img/flags/ci.webp" },
    { ru: "Ямайка", en: "Jamaica", flag: "../img/flags/jm.webp" },
    { ru: "Япония", en: "Japan", flag: "../img/flags/jp.webp" },
    { ru: "Иордания", en: "Jordan", flag: "../img/flags/jo.webp" },
    { ru: "Казахстан", en: "Kazakhstan", flag: "../img/flags/kz.webp" },
    { ru: "Кения", en: "Kenya", flag: "../img/flags/ke.webp" },
    { ru: "Кирибати", en: "Kiribati", flag: "../img/flags/ki.webp" },
    { ru: "Кувейт", en: "Kuwait", flag: "../img/flags/kw.webp" },
    { ru: "Киргизия", en: "Kyrgyzstan", flag: "../img/flags/kg.webp" },
    { ru: "Лаос", en: "Laos", flag: "../img/flags/la.webp" },
    { ru: "Латвия", en: "Latvia", flag: "../img/flags/lv.webp" },
    { ru: "Ливан", en: "Lebanon", flag: "../img/flags/lb.webp" },
    { ru: "Лесото", en: "Lesotho", flag: "../img/flags/ls.webp" },
    { ru: "Либерия", en: "Liberia", flag: "../img/flags/lr.webp" },
    { ru: "Ливия", en: "Libya", flag: "../img/flags/ly.webp" },
    { ru: "Лихтенштейн", en: "Liechtenstein", flag: "../img/flags/li.webp" },
    { ru: "Литва", en: "Lithuania", flag: "../img/flags/lt.webp" },
    { ru: "Люксембург", en: "Luxembourg", flag: "../img/flags/lu.webp" },
    { ru: "Мадагаскар", en: "Madagascar", flag: "../img/flags/mg.webp" },
    { ru: "Малави", en: "Malawi", flag: "../img/flags/mw.webp" },
    { ru: "Малайзия", en: "Malaysia", flag: "../img/flags/my.webp" },
    { ru: "Мальдивы", en: "Maldives", flag: "../img/flags/mv.webp" },
    { ru: "Мали", en: "Mali", flag: "../img/flags/ml.webp" },
    { ru: "Мальта", en: "Malta", flag: "../img/flags/mt.webp" },
    {
        ru: "Маршалловы Острова",
        en: "Marshall Islands",
        flag: "../img/flags/mh.webp",
    },
    { ru: "Мавритания", en: "Mauritania", flag: "../img/flags/mr.webp" },
    { ru: "Маврикий", en: "Mauritius", flag: "../img/flags/mu.webp" },
    { ru: "Мексика", en: "Mexico", flag: "../img/flags/mx.webp" },
    {
        ru: "Федеративные Штаты Микронезии",
        en: "Micronesia",
        flag: "../img/flags/fm.webp",
    },
    { ru: "Молдавия", en: "Moldova", flag: "../img/flags/md.webp" },
    { ru: "Монако", en: "Monaco", flag: "../img/flags/mc.webp" },
    { ru: "Монголия", en: "Mongolia", flag: "../img/flags/mn.webp" },
    { ru: "Черногория", en: "Montenegro", flag: "../img/flags/me.webp" },
    { ru: "Марокко", en: "Morocco", flag: "../img/flags/ma.webp" },
    { ru: "Мозамбик", en: "Mozambique", flag: "../img/flags/mz.webp" },
    { ru: "Мьянма", en: "Myanmar", flag: "../img/flags/mm.webp" },
    { ru: "Намибия", en: "Namibia", flag: "../img/flags/na.webp" },
    { ru: "Науру", en: "Nauru", flag: "../img/flags/nr.webp" },
    { ru: "Непал", en: "Nepal", flag: "../img/flags/np.webp" },
    { ru: "Нидерланды", en: "Netherlands", flag: "../img/flags/nl.webp" },
    { ru: "Новая Зеландия", en: "New Zealand", flag: "../img/flags/nz.webp" },
    { ru: "Никарагуа", en: "Nicaragua", flag: "../img/flags/ni.webp" },
    { ru: "Нигер", en: "Niger", flag: "../img/flags/ne.webp" },
    { ru: "Нигерия", en: "Nigeria", flag: "../img/flags/ng.webp" },
    {
        ru: "КНДР (Северная Корея)",
        en: "North Korea",
        flag: "../img/flags/kp.webp",
    },
    {
        ru: "Северная Македония",
        en: "North Macedonia",
        flag: "../img/flags/mk.webp",
    },
    { ru: "Норвегия", en: "Norway", flag: "../img/flags/no.webp" },
    { ru: "Оман", en: "Oman", flag: "../img/flags/om.webp" },
    { ru: "Пакистан", en: "Pakistan", flag: "../img/flags/pk.webp" },
    { ru: "Палау", en: "Palau", flag: "../img/flags/pw.webp" },
    { ru: "Панама", en: "Panama", flag: "../img/flags/pa.webp" },
    {
        ru: "Папуа — Новая Гвинея",
        en: "Papua New Guinea",
        flag: "../img/flags/pg.webp",
    },
    { ru: "Парагвай", en: "Paraguay", flag: "../img/flags/py.webp" },
    { ru: "Перу", en: "Peru", flag: "../img/flags/pe.webp" },
    { ru: "Филиппины", en: "Philippines", flag: "../img/flags/ph.webp" },
    { ru: "Польша", en: "Poland", flag: "../img/flags/pl.webp" },
    { ru: "Португалия", en: "Portugal", flag: "../img/flags/pt.webp" },
    { ru: "Катар", en: "Qatar", flag: "../img/flags/qa.webp" },
    { ru: "Румыния", en: "Romania", flag: "../img/flags/ro.webp" },
    { ru: "Россия", en: "Russia", flag: "../img/flags/ru.webp" },
    { ru: "Руанда", en: "Rwanda", flag: "../img/flags/rw.webp" },
    {
        ru: "Сент-Китс и Невис",
        en: "Saint Kitts and Nevis",
        flag: "../img/flags/kn.webp",
    },
    { ru: "Сент-Люсия", en: "Saint Lucia", flag: "../img/flags/lc.webp" },
    {
        ru: "Сент-Винсент и Гренадины",
        en: "Saint Vincent and the Grenadines",
        flag: "../img/flags/vc.webp",
    },
    { ru: "Самоа", en: "Samoa", flag: "../img/flags/ws.webp" },
    { ru: "Сан-Марино", en: "San Marino", flag: "../img/flags/sm.webp" },
    {
        ru: "Сан-Томе и Принсипи",
        en: "Sao Tome and Principe",
        flag: "../img/flags/st.webp",
    },
    {
        ru: "Саудовская Аравия",
        en: "Saudi Arabia",
        flag: "../img/flags/sa.webp",
    },
    { ru: "Сенегал", en: "Senegal", flag: "../img/flags/sn.webp" },
    { ru: "Сербия", en: "Serbia", flag: "../img/flags/rs.webp" },
    { ru: "Сейшелы", en: "Seychelles", flag: "../img/flags/sc.webp" },
    { ru: "Сьерра-Леоне", en: "Sierra Leone", flag: "../img/flags/sl.webp" },
    { ru: "Сингапур", en: "Singapore", flag: "../img/flags/sg.webp" },
    { ru: "Словакия", en: "Slovakia", flag: "../img/flags/sk.webp" },
    { ru: "Словения", en: "Slovenia", flag: "../img/flags/si.webp" },
    {
        ru: "Соломоновы Острова",
        en: "Solomon Islands",
        flag: "../img/flags/sb.webp",
    },
    { ru: "Сомали", en: "Somalia", flag: "../img/flags/so.webp" },
    { ru: "ЮАР", en: "South Africa", flag: "../img/flags/za.webp" },
    { ru: "Южная Корея", en: "South Korea", flag: "../img/flags/kr.webp" },
    { ru: "Южный Судан", en: "South Sudan", flag: "../img/flags/ss.webp" },
    { ru: "Испания", en: "Spain", flag: "../img/flags/es.webp" },
    { ru: "Шри-Ланка", en: "Sri Lanka", flag: "../img/flags/lk.webp" },
    { ru: "Судан", en: "Sudan", flag: "../img/flags/sd.webp" },
    { ru: "Суринам", en: "Suriname", flag: "../img/flags/sr.webp" },
    { ru: "Швеция", en: "Sweden", flag: "../img/flags/se.webp" },
    { ru: "Швейцария", en: "Switzerland", flag: "../img/flags/ch.webp" },
    { ru: "Сирия", en: "Syria", flag: "../img/flags/sy.webp" },
    {
        ru: "Тайвань",
        en: "Taiwan",
        flag: "../img/flags/tw.webp",
    },
    { ru: "Таджикистан", en: "Tajikistan", flag: "../img/flags/tj.webp" },
    { ru: "Танзания", en: "Tanzania", flag: "../img/flags/tz.webp" },
    { ru: "Таиланд", en: "Thailand", flag: "../img/flags/th.webp" },
    { ru: "Того", en: "Togo", flag: "../img/flags/tg.webp" },
    { ru: "Тонга", en: "Tonga", flag: "../img/flags/to.webp" },
    {
        ru: "Тринидад и Тобаго",
        en: "Trinidad and Tobago",
        flag: "../img/flags/tt.webp",
    },
    { ru: "Тунис", en: "Tunisia", flag: "../img/flags/th.webp" },
    { ru: "Турция", en: "Turkey", flag: "../img/flags/tr.webp" },
    { ru: "Туркменистан", en: "Turkmenistan", flag: "../img/flags/tm.webp" },
    { ru: "Тувалу", en: "Tuvalu", flag: "../img/flags/tv.webp" },
    { ru: "Уганда", en: "Uganda", flag: "../img/flags/ug.webp" },
    { ru: "Украина", en: "Ukraine", flag: "../img/flags/ua.webp" },
    { ru: "ОАЭ", en: "United Arab Emirates", flag: "../img/flags/ae.webp" },
    {
        ru: "Великобритания",
        en: "United Kingdom",
        flag: "../img/flags/gb.webp",
    },
    { ru: "США", en: "United States", flag: "../img/flags/us.webp" },
    { ru: "Уругвай", en: "Uruguay", flag: "../img/flags/uy.webp" },
    { ru: "Узбекистан", en: "Uzbekistan", flag: "../img/flags/uz.webp" },
    { ru: "Вануату", en: "Vanuatu", flag: "../img/flags/vu.webp" },
    { ru: "Ватикан", en: "Vatican City", flag: "../img/flags/va.webp" },
    { ru: "Венесуэла", en: "Venezuela", flag: "../img/flags/ve.webp" },
    { ru: "Вьетнам", en: "Vietnam", flag: "../img/flags/vn.webp" },
    { ru: "Йемен", en: "Yemen", flag: "../img/flags/ye.webp" },
    { ru: "Замбия", en: "Zambia", flag: "../img/flags/zm.webp" },
    { ru: "Зимбабве", en: "Zimbabwe", flag: "../img/flags/zw.webp" },
];

const countriesCopy = [...countries];

const flagBox = document.querySelector(".main__flag");
const img = document.createElement("img");
const buttonStart = document.querySelector(".main__start-btn");
const buttonsBox = document.querySelector(".main__buttons");
const resultPoints = document.querySelector(".game-over__result");
const bestResultPoints = document.querySelector(".game-over__best-result");
const gameOver = document.querySelector(".game-over");
const healthItem = document.querySelectorAll(".main__health-point-item");

const buttonChoiseOne = document.createElement("button");
const buttonChoiseTwo = document.createElement("button");
const buttonChoiseThree = document.createElement("button");
const buttonChoiseFour = document.createElement("button");

buttonChoiseOne.className = "main__button btn-1";
buttonChoiseTwo.className = "main__button btn-2";
buttonChoiseThree.className = "main__button btn-3";
buttonChoiseFour.className = "main__button btn-4";

const arrButtons = [
    buttonChoiseOne,
    buttonChoiseTwo,
    buttonChoiseThree,
    buttonChoiseFour,
];

const hpItemsArray = [];

let currentCountry;

let resultArr;

let randomOne;
let randomTwo;
let randomThree;
let randomFour;

let result = 0;
let healthPoints = 3;

let bestResult = parseInt(localStorage.getItem("bestResult")) || 0;
bestResultPoints.textContent = bestResult;

// получаем рандомный элемент из массива countries
getRandomCountry = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

currentCountry = getRandomCountry(countriesCopy);
console.log(currentCountry);

// рендер кнопок
function buttonsRender(arr) {
    arr.forEach((index) => {
        buttonsBox.append(index);
        // console.log(index);
    });
}

// рандомим текст для кнопок
let arrRandomText = [
    (randomOne = getRandomCountry(countries)),
    (randomTwo = getRandomCountry(countries)),
    (randomThree = getRandomCountry(countries)),
    (randomFour = currentCountry),
];

function buttonTextContentRandom(arr) {
    if (countriesCopy.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
            buttonChoiseOne.textContent = arr[0].ru;
            buttonChoiseTwo.textContent = arr[1].ru;
            buttonChoiseThree.textContent = arr[2].ru;
            buttonChoiseFour.textContent = arr[3].ru;
        }
    }
}

function newRandomText(array) {
    resultArr = [];
    for (const element of array) {
        let result = element;
        result = getRandomCountry(countries);
        resultArr.push(result);
    }
    currentCountry = getRandomCountry(countriesCopy);
    resultArr[3] = currentCountry;
    randomElement(resultArr);
    buttonTextContentRandom(resultArr);
}

function randomElement(arr) {
    resultArr = [...arr].sort(() => Math.random() - 0.4);
    // console.log(arr);
}

buttonStart.addEventListener("click", () => {
    result = 0;
    setTimeout(() => {
        buttonsRender(arrButtons);
        buttonsBox.classList.remove("none");
        buttonStart.classList.add("none");
        flagBox.append(img);
        newGame();
        img.src = currentCountry.flag;
        console.log(img.src);
        console.log(currentCountry);
        if (newGame) {
            hpItemsArray.forEach((item) => {
                item.style.fill = "rgb(235, 67, 67)";
            });
        }
    }, 300);
});

buttonsBox.addEventListener("click", onClickButtons);

function onClickButtons(event) {
    const target = event.target;
    if (target.textContent === currentCountry.ru) {
        target.classList.add("button-win");
        console.log("win");
        removeWinClass(target);
        soundCorrectChoise();
        result++;
    } else {
        loseHealth();
        soundIncorrectChoise();
        if (healthPoints === 0) {
            return zeroHP();
        }
        target.classList.add("button-lose");
        console.log("lose");
        removeLoseClass(target);
        console.log(healthPoints);
    }
    removeCurrentCounrtry();
    arrayLength();
}

function removeWinClass(target) {
    if (countriesCopy.length !== 0) {
        setTimeout(() => {
            newRandomText(arrRandomText);
            img.src = currentCountry?.flag;
            target.classList.remove("button-win");
            console.log(currentCountry);
        }, 800);
    }
}

function removeLoseClass(target) {
    if (countriesCopy.length !== 0) {
        setTimeout(() => {
            newRandomText(arrRandomText);
            img.src = currentCountry?.flag;
            target.classList.remove("button-lose");
            console.log(currentCountry);
        }, 800);
    }
}

function zeroHP() {
    isBestResult();
    flagBox.classList.add("none");
    buttonsBox.classList.add("none");
    gameOver.classList.remove("none");
    buttonStart.classList.remove("none");
    resultPoints.textContent = result;
    resultPoints.style.color = "red";
}

function newGame() {
    healthPoints = 3;
    healthItem.forEach((item) => {
        item.classList.remove("none");
        hpItemsArray.push(item);
    });
    randomElement(arrRandomText);
    flagBox.classList.remove("none");
    buttonsBox.classList.remove("none");
    gameOver.classList.add("none");
    buttonStart.classList.add("none");
    buttonTextContentRandom(resultArr);
    newRandomText(arrRandomText);
}

function loseHealth() {
    healthPoints--;
    hpItemsArray.reverse();
    hpItemsArray.forEach((item, index) => {
        if (healthPoints === index) {
            item.style.fill = "rgba(255, 255, 255, 0)";
            console.log(index);
        }
        console.log(hpItemsArray);
    });
    console.log(hpItemsArray);
}

function soundCorrectChoise() {
    const clickSound = new Audio();
    clickSound.src = "../sound/correct.mp3";
    clickSound.autoplay = true;
    // console.log(clickSound);
}

function soundIncorrectChoise() {
    const clickSound = new Audio();
    clickSound.src = "../sound/wrong.mp3";
    clickSound.autoplay = true;
    // console.log(clickSound);
}

function removeCurrentCounrtry() {
    countriesCopy.forEach((item, index) => {
        if (item === currentCountry) {
            countriesCopy.splice(index, 1);
            return countriesCopy;
        }
    });
}

function arrayLength() {
    if (countriesCopy.length < 1) {
        gameOver.classList.remove("none");
        flagBox.classList.toggle("none");
        buttonsBox.classList.toggle("none");
        resultPoints.textContent = result;
        resultPoints.style.color = "red";
        isBestResult();
    }
}

function isBestResult() {
    if (bestResult < result) {
        bestResult = result;
        bestResultPoints.textContent = bestResult;
        localStorage.setItem("bestResult", bestResult.toString());
    }

    console.log(localStorage);
}
