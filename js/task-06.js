const refs = {
    input: document.querySelector('#validation-input'),
    length: document.querySelector('[data-length]')
  };

refs.input.addEventListener('input', onInputBlur);
const numberDataLength = Number(refs.input.getAttribute("data-length"));

function onInputBlur() {
  numberDataLength === refs.input.value.length ?
 refs.input.classList.replace("invalid","valid") : refs.input.classList.add("invalid");
}




