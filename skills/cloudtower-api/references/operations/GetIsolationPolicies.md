# POST /get-isolation-policies

**Resource:** [IsolationPolicy](../resources/IsolationPolicy.md)
**Operation ID:** `GetIsolationPolicies`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetIsolationPoliciesRequestBody](../schemas/Get/GetIsolationPoliciesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [IsolationPolicy](../schemas/Isolation/IsolationPolicy.md)

## Security

- **Authorization**
