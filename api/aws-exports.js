/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-northeast-1",
    "aws_cognito_identity_pool_id": process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
    "aws_cognito_region": "ap-northeast-1",
    "aws_user_pools_id": process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
    "aws_user_pools_web_client_id": process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
    "oauth": {},
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_appsync_graphqlEndpoint": process.env.NEXT_PUBLIC_AWS_APPSYNC_GRAPHQLENDPOINT,
    "aws_appsync_region": "ap-northeast-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
};

export default awsmobile;