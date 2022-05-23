# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```

# Deuda técnica
La deuda técnica es **La falte de calidad en elcódig, que genera una deuda que repercutirá en costosos futuros** usualmente costos económicos

- Tiempo en realizar mantenimientos
- Tiempo en refactorizar código
- Teimpo en comprender código
- Teimpo adicional en la transferencia del código
  
## Cuadrantes en los que agrupamos la deuda técnica
1. **Imprudente**: El desarrollador actua de forma consciente e imprudente, lleva código de mala calidad que no es mantenible, usualmente suele decir: "No hay tiempo", "Sólo copia y pega eso de nuevo", "Tenemos que salir como sea".
2. **Imprudente e inadvertida**: es la más peligrosa ya que se genera por el desconociemiento o falta de experiencia, esto se genera por un desarrollador de perfil junior o peor aún, un falso senior.
3. **Prudente y deliberada**: tenemos la deuda y estamos conscientes de ella, si no se paga a tiempo pagamos más intereses, los indicadores son palabras como: "Tenemos que entregar rápido, luego refactorizamos", "Pon un mensaje de todo", "Lo vamos a tener en mente y en el futuro lo arreglamos"
4. **Prudente e inadvertida**: En un inicio no tenemos todo el contexto del proyecto, esta dedua sale conforme avanzamos en el proyecto.

Caer en deuda técnica es normal y a menudo es inevitable.

La diferencia entre un buen desarrollador y un mal desarrollador es que el buen desarrollador se preocupa y atiende esa deuda técnica

## ¿Cómo pagar la deuda técnica?
### Refactorización
Es un proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios

Usualmente para que una refactorización fuerte tenga el objetivo esperado, es imprescindible contar con pruebas automáticas.

Si no tenemos pruebas autmatizadas es común decir la frase:
"**Si funciona no lo toques**"

La mala calidad en el software siempre la acaba pagando o asumiendo alguien.

Ya sea el cliente, el proveedor con recursos o el propio desarrollador dedicando tiempo a refactorizar o malgastando tiempo programando sobre un sistema frágil.

## ¿Qué es el clean code?

> "Código limpio es aquel que se ha escrito con la intención de que otra persona (o tú mismo en el futuro) lo entienda"
> -Carlos Blé

> "Nuestro código tiene que ser simple y directo, debería leerse con la misma facilida que un texto bien escrito"
> -Grady Booch

> "Programar es el arte de decirle a otro humano lo que quieres que la computadora haga"
> -Donald Knuth

# Nombres Pronuciables y expresivos

Mal
```js
const n = 53;
const tx = 0.15;
const cat = 'T-Shirts';
const ddmmyyyy = new Date('Agust 29, 1997');
```

Bien
```js
const numberOfUnits = 53;
const tax = 0.15;
const category = 'T-Shirts';
const birthDate = new Date('Agust 29, 1997');
```


# Nombres según el tipo de dato

## Arrays
```js
const fruit = ['apple', 'bannana', 'raspberry']
```

```js
const fruitList = ['apple', 'bannana', 'raspberry']
```

```js
const fruits = ['apple', 'bannana', 'raspberry']
```

```js
const fruitNames = ['apple', 'bannana', 'raspberry']
```

```js
const fruitNameList = ['apple', 'bannana', 'raspberry']
```

## Booleans

Mal
```js
const open = true;
const write = true;
const fruit = true;  // No tiene sentido
const active = true;
const noValues = true; // No incluir negaciones
const notEmpty = true;
```

Bien
```js
const isOpen = true;
const canWrite = true;
const hasFruit = true;
const isActive = true;
const hasValues = true;
const isEmpty = false;
```

## Numbers

Mal
```js
const fruits = 3;
const cars = 10;
```

Bien
```js
const maxFruits = 3;
const minCars = 10;

const totalFruits = 3;
```

## Funciones

