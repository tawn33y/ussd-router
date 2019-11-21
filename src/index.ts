export const goBack = (str: string): string => {
  const strArray = str.split('*');

  return strArray.reduce((acc, curr) => {
    if (curr === '00') {
      return acc.split('*').slice(0, -1).join('*');
    }

    if (acc === '') {
      return curr;
    }
    return `${acc}*${curr}`;
  }, '');
};

export const goToHome = (str: string): string => {
  let updatedStr = str;
  const strArray = str.split('*');

  for (let i = strArray.length; i >= 0; i -= 1) {
    if (strArray[i] === '0') {
      updatedStr = strArray.slice(i + 1).join('*');
      break;
    }
  }

  return updatedStr;
};

export const ussdNavUtil = (str: string): string => goBack(goToHome(str));
