const should = require('should');
const expect = require('expect.js');
const percentRank = require('../lib');

describe('percentRank', function () {

  it('normal', function () {
    should(percentRank([1, 5, 20, 50, 55, 60, 70, 80, 90, 100], 1)).be.equal(0);
    should(percentRank([1, 5, 20, 50, 55, 60, 70, 80, 90, 100], 44)).be.equal(0.3111111111111111);
    should(percentRank([1, 5, 20, 50, 55, 60, 70, 80, 90, 100], 66)).be.equal(0.6222222222222222);
    should(percentRank([1, 5, 20, 50, 55, 60, 70, 80, 90, 100], 100)).be.equal(1);
  });

  it('out of bounds', function () {
    let pr = () => percentRank([1, 5, 20, 50, 55, 60, 70, 80, 90, 100], -1);
    expect(pr).to.throw;
    pr = () => percentRank([1, 5, 20, 50, 55, 60, 70, 80, 90, 100], 101);
    expect(pr).to.throw;
  });

});
