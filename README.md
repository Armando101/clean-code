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