Mal
```js
createUserIfNotExistsInDatabase(); // Evitar explicar la lógica en el nombre
updateUserIfNotEmpty();  // Evitemos negaciones en el nombre
sendEmailIfFieldsValid();
```

Bien
```js
createUser();
updateUser();
sendEmail();
```

## Clases

- El nombre es lo más importante de la clase
- Formados por un sustantivo o frases de sustantivo
- No deben ser muy genéricos
- Usar UpperCamelCase

### Preguntas para determinar si es un buen nombre
- ¿Qué exactamente hace la clase?
- ¿Cómo exactamente esta clase realiza cierta tarea?
- ¿Hay algo específico sobre su ubicación?
  
más pabras !== mejor nombre

Mal
```js
class Manager {};
class Data {};
class Info {};
class Individual {};
class Processor {};
class SpecialMonsterView {};
```

# Funciones
> "Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre indica"
> -Ward Cunnigham

Bien
```ts
function sendEmail(toWhom: string): boolean {
  // Verificar correo
  // Construir el cuerpo o mensaje
  // Enviar correo
  // Si todo sale bien
  return true  
}
```

Mal
```ts
function sendEmail(): boolean {
  // Verificar si el usuario existe
  // Revisar contraseña
  // Crear usuario en base de datos
  // Si todo sale bien
  return true  
}
```

Se recomienda limitar a 3 parámestros posicionales en nuestras funciones

No muy bien
```ts
function sendEmail(toWhom: string, from: string, body: string, subject: string, apiKey: string): boolean {

}
```

Mejor
```ts

interface SendEmailOption {
  toWhom: string;
  from: string;
  body: string;
  subject: string;
  apiKey: string;
}

function sendEmail({toWhom, from, body, subject, apiKey}: SendEmailOption): boolean {
  
}
```
### Recomendaciones
- Simplicidad es fundamental
- Funciones de tamaño reducido
- Funciones de una sola línea sin causar complejidad
- Menos de 20 líneas de código
- Evitar el uso de "else"
- Priorizar el uso de la condicional ternaria

Mal
```ts
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
```

Mejor
```ts
const getPayAmount = ({
  isDead = false,
  isSeparated = true,
  isRetired = false,
}): number => {
  if (isDead) {
    return 1500;
  }
  if (isSeparated) {
    return 2500;
  }
  if (isRetired) {
    return 3000;
  }
  return 4000;
};
```

Mucho mejor
```ts
const getPayAmount = ({
  isDead = false,
  isSeparated = true,
  isRetired = false,
}): number => {
  if (isDead) return 1500;

  if (isSeparated) return 2500;

  return isRetired ? 3000 : 4000;
};
```

# Principio DRY
> "Si quieres ser un programador productivo esfuérzate en escribir código legible"
> -Robert C.martin

- Simplemente es evitar tener duplicidad de código
- Simplifica las pruebas
- Ayuda a centralizar procesos
- Aplicar el principio DRY, usualmente lleva a refactorizar

# Estructura recomendada de una clase
> "El buen código parace estar escrito por alguien a quien le importa"
> -Michael Feathers

### Comenzar con lista de propiedades
1. Propiedades estáticas
2. Propiedades públicas de último
   
### Métodos
1. Empezando por los constructores estáticos
2. Constructor
3. Métodos estáticos
4. Métodos privados
5. Métodos de instancia ordenados de mayor a menor importancia
6. Getters y Setters al final

# Comentarios
Cuando necesites añadir comentarios a tu código quiere decir que no es lo suficientemente autoexplicativo.
Evita usar comentarios pero...
Cuando usamos librerías de terceros, APIS, frameworks, etc. Nos encontraremos ante situaciones en las que escribir un comentario será mejor que dejar una solución compleja o un hack sin explicación.
Los comentarios deberían ser la excepción, no la regla

Si vamos a escribir un comentario, escibamos el ¿Por qué? no el ¿Qué? ni el ¿Cómo?

