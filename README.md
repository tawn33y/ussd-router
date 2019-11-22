# ussd-router

`ussd-router` is a util for managing routing in USSD applications.

See also:

- [the blog for a detailed description](https://gist.github.com/tawn33y/6eab1a00ad33e87e56966b5c09d07df4).
- [the Github Gist for the algorithm used](https://gist.github.com/tawn33y/6eab1a00ad33e87e56966b5c09d07df4).

## Install

```bash
npm install ussd-router
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
npm test
```
