const createReporter = require('istanbul-api').createReporter;
const istanbulCoverage = require('istanbul-lib-coverage');

const map = istanbulCoverage.createCoverageMap();
const reporter = createReporter();

for (let i = 0; i < 4; i++) {
  const coverage = require(`../coverage/coverage-final-${i}.json`);
  Object.keys(coverage).forEach(
    filename => map.addFileCoverage(coverage[filename])
  );
}

reporter.addAll(['json']);
reporter.write(map);
