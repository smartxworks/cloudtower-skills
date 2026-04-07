# POST /delete-isolation-policy

**Resource:** [IsolationPolicy](../resources/IsolationPolicy.md)
**Operation ID:** `DeleteIsolationPolicy`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [IsolationPolicyDeleteParams](../schemas/Isolation/IsolationPolicyDeleteParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [DeleteIsolationPolicy](../schemas/Delete/DeleteIsolationPolicy.md)

## Security

- **Authorization**
