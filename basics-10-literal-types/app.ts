let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Bloxxom';

if(typeof userInput === 'string') {
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
  throw { message: message, code: code };
};

generateError('is throw error', 500);