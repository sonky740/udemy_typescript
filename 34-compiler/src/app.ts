const button = document.querySelector('button');

const clickHandler = (message: string) => {
  console.log(`Clicked! ${message}`);
};

button?.addEventListener('click', clickHandler.bind(null, 'Complete'));

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
