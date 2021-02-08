const {lambertW0} = require('lambert-w');

function dKL(x, l) {
  return l - x + x*Math.log(x/l);
}

function poissonUpperBound(x, l) {
  const dKL0 = dKL(x, l);
  if (1 > Math.PI*dKL0) {
    return Math.exp(-dKL0)/2;
  } else {
    return Math.exp(-dKL0)/Math.sqrt(4*Math.PI*dKL0);
  }
}

function invPoissonUpperBound(a, l) {
  const x0 = l*Math.exp(lambertW0((lambertW0(1/(2*Math.PI*a*a)) - 2*l)/(2*Math.E*l)) + 1);
  if (1 > Math.PI*dKL(x0, l)) {
    return l*Math.exp(lambertW0(-(l+Math.log(2*a))/(Math.E*l)) + 1);
  } else return x0;
}

function invLambdaPoissonUpperBound(a, x) {
  const l0 = -x*lambertW0(-Math.exp(-lambertW0(1/(2*a*a*Math.PI))/(2*x) - 1));
  if (1 > Math.PI*dKL(x, l0)) {
    return -x*lambertW0(-Math.pow(2*a, 1/x)/Math.E);
  } else return l0;
}

if (typeof module !== 'undefined') {
  module.exports = {
    poissonUpperBound,
    invPoissonUpperBound,
    invLambdaPoissonUpperBound,
  }
}
