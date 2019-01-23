const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const BucketList = function (url){
  this.url = url;
}
BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:entry-submitted', (evt) =>{
    this.postEntry(evt.detail)
  })
};

BucketList.prototype.postEntry = function (entry) {
  const request = new RequestHelper(this.url);
    request.post(entry)
      .then(console.log('entry posted'))
};


module.exports = BucketList;
