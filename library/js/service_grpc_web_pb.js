/**
 * @fileoverview gRPC-Web generated client stub for library
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

var rpc$search_pb = require('./rpc-search_pb.js')
const proto = {};
proto.library = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.library.LibraryClient =
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
proto.library.LibraryPromiseClient =
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
 *   !proto.library.WelcomeRequest,
 *   !proto.library.WelcomeResponse>}
 */
const methodDescriptor_Library_Welcome = new grpc.web.MethodDescriptor(
  '/library.Library/Welcome',
  grpc.web.MethodType.UNARY,
  rpc$welcome_pb.WelcomeRequest,
  rpc$welcome_pb.WelcomeResponse,
  /**
   * @param {!proto.library.WelcomeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$welcome_pb.WelcomeResponse.deserializeBinary
);


/**
 * @param {!proto.library.WelcomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.library.WelcomeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.library.WelcomeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.library.LibraryClient.prototype.welcome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/library.Library/Welcome',
      request,
      metadata || {},
      methodDescriptor_Library_Welcome,
      callback);
};


/**
 * @param {!proto.library.WelcomeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.library.WelcomeResponse>}
 *     Promise that resolves to the response
 */
proto.library.LibraryPromiseClient.prototype.welcome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/library.Library/Welcome',
      request,
      metadata || {},
      methodDescriptor_Library_Welcome);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.library.HealthRequest,
 *   !proto.library.HealthResponse>}
 */
const methodDescriptor_Library_Health = new grpc.web.MethodDescriptor(
  '/library.Library/Health',
  grpc.web.MethodType.UNARY,
  rpc$health_pb.HealthRequest,
  rpc$health_pb.HealthResponse,
  /**
   * @param {!proto.library.HealthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$health_pb.HealthResponse.deserializeBinary
);


/**
 * @param {!proto.library.HealthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.library.HealthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.library.HealthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.library.LibraryClient.prototype.health =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/library.Library/Health',
      request,
      metadata || {},
      methodDescriptor_Library_Health,
      callback);
};


/**
 * @param {!proto.library.HealthRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.library.HealthResponse>}
 *     Promise that resolves to the response
 */
proto.library.LibraryPromiseClient.prototype.health =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/library.Library/Health',
      request,
      metadata || {},
      methodDescriptor_Library_Health);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.library.SearchRequest,
 *   !proto.library.SearchResponse>}
 */
const methodDescriptor_Library_Search = new grpc.web.MethodDescriptor(
  '/library.Library/Search',
  grpc.web.MethodType.UNARY,
  rpc$search_pb.SearchRequest,
  rpc$search_pb.SearchResponse,
  /**
   * @param {!proto.library.SearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$search_pb.SearchResponse.deserializeBinary
);


/**
 * @param {!proto.library.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.library.SearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.library.SearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.library.LibraryClient.prototype.search =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/library.Library/Search',
      request,
      metadata || {},
      methodDescriptor_Library_Search,
      callback);
};


/**
 * @param {!proto.library.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.library.SearchResponse>}
 *     Promise that resolves to the response
 */
proto.library.LibraryPromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/library.Library/Search',
      request,
      metadata || {},
      methodDescriptor_Library_Search);
};


module.exports = proto.library;

