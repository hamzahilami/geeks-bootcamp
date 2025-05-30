class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};
//the constructor  will not successfully extend the Dog class ,  we must call super() before using this

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
//the constructor  will not successfully extend the Dog class

class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};
//super(name) is trying to use a variable called name that does not exist in this scope

class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};
//the name is property of dog we must use super(name)