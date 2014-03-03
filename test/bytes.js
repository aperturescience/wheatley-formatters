'use strict';

var assert = require('assert'),
    format = require('../format');

describe('format', function () {

  // larger than yottabyte
  describe('#bytes(10000000000000000000000000000)', function () {

    it('should return 8271.81 YB', function () {
      var s = format.bytes(10000000000000000000000000000);
      var a = '8271.81 YB';
      assert.equal(s, a);
    });

  });

  // terabytes
  describe('#bytes(2199023255552)', function () {

    it('should return 2.00 TB', function () {
      var s = format.bytes(2199023255552);
      var a = '2.00 TB';
      assert.equal(s, a);
    });

    it('should return 2.00 terabytes', function () {
      var s = format.bytes(2199023255552, false);
      var a = '2.00 terabytes';
      assert.equal(s, a);
    });

  });
  // gigabytes
  describe('#bytes(8589934592)', function () {

    it('should return 8.00 GB', function () {
      var s = format.bytes(8589934592);
      var a = '8.00 GB';
      assert.equal(s, a);
    });

    it('should return 8.00 gigabytes', function () {
      var s = format.bytes(8589934592, false);
      var a = '8.00 gigabytes';
      assert.equal(s, a);
    });

  });

  // megabytes
  describe('#bytes(536870912)', function () {

    it('should return 512.00 MB', function () {
      var s = format.bytes(536870912);
      var a = '512.00 MB';
      assert.equal(s, a);
    });

    it('should return 512.00 megabytes', function () {
      var s = format.bytes(536870912, false);
      var a = '512.00 megabytes';
      assert.equal(s, a);
    });

  });


  // kilobytes
  describe('#bytes(4096)', function () {

    it('should return 4.00 kB', function () {
      var s = format.bytes(4096);
      var a = '4.00 kB';
      assert.equal(s, a);
    });

    it('should return 4.00 kilobytes', function () {
      var s = format.bytes(4096, false);
      var a = '4.00 kilobytes';
      assert.equal(s, a);
    });

  });

  // bytes
  describe('#bytes(4)', function () {

    it('should return 4.00 bytes', function () {
      var s = format.bytes(4);
      var a = '4.00 bytes';
      assert.equal(s, a);
    });

    it('should return 4.00 bytes', function () {
      var s = format.bytes(4, false);
      var a = '4.00 bytes';
      assert.equal(s, a);
    });

  });

});