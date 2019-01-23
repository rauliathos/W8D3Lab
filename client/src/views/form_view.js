const PubSub = require('../helpers/pub_sub.js')


const FormView = function(form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    console.log("pressed");
    this.handleSubmit(evt);
  });
};


 FormView.prototype.handleSubmit = function (evt) {
   evt.preventDefault();
   console.log(evt);
 };

module.exports = FormView;
