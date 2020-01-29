# ussd-router

`ussd-router` is a free utility for easy routing in USSD applications.

See also:

- [the blog for a detailed description](https://medium.com/@tawn33y/a-free-utility-for-easy-routing-in-ussd-applications-fb4f446bcdf7).
- [the source code for the algorithm used](https://github.com/tawn33y/ussd-router/blob/master/src/index.ts).

## Install

```bash
npm i ussd-router
```

## Example usage (simple)

```js
import { ussdRouter } from 'ussd-router';

const text1 = ussdRouter('544*1*2'); // '544*1*2'
const text2 = ussdRouter('544*1*2*00*3'); // '544*1*3'
const text3 = ussdRouter('544*1*2*0*1*2'); // '1*2'
const text4 = ussdRouter('544*1*2*0*1*2*00*3'); // '1*3'
```

## Example usage (with express)

```js
import express from 'express';
import { ussdRouter } from 'ussd-router';

// ...

app.post('/webhook/ussd', (req, res) => {
  const { body: { text: rawText } } = req;

  const text = ussdRouter(rawText);

  if (text === '1') {
    res
      .status(200)
      .send('View: \n1. My account number \n2. My balance');
  }

  // ...
});
```

## Dev

```bash
# install dependencies
npm i

# build
npm run build

# lint
npm run lint

# test
npm t
```
