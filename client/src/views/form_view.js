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
   // console.log(evt);
   const newEntry = evt.target['text-input'].value
   PubSub.publish('FormView:entry-submitted', newEntry)
   console.log(newEntry);
 };

module.exports = FormView;
