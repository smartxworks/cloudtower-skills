# POST /get-security-policies

**Resource:** [SecurityPolicy](../resources/SecurityPolicy.md)
**Operation ID:** `GetSecurityPolicies`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSecurityPoliciesRequestBody](../schemas/Get/GetSecurityPoliciesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [SecurityPolicy](../schemas/Security/SecurityPolicy.md)

## Security

- **Authorization**
