const input = document.querySelector("input");
const outputContainer = document.querySelector(".outputContainer");
const form = document.querySelector(".form");

let someText = "";

const textFilter = (event) => {
  someText = event.target.value;
};

const onSubmit = (event) => {
  event.preventDefault();
  findUniqLetter(someText);
  console.log(someText);
};

input.addEventListener("input", textFilter);
form.addEventListener("submit", onSubmit);

const findUniqLetter = (someText) => {
  let splitedText = someText.split(" ");

  const ArrWithLetters = [];

  splitedText.forEach((item) => ArrWithLetters.push(item[0]));

  const errazeOneLetter = (index) => {
    newArr = ArrWithLetters;
    let letter = newArr.splice(index, 1);
    return letter;
  };

  const returnLetterOnHerPlace = (index, item) => {
    ArrWithLetters.splice(index, 0, item);
  };

  let uniqLetter = [];

  ArrWithLetters.forEach((item, index) => {
    let errazedLetter = errazeOneLetter(index);

    if (!ArrWithLetters.find((letter) => letter === errazedLetter[0])) {
      uniqLetter.push(...errazedLetter);
      return uniqLetter;
    }

    returnLetterOnHerPlace(index, item);
  });

  const markup = `<p class="value">${
    uniqLetter[0]
    // uniqLetter === undefined
    //   ? uniqLetter[0]
    //   : "Немає унікальних літер,  спробуйте інше речення"
  }</p>`;
  outputContainer.innerHTML = markup;

  return uniqLetter;
};
