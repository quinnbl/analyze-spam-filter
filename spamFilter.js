// done in 21 min

function analyzeSpamFilter(arr) {
  const totals = {};

  const truPos = _.pluck(arr, 'truePositives');
  const falPos = _.pluck(arr, 'falsePositives');
  const truNeg = _.pluck(arr, 'trueNegatives');
  const falNeg = _.pluck(arr, 'falseNegatives');
  console.log(truPos);

  totals.truePositives = _.reduce(truPos, (memo, num) => memo + num);
  totals.falsePositives = _.reduce(falPos, (memo, num) => memo + num);
  totals.trueNegatives = _.reduce(truNeg, (memo, num) => memo + num);
  totals.falseNegatives = _.reduce(falNeg, (memo, num) => memo + num);

  return totals;
}

console.log(analyzeSpamFilter([
  {
    truePositives: 1,
    falsePositives: 6,
    trueNegatives: 3,
    falseNegatives: 2,
  },
  {
    truePositives: 6,
    trueNegatives: 4,
    falsePositives: 12,
    falseNegatives: 8,
  },
]));
