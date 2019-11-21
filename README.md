# ussd-nav-util

`ussd-nav-util` is a util for managing navigation in USSD applications.

See `Background` below for a detailed description.

## Install

```bash
npm install ussd-nav-util
```

## Example usage (simple)

```js
const text = ussdNavUtil(rawText);
```

## Example usage (with express)

```js
import express from 'express';
import { ussdNavUtil } from 'ussd-nav-util';

// ...

app.post('/webhook/ussd', (req, res) => {
  const { body: { text: rawText } } = req;

  const text = ussdNavUtil(rawText);

  if (text === '1') {
    res
      .status(200)
      .send('View: \n1. My account number \n2. My balance');
  }

  // ...
});
```

## Background

> TLDR; `1*2*0*3*5` will resolve to `3*5`, while `1*3*00*2` will resolve to `1*2`

If you are using a service such as the USSD service from Africa's Talking, and a user dials your USSD code (e.g. `*544#`), the service will hit your webhook url with the following object:

```json
{
  // ...
  "phoneNumber": "+254712345678,
  "text": "",
  // ...
}
```

Now, it's quite easy to handle this scenario and send back a message. All you need is a simple `if else` or `switch` logic, e.g.:

```js
// ...

if (text === '') {
  res
    .status(200)
    .send(
      `What would you like to do?
      1. View my account number
      2. View my account balance

      00: Back
      0: Home`
    );
} else if (text === '1*1') {
  // ...
} else if (text === '1*2') {
  // ...
}

// ...
```

When a user replies with the first option (`1`), you will again receive an object on your webhook with the `text` key containing the string value `1`. If the user proceeds to choose the second option, the `text` key will contain a string value `1*2`, and so on.

As you may notice, it is quite easy to handle this user logic. However, as the user navigates deeper and deeper and decides to navigate to the previous menu (e.g. `1*2*00*1`), it may get pretty complicated for you to handle the logic.

This library is here to exactly help you solve this problem. Using this library will remove the complexities of a user navigating to the previous menu or navigating to the main menu.

For example, applying the util on the text `1*2*0*3*5` will resolve to the text `3*5`. Applying it to the text `1*3*00*2` will resolve to the text `1*2`.

Put simply, this util will help you remove the boilerplate needed to handle navigation in your application, and let you rest easy as you concentrate on your business logic.

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
