import { goToHome, goBack, ussdRouter } from '../dist';
import { goToHomeFixtures, goBackFixtures, ussdRouterFixtures } from './fixtures';
import { testArray } from './utils';

describe('ussd-router', () => {
  describe('goToHome()', () => {
    testArray(goToHomeFixtures, goToHome);
  });

  describe('goBack()', () => {
    testArray(goBackFixtures, goBack);
  });

  describe('ussdRouter()', () => {
    testArray(ussdRouterFixtures, ussdRouter);
  });
});
