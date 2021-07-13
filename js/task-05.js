const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
    btn: document.querySelector('.js-button'),
  };

  refs.input.addEventListener('input', onInputChange);

  function onInputChange(event) {
    event.currentTarget.value === '' ? refs.nameLabel.textContent ='незнакомец' : 
    refs.nameLabel.textContent = event.currentTarget.value;
  }

