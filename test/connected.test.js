describe('connected', function () {
  'use strict';

  var connected = require('../')
    , assume = require('assume')
    , net = require('net');

  it('receives an error argument when the server fails', function (done) {
    var server = net.createServer();

    connected(server, 80, function connect(err) {
      assume(err).to.be.instanceOf(Error);

      done();
    });
  });

  it('correctly listens to the supplied port arguments', function (done) {
    var server = net.createServer();

    connected(server, 1024, function connected(err) {
      assume(err).to.equal(undefined);
      assume(this.address().port).to.equal(1024);

      done();
    });
  });
});
