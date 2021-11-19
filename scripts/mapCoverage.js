const createReporter = require('istanbul-api').createReporter;
const istanbulCoverage = require('istanbul-lib-coverage');

const map = istanbulCoverage.createCoverageMap();
const reporter = createReporter();

const countries = ['chile', 'peru'];

countries.forEach(country => {
  const coverage = require(`../coverage/coverage-${country}-final.json`);
  Object.keys(coverage).forEach(
    filename => map.addFileCoverage(coverage[filename])
  );
});

reporter.addAll(['json', 'lcov', 'text']);
reporter.write(map);
