const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const ListView = function(container) {
  this.container = container;

}

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList: all entries ready', (evt) =>{
    this.render(evt.detail)
  })
};

ListView.prototype.render =function(entries){
  this.container.innerHTML = ''
  const itemView = new ItemView(this.container)
  entries.forEach((entry) => itemView.render(entry))
}

module.exports = ListView;
