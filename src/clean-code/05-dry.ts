type Size = "S" | "M" | "L";
class Product {
  constructor(
    public name: string,
    public price: number = 0,
    public size: Size = "M"
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (!this[key]) throw Error(`${this[key]} is empty`);
          break;

        case "number":
          if (!this[key]) throw Error(`${this[key]} is not valid`);
          break;

        default:
          throw Error("couldn't generate product");
      }
    }
    return true;
  }

  toString() {
    if (this.isProductReady()) {
      return `${this.name}`;
    }
    throw Error("name is empty");
  }
}

(() => {
  const bluePants = new Product("Blue pants", 10);
  console.log(bluePants.toString());
})();
