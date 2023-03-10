# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: service.auth.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from protoc_gen_openapiv2.options import annotations_pb2 as protoc__gen__openapiv2_dot_options_dot_annotations__pb2
from rpc_welcome import auth_pb2 as rpc__welcome_dot_auth__pb2
from rpc_health import auth_pb2 as rpc__health_dot_auth__pb2
from rpc_signup import auth_pb2 as rpc__signup_dot_auth__pb2
from rpc_signin import auth_pb2 as rpc__signin_dot_auth__pb2
from rpc_signout import auth_pb2 as rpc__signout_dot_auth__pb2
from rpc_refresh import auth_pb2 as rpc__refresh_dot_auth__pb2
from rpc_verify import auth_pb2 as rpc__verify_dot_auth__pb2
from rpc_forgot import auth_pb2 as rpc__forgot_dot_auth__pb2
from rpc_delete import auth_pb2 as rpc__delete_dot_auth__pb2
from rpc_users import auth_pb2 as rpc__users_dot_auth__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='service.auth.proto',
  package='auth',
  syntax='proto3',
  serialized_options=_b('Z\035github.com/sirjager/rpcs/auth\222A=\022;\n\010Auth Api\"*\n\013Ankur Kumar\022\033https://github.com/sirjager2\0030.2'),
  serialized_pb=_b('\n\x12service.auth.proto\x12\x04\x61uth\x1a\x1cgoogle/api/annotations.proto\x1a.protoc-gen-openapiv2/options/annotations.proto\x1a\x16rpc-welcome.auth.proto\x1a\x15rpc-health.auth.proto\x1a\x15rpc-signup.auth.proto\x1a\x15rpc-signin.auth.proto\x1a\x16rpc-signout.auth.proto\x1a\x16rpc-refresh.auth.proto\x1a\x15rpc-verify.auth.proto\x1a\x15rpc-forgot.auth.proto\x1a\x15rpc-delete.auth.proto\x1a\x14rpc-users.auth.proto2\xda\x11\n\x04\x41uth\x12\x83\x01\n\x0b\x41uthWelcome\x12\x18.auth.AuthWelcomeRequest\x1a\x19.auth.AuthWelcomeResponse\"?\x82\xd3\xe4\x93\x02\x03\x12\x01/\x92\x41\x33\n\x06System\x12\x0fWelcome Message\x1a\x18returs a welcome message\x12\x9c\x01\n\nAuthHealth\x12\x17.auth.AuthHealthRequest\x1a\x18.auth.AuthHealthResponse\"[\x82\xd3\xe4\x93\x02\x0c\x12\n/v1/health\x92\x41\x46\n\x06System\x12\nApi Health\x1a\x30use this route to check if api is working or not\x12\x92\x01\n\nAuthSignup\x12\x17.auth.AuthSignupRequest\x1a\x18.auth.AuthSignupResponse\"Q\x82\xd3\xe4\x93\x02\x0f\"\n/v1/signup:\x01*\x92\x41\x39\n\x0e\x41uthentication\x12\rRegister User\x1a\x18use this route to signup\x12\xb6\x01\n\nAuthSignin\x12\x17.auth.AuthSigninRequest\x1a\x18.auth.AuthSigninResponse\"u\x82\xd3\xe4\x93\x02\x0f\"\n/v1/signin:\x01*\x92\x41]\n\x0e\x41uthentication\x12\nLogin User\x1a?use this router to login user and get access and refresh tokens\x12\xaa\x01\n\x0b\x41uthSignout\x12\x18.auth.AuthSignoutRequest\x1a\x19.auth.AuthSignoutResponse\"f\x82\xd3\xe4\x93\x02\x10\"\x0b/v1/signout:\x01*\x92\x41M\n\x0e\x41uthentication\x12\x0fSignout session\x1a*this route can be used to signout sessions\x12\xa9\x01\n\x10\x41uthRefreshToken\x12\x1d.auth.AuthRefreshTokenRequest\x1a\x1e.auth.AuthRefreshTokenResponse\"V\x82\xd3\xe4\x93\x02\r\"\x0b/v1/refresh\x92\x41@\n\x0e\x41uthentication\x12\x14Refresh Access Token\x1a\x18Returns new access token\x12\xeb\x01\n\x1c\x41uthRequestEmailVerification\x12).auth.AuthRequestEmailVerificationRequest\x1a*.auth.AuthRequestEmailVerificationResponse\"t\x82\xd3\xe4\x93\x02\x0c\x12\n/v1/verify\x92\x41_\n\x0e\x41uthentication\x12\x1aRequest Email Verification\x1a\x31Sends email verification code to registered email\x12\xcf\x01\n\x0f\x41uthVerifyEmail\x12\x1c.auth.AuthVerifyEmailRequest\x1a\x1d.auth.AuthVerifyEmailResponse\"\x7f\x82\xd3\xe4\x93\x02\x0c\"\n/v1/verify\x92\x41j\n\x0e\x41uthentication\x12\x19Verifies Registered Email\x1a=Verify registered email if sent valid email verification code\x12\xcd\x01\n\x12\x41uthForgotPassword\x12\x1f.auth.AuthForgotPasswordRequest\x1a .auth.AuthForgotPasswordResponse\"t\x82\xd3\xe4\x93\x02\x0f\"\n/v1/forgot:\x01*\x92\x41\\\n\x0e\x41uthentication\x12\x16Request password reset\x1a\x32This send password reset code to email if verified\x12\xbd\x01\n\x11\x41uthResetPassword\x12\x1e.auth.AuthResetPasswordRequest\x1a\x1f.auth.AuthResetPasswordResponse\"g\x82\xd3\xe4\x93\x02\x0e\"\t/v1/reset:\x01*\x92\x41P\n\x0e\x41uthentication\x12\x0eReset password\x1a.Resets account password if reset code is valid\x12\xaa\x01\n\x11\x41uthDeleteAccount\x12\x1e.auth.AuthDeleteAccountRequest\x1a\x1f.auth.AuthDeleteAccountResponse\"T\x82\xd3\xe4\x93\x02\x0f*\r/v1/terminate\x92\x41<\n\x0e\x41uthentication\x12\x12Terminates Account\x1a\x16Terminate user account\x12{\n\tAuthUsers\x12\x16.auth.AuthUsersRequest\x1a\x17.auth.AuthUsersResponse\"=\x82\xd3\xe4\x93\x02\x0b\x12\t/v1/users\x92\x41)\n\x05Users\x12\x11Returns all users\x1a\rGet all users\x12\x8b\x01\n\x08\x41uthUser\x12\x15.auth.AuthUserRequest\x1a\x16.auth.AuthUserResponse\"P\x82\xd3\xe4\x93\x02\x16\x12\x14/v1/users/{identity}\x92\x41\x31\n\x05Users\x12\x16Returns requested user\x1a\x10Get request userB_Z\x1dgithub.com/sirjager/rpcs/auth\x92\x41=\x12;\n\x08\x41uth Api\"*\n\x0b\x41nkur Kumar\x12\x1bhttps://github.com/sirjager2\x03\x30.2b\x06proto3')
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,protoc__gen__openapiv2_dot_options_dot_annotations__pb2.DESCRIPTOR,rpc__welcome_dot_auth__pb2.DESCRIPTOR,rpc__health_dot_auth__pb2.DESCRIPTOR,rpc__signup_dot_auth__pb2.DESCRIPTOR,rpc__signin_dot_auth__pb2.DESCRIPTOR,rpc__signout_dot_auth__pb2.DESCRIPTOR,rpc__refresh_dot_auth__pb2.DESCRIPTOR,rpc__verify_dot_auth__pb2.DESCRIPTOR,rpc__forgot_dot_auth__pb2.DESCRIPTOR,rpc__delete_dot_auth__pb2.DESCRIPTOR,rpc__users_dot_auth__pb2.DESCRIPTOR,])



