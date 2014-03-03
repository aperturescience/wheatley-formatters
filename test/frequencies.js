'use strict';

var assert = require('assert'),
    format = require('../format');

describe('format', function () {

  // larger than terahertz
  describe('#frequency(3000000000000)', function () {

    it('should return 3000.00 PHz', function () {
      var s = format.frequency(3000000000000);
      var a = '3000.00 PHz';
      assert.equal(s, a);
    });

    it('should return 3.00 terahertz', function () {
      var s = format.frequency(3000000, false);
      var a = '3.00 terahertz';
      assert.equal(s, a);
    });

  });

  // terahertz
  describe('#frequency(3000000)', function () {

    it('should return 3.00 THz', function () {
      var s = format.frequency(3000000);
      var a = '3.00 THz';
      assert.equal(s, a);
    });

    it('should return 3.00 terahertz', function () {
      var s = format.frequency(3000000, false);
      var a = '3.00 terahertz';
      assert.equal(s, a);
    });

  });

  // gigahertz
  describe('#frequency(1800)', function () {

    it('should return 1.80 GHz', function () {
      var s = format.frequency(1800);
      var a = '1.80 GHz';
      assert.equal(s, a);
    });

    it('should return 1.80 gigahertz', function () {
      var s = format.frequency(1800, false);
      var a = '1.80 gigahertz';
      assert.equal(s, a);
    });

  });

  // megahertz
  describe('#frequency(800)', function () {

    it('should return 800.00 MHz', function () {
      var s = format.frequency(800);
      var a = '800.00 MHz';
      assert.equal(s, a);
    });

    it('should return 800.00 megabytes', function () {
      var s = format.frequency(800, false);
      var a = '800.00 megahertz';
      assert.equal(s, a);
    });

  });

});