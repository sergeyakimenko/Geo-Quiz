const items = document.querySelectorAll(".map-item");
const itemsConatiner = document.querySelector(".rf-map");
const mapText = document.querySelector(".map-text");

const firstTryText = document.querySelector(".map-try-text__first");
const secondTryText = document.querySelector(".map-try-text__second");
const thirdTryText = document.querySelector(".map-try-text__third");
const mapWrapper = document.querySelector(".map-wrapper");
const timer = document.querySelector(".map__timer");
const modalWindow = document.querySelector(".modal-window");
const closeButton = document.querySelector(".modal-window__button-close");
const restartButton = document.querySelector(".modal-window__button-restart");
const healtItems = document.querySelectorAll(".map__health-point-item");

const buttonsSoundOptions = document.querySelector(".map__sound-option");
const buttonSoundOn = document.querySelector(".map__sound-option-on");
const buttonSoundOff = document.querySelector(".map__sound-option-off");

const buttonsThemeOptions = document.querySelector(".map__theme");
const buttonLightTheme = document.querySelector(".map__theme-light");
const buttonsDarkTheme = document.querySelector(".map__theme-dark");

buttonsThemeOptions.addEventListener("click", buttonThemeToggle);

function buttonThemeToggle(event) {
    if (event.target === buttonLightTheme) {
        buttonLightTheme.classList.toggle("none");
        buttonsDarkTheme.classList.toggle("none");
        document.body.classList.toggle("dark-theme");
    } else {
        buttonLightTheme.classList.toggle("none");
        buttonsDarkTheme.classList.toggle("none");
        document.body.classList.toggle("dark-theme");
    }
}

buttonsSoundOptions.addEventListener("click", buttonsSoundToggle);

function buttonsSoundToggle(event) {
    if (event.target === buttonSoundOn) {
        buttonSoundOn.classList.toggle("none");
        buttonSoundOn.setAttribute("sound", "off");
        buttonSoundOff.classList.toggle("none");
    } else {
        buttonSoundOn.removeAttribute("sound");
        buttonSoundOff.classList.toggle("none");
        buttonSoundOn.classList.toggle("none");
    }
    soundClick();
}

let healthPoints = 3;

// function disableClick(event) {}
const hpItemsArray = [];
modalWindow.addEventListener("click", (event) => {
    const target = event.target;
    if (target === closeButton) {
        modalWindow.classList.add("none");
        itemsConatiner.removeEventListener("click", onclickItems, false);
    }
    if (target === restartButton) {
        modalWindow.classList.add("none");
        healthPoints = 3;
        items.forEach((item) => {
            item.removeAttribute("data-completed");
        });
        hpItemsArray.forEach((item) => {
            item.style.fill = "rgb(235, 67, 67)";
        });
        mapText.classList.toggle("none");
    }
    document.documentElement.style.overflow = "";
});

const regions = [
    { title: "Москва" },
    { title: "Санкт-Петербург" },
    { title: "Ненецкий АО" },
    { title: "Ярославская область" },
    { title: "Челябинская область" },
    { title: "Ульяновская область" },
    { title: "Тюменская область" },
    { title: "Тульская область" },
    { title: "Свердловская область" },
    { title: "Рязанская область" },
    { title: "Орловская область" },
    { title: "Омская область" },
    { title: "Новгородская область" },
    { title: "Липецкая область" },
    { title: "Курская область" },
    { title: "Курганская область" },
    { title: "Калининградская область" },
    { title: "Ивановская область" },
    { title: "Брянская область" },
    { title: "Астраханская область" },
    { title: "Хабаровский край" },
    { title: "Чеченская Республика" },
    { title: "Удмуртская Республика" },
    { title: "Республика Северная Осетия — Алания" },
    { title: "Республика Мордовия" },
    { title: "Республика Карелия" },
    { title: "Республика Калмыкия" },
    { title: "Республика Ингушетия" },
    { title: "Республика Алтай" },
    { title: "Республика Башкортостан" },
    { title: "Республика Адыгея" },
    { title: "Республика Коми" },
    { title: "Кировская область" },
    { title: "Пензенская область" },
    { title: "Тамбовская область" },
    { title: "Мурманская область" },
    { title: "Ленинградская область" },
    { title: "Вологодская область" },
    { title: "Костромская область" },
    { title: "Псковская область" },
    { title: "Архангельская область" },
    { title: "Ямало-Ненецкий АО" },
    { title: "Чукотский АО" },
    { title: "Еврейская автономная область" },
    { title: "Республика Тыва" },
    { title: "Сахалинская область" },
    { title: "Амурская область" },
    { title: "Республика Бурятия" },
    { title: "Республика Хакасия" },
    { title: "Кемеровская область" },
    { title: "Новосибирская область" },
    { title: "Алтайский край" },
    { title: "Республика Дагестан" },
    { title: "Ставропольский край" },
    {
        title: "Кабардино-Балкарская Республика",
    },
    {
        title: "Карачаево-Черкесская Республика",
    },
    { title: "Краснодарский край" },
    { title: "Ростовская область" },
    { title: "Самарская область" },
    { title: "Республика Татарстан" },
    { title: "Республика Марий Эл" },
    { title: "Чувашская Республика" },
    { title: "Нижегородская область" },
    { title: "Владимирская область" },
    { title: "Московская область" },
    { title: "Калужская область" },
    { title: "Белгородская область" },
    { title: "Забайкальский край" },
    { title: "Приморский край" },
    { title: "Камчатский край" },
    { title: "Магаданская область" },
    { title: "Республика Саха (Якутия)" },
    { title: "Красноярский край" },
    { title: "Оренбургская область" },
    { title: "Саратовская область" },
    { title: "Волгоградская область" },
    { title: "Воронежская область" },
    { title: "Смоленская область" },
    { title: "Тверская область" },
    { title: "Пермский край" },
    { title: "Ханты-Мансийский АО - Югра" },
    { title: "Томская область" },
    { title: "Иркутская область" },
];

