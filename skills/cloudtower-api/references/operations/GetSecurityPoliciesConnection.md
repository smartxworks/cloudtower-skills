# POST /get-security-policies-connection

**Resource:** [SecurityPolicy](../resources/SecurityPolicy.md)
**Operation ID:** `GetSecurityPoliciesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSecurityPoliciesConnectionRequestBody](../schemas/Get/GetSecurityPoliciesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[SecurityPolicyConnection](../schemas/Security/SecurityPolicyConnection.md)

## Security

- **Authorization**
