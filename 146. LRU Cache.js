/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.order = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    this.order.splice(this.order.indexOf(key), 1);
    this.order.push(key);
    return this.cache.get(key);
  } else {
    return -1
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.set(key, value);
    this.order.splice(this.order.indexOf(key), 1);
    this.order.push(key);
  } else {
    if (this.order.length >= this.capacity) {
      this.cache.delete(this.order.shift());
    }
    this.cache.set(key, value);
    this.order.push(key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */