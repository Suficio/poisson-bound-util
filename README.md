# poisson-bound-util
Utility functions for working with Poisson distribution bounds as described by Short (2013).

## Poisson bounds
Considering a variable `X ~ Poisson(l)`, we are interested in the formulation of `P(X > x)` as derived by Short:

![P(X > x)](https://wikimedia.org/api/rest_v1/media/math/render/svg/237346538666d9cb17f7377237d60ab38b36f5d3 "P(X > x)")

`P(X > x)` is implemented as `poissonUpperBound(x, l)`. Where appropriate P(X > x) is defined as `a`, where `1 - a` is the confidence level that a realization of the distribution is within the upper bound.

The repository provides two other functions `invPoissonUpperBound(a, l)` which returns the bound `x`, and `invLambdaPoissonUpperBound(a, x)` which returns the corresponding `l`.

## Usage
These practical application of there relationships are discussed in the article [Constructing efficient social media event streams using Poisson distributions](
suficio.com/constructing-event-streams/).

```
npm install CheezBarger/poisson-bound-util
```

```javascript
const {
  poissonUpperBound,
  invPoissonUpperBound,
  invLambdaPoissonUpperBound
} = require('poisson-bound-util');

const a = poissonUpperBound(25, 20); // 0.20793717884653543
const x = invPoissonUpperBound(a, 20); // 25
const l = invLambdaPoissonUpperBound(a, 25); // 20
```