# Uniformidad en el proyecto
Problemas similares, soluciones similares
Este principio aplica tanto al código como a la organización de nuestras carpetas en el proyecto

# Stupid
6 Code Smells que debemos evitar
- **S**ingleton: patrón singleton
- **T**ight Coupling: alto acoplamiento
- **U**nestability: código no probable (unit test)
- **P**remature optimization: optimizaciones prematuras
- **I**ndescriptive Naming: nombres poco descriptivos
- **D**uplication: duplicidad de código, no aplicar el principio DRY

## Singleton
### Pros
- Garantiza una única instancia de la clase a lo largo de toda la aplicación

### Const
- Vive en el contexto global
- Puede ser modificado por cualquiera y en cualquier momento
- No es rastreable
- Difícil de testear debido a su ubicación

## Alto acoplamiento y baja cohesión
Lo ideal es tener bajo acomplamiento y buena cohesión.
## Acoplamiento
- Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre sí.
- **Bajo acoplamiento**: cambiar algo importante en una clase no debería afectar a la otra.
- **Alto acoplamiento**: dificulta el cambio y el mantenimiento de su código, dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa del sistema.
  
> Un buen diseño de software tiene alta cohesión y bajo acoplamiento

### Contras de un alto acoplamiento
- Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otros módulos
- El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia ente módulos
- Un módulo en particular puede ser más difícil de reutilizar y/o probar porque se deben incluir módulos dependientes.

Ejemplos:
- **A** tiene un atributo que se refiere a **B**
- **A** llama a los servicios de un objeto **B**
- **A** tiene un método que hace referencia a **B** (a través del tipo de retorno o parámentro)
- **A** es una subclase de (o implementa) la clase **B**
  
> "Queremos diseñar componentes que sean autocontenidos, auto suficientes e independientes. Con un objetivo y un propósito bien definido"
> -The pragmatic Programer

## Cohesión
- La cohesión se refiere a **lo que la clase (o módulo) puede hacer**
- La baja cohesión significaría que la clase realiza una gran variedad de acciones:
  - Es amplia
  - No se enfoca en lo que debe hacer
- Alta cohesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase.

# Código no probable
Código dificilmente testeable
- Código con alto acoplamiento
- Código con muchas dependencias no inyectadas
- Dependencias en el conteto global (Tipo Singleton)

> Debemos tener en menta las pruebas desde la creación del código

## Optimizaciones prematuras
Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es más importante en una aplicación.
No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que pueden añadir complejidad accidental

### Complejidad accidental
Cuando implementamos una solución compleja a la mínima indispensable
### Complejidad escencial
La complejidad es inherente al problema
## Duplicidad de código
No aplicar el principio DRY
### Duplicidad Real
- Código idéntico y cumple la misma función 
- Un cambio implicaría actualizar todo el código en varios lugares
- Incrementa posibilidades de error humano al olvidar una parte para actualizar
- Mayor cantidad de pruebas innecesarias
### Duplicidad Accidental
- Código luce similar pero cumple funcionalidades distintas
- Cuando hay un cambio, sólo hay que modificar un sólo lugar
- Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones

## Inflación
Cualquier método con un tamaño superior a 10 líneas debería ponernos a pensar en la existencia del mismo o en cómo hacerlo más pequeño.

Podemos dividirlo en otros métodos y que cada método haga una cosa en específico.

## Obsesión primitiva
El uso de primitivos en lugar de objetos.
Esto es cuando usamos tipos de dato primitivos como banderas o constantes.
Esto es un code smell debido a que si nuestro programa empieza a crecer necesitaremos más banderas, mas constantes, etc. A la larga terminamos con muchas variables en lugar de clases u objetos que pueden ser más explicativos y ahorrarnos código.

## Lista larga de parámetros
No es recomendable tener más de 3 o 4 parámetros en una función.
En lugar de esto es recomendable pasar un objecto como único argumento.

