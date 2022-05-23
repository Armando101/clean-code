(() => {
  interface Bird {
    eat(): void;
  }

  interface FlyingBird {
    fly(): void;
  }

  interface RunningBird {
    run(): void;
  }

  interface SwimmerBird {
    swim(): void;
  }

  class Tucan implements Bird, FlyingBird {
    constructor() {}

    public fly(): void {}
    public eat(): void {}
  }

  class Hummingbird implements Bird, FlyingBird {
    constructor() {}

    public fly(): void {}
    public eat(): void {}
  }

  class Ostritch implements Bird, RunningBird {
    eat(): void {}

    run(): void {}
  }

  // Estamso implementando interfaces que no necesitamos
  class Penguin implements Bird, SwimmerBird {
    eat(): void {}

    swim(): void {}
  }
})();
