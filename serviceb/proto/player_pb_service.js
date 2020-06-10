// package: player
// file: player.proto

var player_pb = require("./player_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PlayerService = (function () {
  function PlayerService() {}
  PlayerService.serviceName = "player.PlayerService";
  return PlayerService;
}());

PlayerService.getByName = {
  methodName: "getByName",
  service: PlayerService,
  requestStream: false,
  responseStream: false,
  requestType: player_pb.Body,
  responseType: player_pb.Player
};

exports.PlayerService = PlayerService;

function PlayerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PlayerServiceClient.prototype.getByName = function getByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PlayerService.getByName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.PlayerServiceClient = PlayerServiceClient;

