const FormView = require('./views/form_view.js');
const BucketList = require('./models/bucket_list.js')

document.addEventListener('DOMContentLoaded', () => {
  const inputForm = document.querySelector('form#input-form');
  const inputFormView = new FormView(inputForm);
  inputFormView.bindEvents();

  const bucketListUrl = 'http://localhost:3000/api/entries'
  const bucket = new BucketList(bucketListUrl);
    bucket.bindEvents();

});
