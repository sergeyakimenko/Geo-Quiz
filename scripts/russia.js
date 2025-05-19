const items = document.querySelectorAll(".map-item");
const mapText = document.querySelector(".map-text");
const targetText = document.querySelector(".map-current-target-text");
const firstTryText = document.querySelector(".map-try-text__first");
const secondTryText = document.querySelector(".map-try-text__second");
const thirdTryText = document.querySelector(".map-try-text__third");
const mapWrapper = document.querySelector(".map-wrapper");
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

items.forEach((item) => {
    item.addEventListener("click", function () {
        showItemText(item);

        if (item.dataset.title === randomElement.title) {
            if (clickCounter === 0) {
                item.dataset.completed = "first";
                firstTryCounter++;
                firstTryText.textContent = `Угадано с первой попытки: ${firstTryCounter}`;
                console.log(item.dataset);
            } else if (clickCounter === 1) {
                secondTryCounter++;
                secondTryText.textContent = `Угадано со второй попытки: ${secondTryCounter}`;
                item.dataset.completed = "second";
            } else {
                thirdTryCounter++;
                thirdTryText.textContent = `Угадано с третьей и более попытки: ${thirdTryCounter}`;
                item.dataset.completed = "third";
            }
            clickCounter = 0;
            console.log(clickCounter);
            const index = copyRegions.findIndex(
                (region) => region.title === randomElement.title
            );
            if (index !== -1) {
                copyRegions.splice(index, 1);
            }
            if (copyRegions.length === 0) {
                mapText.textContent = "Игра завершена!";
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
    });
});

function isLose() {
    if (clickCounter >= 3) {
        items.forEach((item) => {
            if (item.dataset.title === randomElement.title) {
                item.dataset.completed = "lose";
            }
        });
    }
}

function showItemText(item) {
    const svg = item.closest("svg");
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

    const bbox = item.getBBox();
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
    textElement.setAttribute("dominant-baseline", "middle");
    console.log(textElement);

    svg.appendChild(textBg);
    svg.appendChild(textElement);
    textElement.textContent = item.dataset.title;

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
