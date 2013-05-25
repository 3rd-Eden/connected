describe('connected', function () {
  'use strict';

  var connected = require('../')
    , chai = require('chai')
    , net = require('net')
    , expect = chai.expect;

  it('receives an error argument when the server fails', function (done) {
    var server = net.createServer();

    connected(server, 80, function connect(err) {
      expect(err).to.be.instanceOf(Error);

      done();
    });
  });

  it('correctly listens to the supplied port arguments', function (done) {
    var server = net.createServer();

    connected(server, 8080, function connected(err) {
      expect(err).to.equal(undefined);
      expect(this.address().port).to.equal(8080);

      done();
    });
  });
});