# Acopladores
Todos los olores de este grupo contribuyen al acoplamiento excesivo entre clases o muestran lo que sucede si el acoplamiento se reemplaza por una delegación excesiva.

## Feature Envy
Un método accede a los datos de otro objeto más que a sus propios datos, es decir cuando ocupamos.

Es cuando una función, método o módulo hace referencia una función o método de otro módulo. Considerar esto y evaluar si realmente es necesario.

Esto es, traer un gorila que tiene un plátano en la mano porque necesitamos el plátano.

## Intimidad inapropiada
Es cuando una clase o método usa métodos de otra clase.

Las buenas clases deben saber lo menos posible de otras clases.

Esto es un problema debido a que debemos asegurarnos que nuestro método compartido siga funcionando para todas las clases que lo ocupan, requiere mantenimiento de más y es difícil de escalar.

## Cadenas de mensajes
Cuando tenemos una función A que llama a B que llama a C.
Es recomendable crear un medio de comunicación entre los dos módulos que se necesiten comunicar sin necesidad de intermediarios.

## The middle man
Es cuando una clase realiza sólo una acción y esa acción es delegarle el trabajo a otra clase.

# Principios SOLID
Los principios SOLID nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.

- **S**ingle responsibility: Responsabilidad única
- **O**pen and close: Abierto y cerrado
- **L**iskov Substitution: Sustitución de Liskov
- **I**nterface segregation: Segregación de interfaz
- **D**ependency inversion: Inversión de dependenicias.

## Principio de responsabilidad única
> "Nunca debería haber más de un motivo por es cual cambiar una clase o módulo"
>
> Rober C. Martin

Tener una única responsabilidad !== Hacer una única cosa

### Detectar violaciones
- Nombres de clases y módulos demasiado genéricos
- Cambios en el código suelen afectar la clase o módulo
- La clase involucra múltiples capas
- Número elevado de importaciones
- Cantidad elevada de método públicos

## Principio de abierto y cerrrado
Es un principio que depende mucho del contexto
Establece que las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.

El principio abierto-cerrado también se puede lograr de muchas otras maneras, incluso mediante el uso de la herencia o mediante patrones de diseño de composición como el patrón de estrategia

### Detectar violaciones del OPC
- Cambios normalmente afectan nuestra clase o módulo
- Cuando una clase o módulo afecta muchas capas. (Presentación, almacenamiento, etc.)
  
## Liskov Subsitution
> "Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo"
> -Robert C.Martin

> "Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin alterar las propiedades del sistema"

## Segregación de interfaz
> "Los clientes no deberían estar oblicados a depender de interfacez que no utilicen"
> -Robert C.Martin

### Detectar violaciones ISP
- Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad única y substitución de Liskov

## Dependency inversion
> "Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de concreciones. Los detalles deben depender de abstracciones" 
> -Robert C. Martin

- Los módulos de alto nivel no deberían depender de módulos de bajo nivel
- Ambos deberían depender de abstracciones
- Las abstracciones no deberían depender de detalles
- Los detalles deberían depender de abstracciones

Los componentes de bajo nivel son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio.

Los de alto nivel son los que están próximos a la infraestructura, es decir, aquellos relacionados con la UI, la persistencia, la comunicación con API externas, etc.

### Deoender de abstacciones
Nos referimos a clases abstractas o interfaces.

Uno de los motivos más importantes por el cual las reglas de negocio o capa de dominio deben depender de estas y no de concreciones es que aumenta su tolerancia al cambio.

#### ¿Por qué obtenemos este beneficio?
Cada cambio en un componente abstracto implica un cambio en su implementación.

Por el contrario, los cambios en implementaciones concretas, la mayoría de veces, no requieren cambios en las interfaces que implementa.

### Inyección de dependencias
Dependencia en programación, significa que un módulo o componente require de otro para poder realizar su trabajo.

En algún momento nuestro programa o aplicación llegará a estar formado por muchos módulos. Cuando esto pase, es cuando debemos usar inyección de dependencias.
