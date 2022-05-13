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
