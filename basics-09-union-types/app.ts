enum Role { AS_NUM, AS_STR };

function combine(input1: number | string, input2: number | string, resultConversion: Role) {
  let result;

  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === Role.AS_NUM) {
    result = +input1 + +input2;
  }else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if(resultConversion === 'as-number') {
  //   return +result;
  // }else {
  //   return result.toString();
  // }
};

const combineResult = combine(30, 25, Role.AS_NUM);
const combineResultCombine = combine('30', '25', Role.AS_NUM);
const combineResultString = combine('bloxxom', 'ts', Role.AS_STR);
console.log(combineResult);
console.log(combineResultCombine);
console.log(combineResultString);