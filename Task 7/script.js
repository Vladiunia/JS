/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};


function getAllKeyValue(obj) {
  const keyValues = [];

  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          keyValues.push({key: key});
      }
  }

  return keyValues;
}

const result = getAllKeyValue(audi);
console.log(result);