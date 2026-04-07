# POST /update-isolation-policy

**Resource:** [IsolationPolicy](../resources/IsolationPolicy.md)
**Operation ID:** `UpdateIsolationPolicy`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [IsolationPolicyUpdateBody](../schemas/Isolation/IsolationPolicyUpdateBody.md)

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
