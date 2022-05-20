interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
}

class Tucan implements Bird {
  constructor() {}
  run(): void {
    throw new Error("Method not implemented.");
  }

  public fly(): void {}
  public eat(): void {}
}

class Hummingbird implements Bird {
  constructor() {}

  public fly(): void {}
  public eat(): void {}
  public run(): void {}
}

class Ostritch implements Bird {
  fly() {
    throw new Error("esta ave no vuela");
  }

  eat(): void {}

  run(): void {}
}

// Estamso implementando interfaces que no necesitamos
class Penguin implements Bird {
  fly(): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
  run(): void {
    throw new Error("Method not implemented.");
  }

  swim(): void {}
}
