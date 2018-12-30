import {getRandomArrayElement} from './utils';

const MAX_WIZARDS = 4;
const WIZARD_PARAMS =
  {
    name: [
      `Иван`,
      `Хуан Себастьян`,
      `Мария`,
      `Кристоф Виктор`,
      `Юлия`,
      `Люпита`,
      `Вашингтон`
    ],
    surname: [
      `да Марья`,
      `Верон`,
      `Мирабелла`, `Вальц`,
      `Онопко`,
      `Топольницкая`,
      `Нионго`,
      `Ирвинг`
    ],
    coat: [
      `rgb(101, 137, 164)`,
      `rgb(241, 43, 107)`,
      `rgb(146, 100, 161)`,
      `rgb(56, 159, 117)`,
      `rgb(215, 210, 55)`,
      `rgb(0, 0, 0)`
    ],
    eyes: [
      `black`,
      `red`,
      `blue`,
      `yellow`,
      `green`
    ]
  };


const wizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const wizardsList = document.querySelector(`.setup-similar-list`);

document.querySelector(`.setup`).classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);


const renderWizard = (params) => {
  const wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = `${getRandomArrayElement(params.name)} ${getRandomArrayElement(params.surname)}`;
  wizardElement.querySelector(`.wizard-coat`).style.fill = getRandomArrayElement(params.coat);
  wizardElement.querySelector(`.wizard-eyes`).style.fill = getRandomArrayElement(params.eyes);

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < MAX_WIZARDS; i++) {
  fragment.appendChild(renderWizard(WIZARD_PARAMS));
}

const addWizards = () => wizardsList.appendChild(fragment);

export {addWizards};
