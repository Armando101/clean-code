(() => {
  // arreglo de temperaturas celsius
  const celciusGradeList = [33.6, 12.34];

  // Dirección ip del servidor
  const ipServer = "123.123.123.123";

  // Listado de usuarios
  const userList = [
    { id: 1, email: "armando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  // Listado de emails de los usuarios
  const emailList = userList.map((user) => user.email);

  // Variables booleanas de un video juego
  const canJump = false;
  const canRun = true;
  const hasItems = false;
  const isLoading = false;

  // Otros ejercicios
  // tiempo inicial
  const initialTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const finalTime = new Date().getTime() - initialTime;

  // Funciones
  // Obtiene los libros
  function getBookList() {
    throw new Error("Function not implemented.");
  }

  // obtiene libros desde un URL
  function getBookListByUrl(url: string) {
    throw new Error(`${url}: Function not implemented.`);
  }

  // obtiene el área de un cuadrado basado en sus lados
  function getSquareArea(size: number) {
    throw new Error(`${size}: Function not implemented.`);
  }

  // imprime el trabajo
  function showJob() {
    throw new Error("Function not implemented.");
  }
})();
