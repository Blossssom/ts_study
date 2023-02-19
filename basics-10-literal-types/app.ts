const add = (num1: number, num2: number) => {
   return num1 + num2;
};

const printFunction = (result: string): void | string => {
  console.log('inner printFunction :', result);
  return result;
};

const addHandler = (n1: number, n2: number, callback: (num: number) => void) => {
  const result = n1 + n2;
  callback(result);
};

let combinvalues: (v1: number, v2: number) => number;

combinvalues = add;

console.log(combinvalues(10, 52));

const voidTest = addHandler(30, 20, (res) => {
  // console.log('inner addHandler :', res);
  return res;
});

console.log('inner addHander :', voidTest);
