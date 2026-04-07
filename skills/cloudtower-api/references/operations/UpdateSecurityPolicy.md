# POST /update-security-policy

**Resource:** [SecurityPolicy](../resources/SecurityPolicy.md)
**Operation ID:** `UpdateSecurityPolicy`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [SecurityPolicyUpdateBody](../schemas/Security/SecurityPolicyUpdateBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_SecurityPolicy_](../schemas/With/WithTask-SecurityPolicy.md)

## Security

- **Authorization**
