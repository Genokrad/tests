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
  let splitedText = someText.trim().split(" ");

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

  const markup = `<p class="value">${uniqLetter[0]}</p>`;
  outputContainer.innerHTML = markup;

  return uniqLetter;
};

const text =
  'The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, "The Tao of Programming ';

console.log(findUniqLetter(text));
