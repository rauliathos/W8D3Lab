const FormView = require('./views/form_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const inputForm = document.querySelector('form#input-form');
  const inputFormView = new FormView(inputForm);
  inputFormView.bindEvents();
});
