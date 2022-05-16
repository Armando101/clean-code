(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, delete: false },
    { id: 2, delete: false },
    { id: 3, delete: true },
    { id: 4, delete: false },
    { id: 5, delete: false },
    { id: 7, delete: true },
  ];

  // Archivos marcados para borrar - files to delete
  const arhivos = filesToEvaluate.map((file) => file.delete);

  // Malos nombres
  // class AbstractUser {}
  // class UserMixin {}
  // class UserImplementation {}
  // interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const today = new Date();

  // días transcurridos - elapsed time in days
  const totalDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const totalFilesInDirectory = 33;

  // primer nombre - first name
  const firstName = "Armando";

  // primer apellido - last name
  const lastName = "Rivera";

  // días desde la última modificación - days since modification
  const daysSinceLastModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent = 6;
})();
