// Get DOM elements
const convertBtn = document.querySelector('.converter-card__form-submit');
const inputValue = document.querySelector('#input-value');
const inputLabel = document.querySelector('.converter-card__form-label');
const errorMsg = document.querySelector('.converter-card__form-error');
const length = document.querySelector('#length');
const volume = document.querySelector('#volume');
const mass = document.querySelector('#mass');

// Define constants
const METER_TO_FEET = 3.28084; // 1 meter = 3.28084 feet
const LITER_TO_GALLON = 0.26417; // 1 liter = 0.26417 gallon
const KILOGRAM_TO_POUND = 2.20462; // 1 kilogram = 2.20462 pound

// convert meter to feet
const convertMeterToFeet = (value) => {
  let feet = value * METER_TO_FEET;
  feet = Number(feet.toFixed(3))
  feet = feet === 1 ? `${feet} foot` : `${feet} feet`;
  let meter = value;
  meter = meter === 1 ? `${meter} meter` : `${meter} meters`;
  return `${meter} = ${feet}`;
};

// convert feet to meter
const convertFeetToMeter = (value) => {
  let meter = value / METER_TO_FEET;
  meter = Number(meter.toFixed(3))
  meter = meter === 1 ? `${meter} meter` : `${meter} meters`;
  let feet = value;
  feet = feet === 1 ? `${feet} foot` : `${feet} feet`;
  return `${feet} = ${meter}`;
};

// convert liter to gallon
const convertLiterToGallon = (value) => {
  let gallon = value * LITER_TO_GALLON;
  gallon = Number(gallon.toFixed(3));
  gallon = gallon === 1 ? `${gallon} gallon` : `${gallon} gallons`;
  let liter = value;
  liter = liter === 1 ? `${liter} liter` : `${liter} liters`;
  return `${liter} = ${gallon}`;
}

// convert gallon to liter
const convertGallonToLiter = (value) => {
  let liter = value / LITER_TO_GALLON;
  liter = Number(liter.toFixed(3));
  liter = liter === 1 ? `${liter} liter` : `${liter} liters`;
  let gallon = value;
  gallon = gallon === 1 ? `${gallon} gallon` : `${gallon} gallons`;
  return `${gallon} = ${liter}`;
}

// convert kilogram to pound
const convertKilogramToPound = (value) => {
  let pound = value * KILOGRAM_TO_POUND;
  pound = Number(pound.toFixed(3));
  pound = pound === 1 ? `${pound} pound` : `${pound} pounds`;
  let kilogram = value;
  kilogram = kilogram === 1 ? `${kilogram} kilogram` : `${kilogram} kilograms`;
  return `${kilogram} = ${pound}`;
};

// convert pound to kilogram
const convertPoundToKilogram = (value) => {
  let kilogram = value / KILOGRAM_TO_POUND;
  kilogram = Number(kilogram.toFixed(3));
  kilogram = kilogram === 1 ? `${kilogram} kilogram` : `${kilogram} kilograms`;
  let pound = value;
  pound = pound === 1 ? `${pound} pound` : `${pound} pounds`;
  return `${pound} = ${kilogram}`;
};

// convert all
const convert = (value) => {
  const meterToFeet = convertMeterToFeet(value);
  const feetToMeter = convertFeetToMeter(value);
  const literToGallon = convertLiterToGallon(value);
  const gallonToLiter = convertGallonToLiter(value);
  const kilogramToPound = convertKilogramToPound(value);
  const poundToKilogram = convertPoundToKilogram(value);
  return { meterToFeet, feetToMeter, literToGallon, gallonToLiter, kilogramToPound, poundToKilogram };
};

// check if input value is a number
const isNumber = (value) => {
  const regex = /^[0-9]+$/;
  return regex.test(value);
}

// Event listener to convert button
convertBtn.addEventListener('click', (e) => {
  // prevent default action
  e.preventDefault();

  // check if input value is a number
  if (!isNumber(inputValue.value)) {
    errorMsg.classList.remove('hidden');
    inputLabel.classList.add('error');
    return;
  } else {
    // convert input value to number
    const value = Number(inputValue.value);

    // call convert function
    const result = convert(value);

    // display result
    length.textContent = `${result.meterToFeet} | ${result.feetToMeter}`;
    volume.textContent = `${result.literToGallon} | ${result.gallonToLiter}`;
    mass.textContent = `${result.kilogramToPound} | ${result.poundToKilogram}`;
  }
});

// Event listener to input value
inputValue.addEventListener('input', () => {
  if (!errorMsg.classList.contains('hidden')) {
    errorMsg.classList.add('hidden');
    inputLabel.classList.remove('error');
  }
});



