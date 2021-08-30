var libraryES5 = {

  chain (arr) {
    this.array = arr;
    return this;
  },

  take (array, n) {
    if (this.array) {
      n = array;
      array = this.array;
    }
    
    if (n > array.length || n < 0 || typeof(n) !== 'number') {
      throw new Error('enter a valid number');
    }

    var res = [];
    for (var i = 0; i < n; i++) {
      res.push(array[i]);
    };

    if (this.array) {
      this.array = res;
      return this;
    } else {
      return res;
    }
  }, 

  skip (array, n) {
    if (this.array) {
      n = array;
      array = this.array;
    }

    if (n > array.length || n < 0 || typeof(n) !== 'number') {
      throw new Error('enter a valid number');
    } else if (n !== 0) {
      array.splice(n-1, 1);
    }

    if (this.array) {
      this.array = array;
      return this;
    } else {
      return array;
    }
  },

  map (array, callback) {
    if (this.array) {
      callback = array;
      array = this.array;
    }
    var res = [];
    for (var i = 0; i < array.length; i++) { 
      res.push(callback(array[i], i, array));
    };

    if (this.array) {
      this.array = res;
      return this;
    } else {
      return res;
    }
  },

  reduce (array, callback, initialValue) {
    if (this.array) {
      initialValue = callback;
      callback = array;
      array = this.array;
    };

    var accumulator = initialValue;

    for (var i = 0; i < array.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, array[i], i, array);
      } else {
        accumulator = array[i];
      }
    }

    if (this.array) {
      this.array = accumulator;
      return this;
    } else {
      return accumulator;
    }
  },

  filter (array, callback) {
    if (this.array) {
      callback = array;
      array = this.array;
    }
    var res = [];  

    for (var i = 0; i < array.length; i++) {
      if (callback.call(array, array[i], i, array)) {
        res.push(array[i]);
      }
    }

    if (this.array) {
      this.array = res;
      return this;
    } else {
      return res;
    }
  },

  forEach (array, callback) {
    if (this.array) {
      callback = array;
      array = this.array;
    }
    for (var i = 0; i < array.length; i++){
      callback(array[i]);
    }
  },

  value () {
    return this.array;
  }
};

const libraryES6 = {

  chain (arr) {
    this.array = arr;
    return this;
  },

  take (array, n) {
    if (this.array) {
      n = array;
      array = this.array;
    }
    
    if (n > array.length || n < 0 || typeof(n) !== 'number') {
      throw new Error('enter a valid number');
    }

    const res = [];
    for (let i = 0; i < n; i++) {
      res.push(array[i]);
    };

    if (this.array) {
      this.array = res;
      return this;
    } else {
      return res;
    }
  }, 

  skip (array, n) {
    if (this.array) {
      n = array;
      array = this.array;
    }

    if (n > array.length || n < 0 || typeof(n) !== 'number') {
      throw new Error('enter a valid number');
    } else if (n !== 0) {
      array.splice(n-1, 1);
    }

    if (this.array) {
      this.array = array;
      return this;
    } else {
      return array;
    }
  },

  map (array, callback) {
    if (this.array) {
      callback = array;
      array = this.array;
    }
    const res = [];
    for (var i = 0; i < array.length; i++) { 
      res.push(callback(array[i], i, array));
    };

    if (this.array) {
      this.array = res;
      return this;
    } else {
      return res;
    }
  },

  reduce (array, callback, initialValue) {
    if (this.array) {
      initialValue = callback;
      callback = array;
      array = this.array;
    };

    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, array[i], i, array);
      } else {
        accumulator = array[i];
      }
    }

    if (this.array) {
      this.array = accumulator;
      return this;
    } else {
      return accumulator;
    }
  },

  filter (array, callback) {
    if (this.array) {
      callback = array;
      array = this.array;
    }
    const res = [];  

    for (let i = 0; i < array.length; i++) {
      if (callback.call(array, array[i], i, array)) {
        res.push(array[i]);
      }
    }

    if (this.array) {
      this.array = res;
      return this;
    } else {
      return res;
    }
  },

  forEach (array, callback) {
    if (this.array) {
      callback = array;
      array = this.array;
    }
    for (let i = 0; i < array.length; i++){
      callback(array[i]);
    }
  },

  value () {
    return this.array;
  }
};
