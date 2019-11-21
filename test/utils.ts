import { expect } from 'chai';

type TestArray = (
  arr: { input: string; output: string }[],
  method: (str: string) => string,
) => void;


// eslint-disable-next-line import/prefer-default-export
export const testArray: TestArray = (arr, method) => arr.map(({ input, output }) => {
  it(`'${input}' correctly resolves to '${output}'`, () => {
    const result = method(input);
    expect(result).to.equal(output);
  });

  return null;
});
