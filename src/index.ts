export const goBack = (str: string, keyword: string = '00'): string => {
  const strArray: string[] = str.split('*');
  let newStrArray: string[] = [];

  for (let i = 0; i < strArray.length; i += 1) {
    if (strArray[i] === keyword) {
      newStrArray = newStrArray.slice(0, -1); // remove the string coming before the keyword
    } else {
      newStrArray = [
        ...newStrArray,
        strArray[i],
      ];
    }
  }

  return newStrArray.join('*');
};

export const goToHome = (str: string, keyword: string = '0'): string => {
  const strArray = str.split('*');
  let newStr = str;

  for (let i = strArray.length; i >= 0; i -= 1) {
    if (strArray[i] === keyword) {
      newStr = strArray.slice(i + 1).join('*'); // remove everything preceding keyword (keyword included)
      break;
    }
  }

  return newStr;
};

export const ussdRouter = (str: string,
  goToHomeKeyword: string = '0',
  goBackKeyword: string = '00'): string => goBack(goToHome(str, goToHomeKeyword), goBackKeyword);
