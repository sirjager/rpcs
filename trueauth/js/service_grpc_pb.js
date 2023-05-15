// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('./protoc-gen-openapiv2/options/annotations_pb.js');
var rpc$welcome_pb = require('./rpc-welcome_pb.js');
var rpc$health_pb = require('./rpc-health_pb.js');
var rpc$register_pb = require('./rpc-register_pb.js');
var rpc$login_pb = require('./rpc-login_pb.js');
var rpc$verify_pb = require('./rpc-verify_pb.js');
var rpc$refresh_pb = require('./rpc-refresh_pb.js');
var rpc$logout_pb = require('./rpc-logout_pb.js');
var rpc$recovery_pb = require('./rpc-recovery_pb.js');
var rpc$update_pb = require('./rpc-update_pb.js');
var rpc$delete_pb = require('./rpc-delete_pb.js');
var rpc$allowip_pb = require('./rpc-allowip_pb.js');
var rpc$users_pb = require('./rpc-users_pb.js');

function serialize_trueauth_AllowIPRequest(arg) {
  if (!(arg instanceof rpc$allowip_pb.AllowIPRequest)) {
    throw new Error('Expected argument of type trueauth.AllowIPRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_AllowIPRequest(buffer_arg) {
  return rpc$allowip_pb.AllowIPRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_AllowIPResponse(arg) {
  if (!(arg instanceof rpc$allowip_pb.AllowIPResponse)) {
    throw new Error('Expected argument of type trueauth.AllowIPResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_AllowIPResponse(buffer_arg) {
  return rpc$allowip_pb.AllowIPResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_DeleteRequest(arg) {
  if (!(arg instanceof rpc$delete_pb.DeleteRequest)) {
    throw new Error('Expected argument of type trueauth.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_DeleteRequest(buffer_arg) {
  return rpc$delete_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_DeleteResponse(arg) {
  if (!(arg instanceof rpc$delete_pb.DeleteResponse)) {
    throw new Error('Expected argument of type trueauth.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_DeleteResponse(buffer_arg) {
  return rpc$delete_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_HealthRequest(arg) {
  if (!(arg instanceof rpc$health_pb.HealthRequest)) {
    throw new Error('Expected argument of type trueauth.HealthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_HealthRequest(buffer_arg) {
  return rpc$health_pb.HealthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_HealthResponse(arg) {
  if (!(arg instanceof rpc$health_pb.HealthResponse)) {
    throw new Error('Expected argument of type trueauth.HealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_HealthResponse(buffer_arg) {
  return rpc$health_pb.HealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_LoginRequest(arg) {
  if (!(arg instanceof rpc$login_pb.LoginRequest)) {
    throw new Error('Expected argument of type trueauth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_LoginRequest(buffer_arg) {
  return rpc$login_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_LoginResponse(arg) {
  if (!(arg instanceof rpc$login_pb.LoginResponse)) {
    throw new Error('Expected argument of type trueauth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_LoginResponse(buffer_arg) {
  return rpc$login_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_LogoutRequest(arg) {
  if (!(arg instanceof rpc$logout_pb.LogoutRequest)) {
    throw new Error('Expected argument of type trueauth.LogoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_LogoutRequest(buffer_arg) {
  return rpc$logout_pb.LogoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_LogoutResponse(arg) {
  if (!(arg instanceof rpc$logout_pb.LogoutResponse)) {
    throw new Error('Expected argument of type trueauth.LogoutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_LogoutResponse(buffer_arg) {
  return rpc$logout_pb.LogoutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_RecoveryRequest(arg) {
  if (!(arg instanceof rpc$recovery_pb.RecoveryRequest)) {
    throw new Error('Expected argument of type trueauth.RecoveryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_RecoveryRequest(buffer_arg) {
  return rpc$recovery_pb.RecoveryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_RecoveryResponse(arg) {
  if (!(arg instanceof rpc$recovery_pb.RecoveryResponse)) {
    throw new Error('Expected argument of type trueauth.RecoveryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_RecoveryResponse(buffer_arg) {
  return rpc$recovery_pb.RecoveryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_RefreshRequest(arg) {
  if (!(arg instanceof rpc$refresh_pb.RefreshRequest)) {
    throw new Error('Expected argument of type trueauth.RefreshRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_RefreshRequest(buffer_arg) {
  return rpc$refresh_pb.RefreshRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_RefreshResponse(arg) {
  if (!(arg instanceof rpc$refresh_pb.RefreshResponse)) {
    throw new Error('Expected argument of type trueauth.RefreshResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_RefreshResponse(buffer_arg) {
  return rpc$refresh_pb.RefreshResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_RegisterRequest(arg) {
  if (!(arg instanceof rpc$register_pb.RegisterRequest)) {
    throw new Error('Expected argument of type trueauth.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_RegisterRequest(buffer_arg) {
  return rpc$register_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_RegisterResponse(arg) {
  if (!(arg instanceof rpc$register_pb.RegisterResponse)) {
    throw new Error('Expected argument of type trueauth.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_RegisterResponse(buffer_arg) {
  return rpc$register_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_UpdateRequest(arg) {
  if (!(arg instanceof rpc$update_pb.UpdateRequest)) {
    throw new Error('Expected argument of type trueauth.UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_UpdateRequest(buffer_arg) {
  return rpc$update_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_UpdateResponse(arg) {
  if (!(arg instanceof rpc$update_pb.UpdateResponse)) {
    throw new Error('Expected argument of type trueauth.UpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_UpdateResponse(buffer_arg) {
  return rpc$update_pb.UpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_UserRequest(arg) {
  if (!(arg instanceof rpc$users_pb.UserRequest)) {
    throw new Error('Expected argument of type trueauth.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_UserRequest(buffer_arg) {
  return rpc$users_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_UserResponse(arg) {
  if (!(arg instanceof rpc$users_pb.UserResponse)) {
    throw new Error('Expected argument of type trueauth.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_UserResponse(buffer_arg) {
  return rpc$users_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_VerifyRequest(arg) {
  if (!(arg instanceof rpc$verify_pb.VerifyRequest)) {
    throw new Error('Expected argument of type trueauth.VerifyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_VerifyRequest(buffer_arg) {
  return rpc$verify_pb.VerifyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_VerifyResponse(arg) {
  if (!(arg instanceof rpc$verify_pb.VerifyResponse)) {
    throw new Error('Expected argument of type trueauth.VerifyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_VerifyResponse(buffer_arg) {
  return rpc$verify_pb.VerifyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_WelcomeRequest(arg) {
  if (!(arg instanceof rpc$welcome_pb.WelcomeRequest)) {
    throw new Error('Expected argument of type trueauth.WelcomeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_WelcomeRequest(buffer_arg) {
  return rpc$welcome_pb.WelcomeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_trueauth_WelcomeResponse(arg) {
  if (!(arg instanceof rpc$welcome_pb.WelcomeResponse)) {
    throw new Error('Expected argument of type trueauth.WelcomeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_trueauth_WelcomeResponse(buffer_arg) {
  return rpc$welcome_pb.WelcomeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TrueAuthService = exports.TrueAuthService = {
  welcome: {
    path: '/trueauth.TrueAuth/Welcome',
    requestStream: false,
    responseStream: false,
    requestType: rpc$welcome_pb.WelcomeRequest,
    responseType: rpc$welcome_pb.WelcomeResponse,
    requestSerialize: serialize_trueauth_WelcomeRequest,
    requestDeserialize: deserialize_trueauth_WelcomeRequest,
    responseSerialize: serialize_trueauth_WelcomeResponse,
    responseDeserialize: deserialize_trueauth_WelcomeResponse,
  },
  health: {
    path: '/trueauth.TrueAuth/Health',
    requestStream: false,
    responseStream: false,
    requestType: rpc$health_pb.HealthRequest,
    responseType: rpc$health_pb.HealthResponse,
    requestSerialize: serialize_trueauth_HealthRequest,
    requestDeserialize: deserialize_trueauth_HealthRequest,
    responseSerialize: serialize_trueauth_HealthResponse,
    responseDeserialize: deserialize_trueauth_HealthResponse,
  },
  register: {
    path: '/trueauth.TrueAuth/Register',
    requestStream: false,
    responseStream: false,
    requestType: rpc$register_pb.RegisterRequest,
    responseType: rpc$register_pb.RegisterResponse,
    requestSerialize: serialize_trueauth_RegisterRequest,
    requestDeserialize: deserialize_trueauth_RegisterRequest,
    responseSerialize: serialize_trueauth_RegisterResponse,
    responseDeserialize: deserialize_trueauth_RegisterResponse,
  },
  login: {
    path: '/trueauth.TrueAuth/Login',
    requestStream: false,
    responseStream: false,
    requestType: rpc$login_pb.LoginRequest,
    responseType: rpc$login_pb.LoginResponse,
    requestSerialize: serialize_trueauth_LoginRequest,
    requestDeserialize: deserialize_trueauth_LoginRequest,
    responseSerialize: serialize_trueauth_LoginResponse,
    responseDeserialize: deserialize_trueauth_LoginResponse,
  },
  verify: {
    path: '/trueauth.TrueAuth/Verify',
    requestStream: false,
    responseStream: false,
    requestType: rpc$verify_pb.VerifyRequest,
    responseType: rpc$verify_pb.VerifyResponse,
    requestSerialize: serialize_trueauth_VerifyRequest,
    requestDeserialize: deserialize_trueauth_VerifyRequest,
    responseSerialize: serialize_trueauth_VerifyResponse,
    responseDeserialize: deserialize_trueauth_VerifyResponse,
  },
  logout: {
    path: '/trueauth.TrueAuth/Logout',
    requestStream: false,
    responseStream: false,
    requestType: rpc$logout_pb.LogoutRequest,
    responseType: rpc$logout_pb.LogoutResponse,
    requestSerialize: serialize_trueauth_LogoutRequest,
    requestDeserialize: deserialize_trueauth_LogoutRequest,
    responseSerialize: serialize_trueauth_LogoutResponse,
    responseDeserialize: deserialize_trueauth_LogoutResponse,
  },
  refresh: {
    path: '/trueauth.TrueAuth/Refresh',
    requestStream: false,
    responseStream: false,
    requestType: rpc$refresh_pb.RefreshRequest,
    responseType: rpc$refresh_pb.RefreshResponse,
    requestSerialize: serialize_trueauth_RefreshRequest,
    requestDeserialize: deserialize_trueauth_RefreshRequest,
    responseSerialize: serialize_trueauth_RefreshResponse,
    responseDeserialize: deserialize_trueauth_RefreshResponse,
  },
  recovery: {
    path: '/trueauth.TrueAuth/Recovery',
    requestStream: false,
    responseStream: false,
    requestType: rpc$recovery_pb.RecoveryRequest,
    responseType: rpc$recovery_pb.RecoveryResponse,
    requestSerialize: serialize_trueauth_RecoveryRequest,
    requestDeserialize: deserialize_trueauth_RecoveryRequest,
    responseSerialize: serialize_trueauth_RecoveryResponse,
    responseDeserialize: deserialize_trueauth_RecoveryResponse,
  },
  delete: {
    path: '/trueauth.TrueAuth/Delete',
    requestStream: false,
    responseStream: false,
    requestType: rpc$delete_pb.DeleteRequest,
    responseType: rpc$delete_pb.DeleteResponse,
    requestSerialize: serialize_trueauth_DeleteRequest,
    requestDeserialize: deserialize_trueauth_DeleteRequest,
    responseSerialize: serialize_trueauth_DeleteResponse,
    responseDeserialize: deserialize_trueauth_DeleteResponse,
  },
  update: {
    path: '/trueauth.TrueAuth/Update',
    requestStream: false,
    responseStream: false,
    requestType: rpc$update_pb.UpdateRequest,
    responseType: rpc$update_pb.UpdateResponse,
    requestSerialize: serialize_trueauth_UpdateRequest,
    requestDeserialize: deserialize_trueauth_UpdateRequest,
    responseSerialize: serialize_trueauth_UpdateResponse,
    responseDeserialize: deserialize_trueauth_UpdateResponse,
  },
  allowIP: {
    path: '/trueauth.TrueAuth/AllowIP',
    requestStream: false,
    responseStream: false,
    requestType: rpc$allowip_pb.AllowIPRequest,
    responseType: rpc$allowip_pb.AllowIPResponse,
    requestSerialize: serialize_trueauth_AllowIPRequest,
    requestDeserialize: deserialize_trueauth_AllowIPRequest,
    responseSerialize: serialize_trueauth_AllowIPResponse,
    responseDeserialize: deserialize_trueauth_AllowIPResponse,
  },
  user: {
    path: '/trueauth.TrueAuth/User',
    requestStream: false,
    responseStream: false,
    requestType: rpc$users_pb.UserRequest,
    responseType: rpc$users_pb.UserResponse,
    requestSerialize: serialize_trueauth_UserRequest,
    requestDeserialize: deserialize_trueauth_UserRequest,
    responseSerialize: serialize_trueauth_UserResponse,
    responseDeserialize: deserialize_trueauth_UserResponse,
  },
};

exports.TrueAuthClient = grpc.makeGenericClientConstructor(TrueAuthService);
