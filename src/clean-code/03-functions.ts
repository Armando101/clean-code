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
  }) => {
    let result;
    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  };
})();
