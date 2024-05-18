const wattCounterElement = document.getElementById("wattCounter");
const wattCounterMaxValue = 435;

const yearCounterElement = document.getElementById("yearCounter");
const yearCounterMaxValue = 14;

const turbineCounterElement = document.getElementById("turbineCounter");
const turbineCounterMaxValue = 3;

const voltCounterElement = document.getElementById("voltCounter");
const voltCounterMaxValue = 330;

const increaseWattCounter = () => {
  let currentValue = parseInt(wattCounterElement.innerText);
  if (currentValue < wattCounterMaxValue) {
    wattCounterElement.innerText = currentValue + 1;
    setTimeout(increaseWattCounter, 3);
  }
};

const increaseYearCounter = () => {
  let currentValue = parseInt(yearCounterElement.innerText);
  if (currentValue < yearCounterMaxValue) {
    yearCounterElement.innerText = currentValue + 1;
    setTimeout(increaseYearCounter, 100);
  }
};

const increaseTurbineCounter = () => {
  let currentValue = parseInt(turbineCounterElement.innerText);
  if (currentValue < turbineCounterMaxValue) {
    turbineCounterElement.innerText = currentValue + 1;
    setTimeout(increaseTurbineCounter, 1000);
  }
};

const increaseVoltCounter = () => {
  let currentValue = parseInt(voltCounterElement.innerText);
  if (currentValue < voltCounterMaxValue) {
    voltCounterElement.innerText = currentValue + 1;
    setTimeout(increaseVoltCounter, 5);
  }
};

increaseWattCounter();
increaseYearCounter();
increaseTurbineCounter();
increaseVoltCounter();
