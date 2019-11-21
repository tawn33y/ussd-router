import { goToHome, goBack, ussdNavUtil } from '../src';
import { goToHomeFixtures, goBackFixtures, ussdNavUtilFixtures } from './fixtures';
import { testArray } from './utils';

describe('ussd-nav-util', () => {
  describe('goToHome()', () => {
    testArray(goToHomeFixtures, goToHome);
  });

  describe('goBack()', () => {
    testArray(goBackFixtures, goBack);
  });

  describe('ussdNavUtil()', () => {
    testArray(ussdNavUtilFixtures, ussdNavUtil);
  });
});
