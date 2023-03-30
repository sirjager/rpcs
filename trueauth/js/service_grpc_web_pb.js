/**
 * @fileoverview gRPC-Web generated client stub for trueauth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.12
// source: service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var protoc$gen$openapiv2_options_annotations_pb = require('./protoc-gen-openapiv2/options/annotations_pb.js')

var rpc$welcome_pb = require('./rpc-welcome_pb.js')

var rpc$health_pb = require('./rpc-health_pb.js')
const proto = {};
proto.trueauth = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.trueauth.TrueAuthClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.trueauth.TrueAuthPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trueauth.WelcomeRequest,
 *   !proto.trueauth.WelcomeResponse>}
 */
const methodDescriptor_TrueAuth_Welcome = new grpc.web.MethodDescriptor(
  '/trueauth.TrueAuth/Welcome',
  grpc.web.MethodType.UNARY,
  rpc$welcome_pb.WelcomeRequest,
  rpc$welcome_pb.WelcomeResponse,
  /**
   * @param {!proto.trueauth.WelcomeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$welcome_pb.WelcomeResponse.deserializeBinary
);


/**
 * @param {!proto.trueauth.WelcomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.trueauth.WelcomeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trueauth.WelcomeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trueauth.TrueAuthClient.prototype.welcome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trueauth.TrueAuth/Welcome',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Welcome,
      callback);
};


/**
 * @param {!proto.trueauth.WelcomeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trueauth.WelcomeResponse>}
 *     Promise that resolves to the response
 */
proto.trueauth.TrueAuthPromiseClient.prototype.welcome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trueauth.TrueAuth/Welcome',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Welcome);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trueauth.HealthRequest,
 *   !proto.trueauth.HealthResponse>}
 */
const methodDescriptor_TrueAuth_Health = new grpc.web.MethodDescriptor(
  '/trueauth.TrueAuth/Health',
  grpc.web.MethodType.UNARY,
  rpc$health_pb.HealthRequest,
  rpc$health_pb.HealthResponse,
  /**
   * @param {!proto.trueauth.HealthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$health_pb.HealthResponse.deserializeBinary
);


/**
 * @param {!proto.trueauth.HealthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.trueauth.HealthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trueauth.HealthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trueauth.TrueAuthClient.prototype.health =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trueauth.TrueAuth/Health',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Health,
      callback);
};


/**
 * @param {!proto.trueauth.HealthRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trueauth.HealthResponse>}
 *     Promise that resolves to the response
 */
proto.trueauth.TrueAuthPromiseClient.prototype.health =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trueauth.TrueAuth/Health',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Health);
};


module.exports = proto.trueauth;

