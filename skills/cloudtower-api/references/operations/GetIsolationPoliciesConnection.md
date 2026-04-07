# POST /get-isolation-policies-connection

**Resource:** [IsolationPolicy](../resources/IsolationPolicy.md)
**Operation ID:** `GetIsolationPoliciesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetIsolationPoliciesConnectionRequestBody](../schemas/Get/GetIsolationPoliciesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[IsolationPolicyConnection](../schemas/Isolation/IsolationPolicyConnection.md)

## Security

- **Authorization**