const getRandomElemet = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

let copyRegions = [...regions];
// console.log(copyRegions);
let randomElement = getRandomElemet(copyRegions);
mapText.textContent = randomElement.title;
// console.log(randomElement);
// console.log(items);
let clickCounter = 0;

let firstTryCounter = 0;
let secondTryCounter = 0;
let thirdTryCounter = 0;

firstTryText.textContent = "Угадано с первой попытки: ";
secondTryText.textContent = "Угадано со второй попытки: ";
thirdTryText.textContent = "Угадано с третьей и более попытки: ";

itemsConatiner.addEventListener("click", onclickItems);

function onclickItems(event) {
    const target = event.target;
    pushItems();
    if (target.nodeName !== "path") {
        return;
    }
    showItemText(event);
    soundClick();
    if (target.dataset.title === randomElement.title) {
        if (clickCounter === 0) {
            target.dataset.completed = "first";
            firstTryCounter++;
            firstTryText.textContent = `Угадано с первой попытки: ${firstTryCounter}`;
            console.log(target.dataset);
        } else if (clickCounter === 1) {
            secondTryCounter++;
            secondTryText.textContent = `Угадано со второй попытки: ${secondTryCounter}`;
            target.dataset.completed = "second";
        } else {
            loseHealth();
            thirdTryCounter++;
            thirdTryText.textContent = `Угадано с третьей и более попытки: ${thirdTryCounter}`;
            target.dataset.completed = "third";
            if (healthPoints === 0) {
                modalWindow.classList.toggle("none");
                document.documentElement.style.overflow = "hidden";
                mapText.classList.add("none");
                soundGameOver();
            }
        }
        clickCounter = 0;
        // console.log(clickCounter);
        const index = copyRegions.findIndex(
            (region) => region.title === randomElement.title
        );
        if (index !== -1) {
            copyRegions.splice(index, 1);
        }
        if (copyRegions.length === 0) {
            mapText.textContent = "Игра завершена!";
            modalWindow.classList.remove("none");
            mapText.classList.toggle("none");
        }
        randomElement =
            copyRegions.length > 0 ? getRandomElemet(copyRegions) : null;
        console.log("win");
        // console.log(randomElement);
    } else {
        console.log("lose");
        clickCounter++;
        // console.log(clickCounter);
    }

    mapText.textContent = randomElement.title;
    isLose();
    // console.log(clickCounter);
}

// items.forEach((item) => {
//     item.addEventListener("click", function () {});
// });

function isLose() {
    if (clickCounter >= 3) {
        items.forEach((item) => {
            if (item.dataset.title === randomElement.title) {
                item.dataset.completed = "lose";
            }
        });
    }
}

function showItemText(event) {
    const target = event.target;
    const svg = target.closest("svg");
    svg.querySelectorAll(".map-item-text, .map-item-text-bg").forEach((el) =>
        el.remove()
    );

    const textElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );
    const textBg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );

    const bbox = target.getBBox();
    const centerX = bbox.x + bbox.width / 2;
    const centerY = bbox.y + bbox.height / 2;

    textElement.classList.add("map-item-text");
    textBg.classList.add("map-item-text-bg");

    svg.appendChild(textBg);
    svg.appendChild(textElement);

    textBg.style.transition = "none";
    textBg.setAttribute("fill", "white");
    textBg.setAttribute("rx", "3");
    textBg.setAttribute("ry", "3");
    textBg.setAttribute("filter", "url(#text-shadow)");

    textElement.setAttribute("x", centerX);
    textElement.setAttribute("y", centerY);
    textElement.setAttribute("text-anchor", "middle");
    textElement.setAttribute("textLength", "130"); // Желаемая ширина
    textElement.setAttribute("lengthAdjust", "spacingAndGlyphs"); // Равн
    textElement.setAttribute("dominant-baseline", "middle");
    // console.log(textElement);

    svg.appendChild(textBg);
    svg.appendChild(textElement);
    textElement.textContent = target.dataset.title;

    setTimeout(() => {
        const textLength = textElement.getComputedTextLength();
        const textHeight = 16;

        textBg.setAttribute("x", centerX - textLength / 2 - 5);
        textBg.setAttribute("y", centerY - textHeight / 2 - 2);
        textBg.setAttribute("width", textLength + 12);
        textBg.setAttribute("height", textHeight + 4);

        setTimeout(() => {
            textBg.style.transition = "opacity 0.5s ease";
        }, 10);

        textElement.setAttribute("x", centerX);
        textElement.setAttribute("y", centerY);
        textElement.setAttribute("text-anchor", "middle");
        textElement.setAttribute("dominant-baseline", "middle");
    }, 0);
    setTimeout(() => {
        textElement.classList.add("hidden");
        textBg.classList.add("hidden");
    }, 1000);
}

function soundClick() {
    const clickSound = new Audio();
    clickSound.src = "../sound/click-sound.mp3";
    if (buttonSoundOn.hasAttribute("sound")) {
        clickSound.autoplay = false;
    } else {
        clickSound.autoplay = true;
    }
    console.log(clickSound);
}

function pushItems() {
    healtItems.forEach((item) => {
        hpItemsArray.push(item);
    });
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

function soundGameOver() {
    const gameOverSound = new Audio();
    gameOverSound.src = "../sound/lose-sound.mp3";
    if (buttonSoundOn.hasAttribute("sound")) {
        gameOverSound.autoplay = false;
    } else {
        gameOverSound.autoplay = true;
    }
}
