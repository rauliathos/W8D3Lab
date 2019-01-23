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
   const newEntry = this.makeEntry(evt.target) // string, not an object {}
   console.log('JSON object:', newEntry)
   PubSub.publish('FormView:entry-submitted', newEntry)
   console.log(newEntry);
 };

 FormView.prototype.makeEntry = function (data) {
   const newEntry = {
     "text-input": data['text-input'].value
   }
   return newEntry
 };
module.exports = FormView;