_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None

_AUTH = _descriptor.ServiceDescriptor(
  name='Auth',
  full_name='auth.Auth',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=339,
  serialized_end=2605,
  methods=[
  _descriptor.MethodDescriptor(
    name='AuthWelcome',
    full_name='auth.Auth.AuthWelcome',
    index=0,
    containing_service=None,
    input_type=rpc__welcome_dot_auth__pb2._AUTHWELCOMEREQUEST,
    output_type=rpc__welcome_dot_auth__pb2._AUTHWELCOMERESPONSE,
    serialized_options=_b('\202\323\344\223\002\003\022\001/\222A3\n\006System\022\017Welcome Message\032\030returs a welcome message'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthHealth',
    full_name='auth.Auth.AuthHealth',
    index=1,
    containing_service=None,
    input_type=rpc__health_dot_auth__pb2._AUTHHEALTHREQUEST,
    output_type=rpc__health_dot_auth__pb2._AUTHHEALTHRESPONSE,
    serialized_options=_b('\202\323\344\223\002\014\022\n/v1/health\222AF\n\006System\022\nApi Health\0320use this route to check if api is working or not'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthSignup',
    full_name='auth.Auth.AuthSignup',
    index=2,
    containing_service=None,
    input_type=rpc__signup_dot_auth__pb2._AUTHSIGNUPREQUEST,
    output_type=rpc__signup_dot_auth__pb2._AUTHSIGNUPRESPONSE,
    serialized_options=_b('\202\323\344\223\002\017\"\n/v1/signup:\001*\222A9\n\016Authentication\022\rRegister User\032\030use this route to signup'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthSignin',
    full_name='auth.Auth.AuthSignin',
    index=3,
    containing_service=None,
    input_type=rpc__signin_dot_auth__pb2._AUTHSIGNINREQUEST,
    output_type=rpc__signin_dot_auth__pb2._AUTHSIGNINRESPONSE,
    serialized_options=_b('\202\323\344\223\002\017\"\n/v1/signin:\001*\222A]\n\016Authentication\022\nLogin User\032?use this router to login user and get access and refresh tokens'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthSignout',
    full_name='auth.Auth.AuthSignout',
    index=4,
    containing_service=None,
    input_type=rpc__signout_dot_auth__pb2._AUTHSIGNOUTREQUEST,
    output_type=rpc__signout_dot_auth__pb2._AUTHSIGNOUTRESPONSE,
    serialized_options=_b('\202\323\344\223\002\020\"\013/v1/signout:\001*\222AM\n\016Authentication\022\017Signout session\032*this route can be used to signout sessions'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthRefreshToken',
    full_name='auth.Auth.AuthRefreshToken',
    index=5,
    containing_service=None,
    input_type=rpc__refresh_dot_auth__pb2._AUTHREFRESHTOKENREQUEST,
    output_type=rpc__refresh_dot_auth__pb2._AUTHREFRESHTOKENRESPONSE,
    serialized_options=_b('\202\323\344\223\002\r\"\013/v1/refresh\222A@\n\016Authentication\022\024Refresh Access Token\032\030Returns new access token'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthRequestEmailVerification',
    full_name='auth.Auth.AuthRequestEmailVerification',
    index=6,
    containing_service=None,
    input_type=rpc__verify_dot_auth__pb2._AUTHREQUESTEMAILVERIFICATIONREQUEST,
    output_type=rpc__verify_dot_auth__pb2._AUTHREQUESTEMAILVERIFICATIONRESPONSE,
    serialized_options=_b('\202\323\344\223\002\014\022\n/v1/verify\222A_\n\016Authentication\022\032Request Email Verification\0321Sends email verification code to registered email'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthVerifyEmail',
    full_name='auth.Auth.AuthVerifyEmail',
    index=7,
    containing_service=None,
    input_type=rpc__verify_dot_auth__pb2._AUTHVERIFYEMAILREQUEST,
    output_type=rpc__verify_dot_auth__pb2._AUTHVERIFYEMAILRESPONSE,
    serialized_options=_b('\202\323\344\223\002\014\"\n/v1/verify\222Aj\n\016Authentication\022\031Verifies Registered Email\032=Verify registered email if sent valid email verification code'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthForgotPassword',
    full_name='auth.Auth.AuthForgotPassword',
    index=8,
    containing_service=None,
    input_type=rpc__forgot_dot_auth__pb2._AUTHFORGOTPASSWORDREQUEST,
    output_type=rpc__forgot_dot_auth__pb2._AUTHFORGOTPASSWORDRESPONSE,
    serialized_options=_b('\202\323\344\223\002\017\"\n/v1/forgot:\001*\222A\\\n\016Authentication\022\026Request password reset\0322This send password reset code to email if verified'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthResetPassword',
    full_name='auth.Auth.AuthResetPassword',
    index=9,
    containing_service=None,
    input_type=rpc__forgot_dot_auth__pb2._AUTHRESETPASSWORDREQUEST,
    output_type=rpc__forgot_dot_auth__pb2._AUTHRESETPASSWORDRESPONSE,
    serialized_options=_b('\202\323\344\223\002\016\"\t/v1/reset:\001*\222AP\n\016Authentication\022\016Reset password\032.Resets account password if reset code is valid'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthDeleteAccount',
    full_name='auth.Auth.AuthDeleteAccount',
    index=10,
    containing_service=None,
    input_type=rpc__delete_dot_auth__pb2._AUTHDELETEACCOUNTREQUEST,
    output_type=rpc__delete_dot_auth__pb2._AUTHDELETEACCOUNTRESPONSE,
    serialized_options=_b('\202\323\344\223\002\017*\r/v1/terminate\222A<\n\016Authentication\022\022Terminates Account\032\026Terminate user account'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthUsers',
    full_name='auth.Auth.AuthUsers',
    index=11,
    containing_service=None,
    input_type=rpc__users_dot_auth__pb2._AUTHUSERSREQUEST,
    output_type=rpc__users_dot_auth__pb2._AUTHUSERSRESPONSE,
    serialized_options=_b('\202\323\344\223\002\013\022\t/v1/users\222A)\n\005Users\022\021Returns all users\032\rGet all users'),
  ),
  _descriptor.MethodDescriptor(
    name='AuthUser',
    full_name='auth.Auth.AuthUser',
    index=12,
    containing_service=None,
    input_type=rpc__users_dot_auth__pb2._AUTHUSERREQUEST,
    output_type=rpc__users_dot_auth__pb2._AUTHUSERRESPONSE,
    serialized_options=_b('\202\323\344\223\002\026\022\024/v1/users/{identity}\222A1\n\005Users\022\026Returns requested user\032\020Get request user'),
  ),
])
_sym_db.RegisterServiceDescriptor(_AUTH)

DESCRIPTOR.services_by_name['Auth'] = _AUTH

# @@protoc_insertion_point(module_scope)
