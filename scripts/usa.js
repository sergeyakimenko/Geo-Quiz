const items = document.querySelectorAll(".map-item");
const mapText = document.querySelector(".map-text");
const targetText = document.querySelector(".map-current-target-text");
const firstTryText = document.querySelector(".map-try-text__first");
const secondTryText = document.querySelector(".map-try-text__second");
const thirdTryText = document.querySelector(".map-try-text__third");

const states = [
    { title: "Alabama" },
    { title: "Alaska" },
    { title: "Arizona" },
    { title: "Arkansas" },
    { title: "California" },
    { title: "Colorado" },
    { title: "Connecticut" },
    { title: "Delaware" },
    { title: "Florida" },
    { title: "Georgia" },
    { title: "Hawaii" },
    { title: "Idaho" },
    { title: "Illinois" },
    { title: "Indiana" },
    { title: "Iowa" },
    { title: "Kansas" },
    { title: "Kentucky" },
    { title: "Louisiana" },
    { title: "Maine" },
    { title: "Maryland" },
    { title: "Massachusetts" },
    { title: "Michigan" },
    { title: "Minnesota" },
    { title: "Mississippi" },
    { title: "Missouri" },
    { title: "Montana" },
    { title: "Nebraska" },
    { title: "Nevada" },
    { title: "New Hampshire" },
    { title: "New Jersey" },
    { title: "New Mexico" },
    { title: "New York" },
    { title: "North Carolina" },
    { title: "North Dakota" },
    { title: "Ohio" },
    { title: "Oklahoma" },
    { title: "Oregon" },
    { title: "Pennsylvania" },
    { title: "Rhode Island" },
    { title: "South Carolina" },
    { title: "South Dakota" },
    { title: "Tennessee" },
    { title: "Texas" },
    { title: "Utah" },
    { title: "Vermont" },
    { title: "Virginia" },
    { title: "Washington" },
    { title: "West Virginia" },
    { title: "Wisconsin" },
    { title: "Wyoming" },
];

const getRandomElemet = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

let copyStates = [...states];
// console.log(copyStates);
let randomElement = getRandomElemet(copyStates);
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
        targetText.textContent = item.dataset.title;
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
            const index = copyStates.findIndex(
                (region) => region.title === randomElement.title
            );
            if (index !== -1) {
                copyStates.splice(index, 1);
            }
            if (copyStates.length === 0) {
                mapText.textContent = "Игра завершена!";
            }
            randomElement =
                copyStates.length > 0 ? getRandomElemet(copyStates) : null;
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
