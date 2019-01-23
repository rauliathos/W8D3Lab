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
      .then( (entries) => {
        // console.log(entries);
        PubSub.publish('BucketList: all entries ready', entries)

      })
};

BucketList.prototype.getData = function () {
const request = new RequestHelper(this.url);
request.get()
    .then((entries) =>{
      PubSub.publish('BucketList: all entries ready', entries)
    })
};


module.exports = BucketList;
