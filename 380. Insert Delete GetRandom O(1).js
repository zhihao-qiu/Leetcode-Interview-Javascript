var RandomizedSet = function() {
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.arr.includes(val)) {
    return false; // this value exists in the set
  }

  this.arr.push(val);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.arr.includes(val)) {
    return false; // this value doesn't exist in the set
  }
  this.arr.splice(this.arr.indexOf(val), val.toString.length);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomIndex];
};
