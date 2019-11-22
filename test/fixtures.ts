export const goToHomeFixtures = [
  { input: '', output: '' },
  { input: '544*1*1', output: '544*1*1' },
  { input: '544*1*1*0', output: '' },
  { input: '544*1*1*0*1*2', output: '1*2' },
  { input: '544*1*1*0*1*2*0', output: '' },
  { input: '544*1*1*0*1*2*0*3*1', output: '3*1' },
  { input: '0', output: '' },
  { input: '0*1', output: '1' },
];

export const goBackFixtures = [
  { input: '', output: '' },
  { input: '544*1*1', output: '544*1*1' },
  { input: '544*1*1*00', output: '544*1' },
  { input: '544*1*1*00*2', output: '544*1*2' },
  { input: '544*1*1*00*2*1*00', output: '544*1*2' },
  { input: '544*1*1*00*2*1*00*3', output: '544*1*2*3' },
  { input: '00', output: '' },
  { input: '00*1', output: '1' },
];

export const ussdRouterFixtures = [
  ...goToHomeFixtures,
  ...goBackFixtures,
  { input: '544*1*1*0*2*3*00', output: '2' },
  { input: '544*1*1*00*2*0*2', output: '2' },
  { input: '544*1*0*2*3*00*4*5*00', output: '2*4' },
  { input: '544*1*0*2*3*00*4*5*00*John Doe*1', output: '2*4*John Doe*1' },
];
