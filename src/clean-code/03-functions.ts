(() => {
  interface Movie {
    title: string;
    description: string;
    rating: number;
    castList: string[];
  }

  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieActorsById(movieId: string) {
    console.log({ movieId });
  }

  function getActorBioById(actorId: string) {
    console.log({ actorId });
  }

  // Crear una película
  function createMovie({ title, description, rating, castList }: Movie) {
    console.log({ title, description, rating, castList });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    console.log(birthdate);
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "Armando") return false;

    console.log("Crear actor");
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
