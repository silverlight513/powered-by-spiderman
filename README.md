# powered-by-spiderman

Hiding your servers true identity by claiming to be `Your friendly neighbourhood spiderman`.

### What is it?

A simple express middleware to change the `X-powered-by` value to be `Your friendly neighbourhood spiderman`.

### How to use

```
const express = require('express');
const poweredBySpiderman = require('powered-by-spiderman');

const app = express();

app.use(poweredBySpiderman);
```