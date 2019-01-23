const PubSub = require('../helpers/pub_sub.js');

const ItemView = function(container) {
  this.container = container;
}

ItemView.prototype.render = function (entry) {
  const item = document.createElement('li')
  item.textContent = entry["text-input"]
  this.container.appendChild(item)
};


module.exports = ItemView;
