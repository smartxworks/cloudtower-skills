# POST /delete-security-policy

**Resource:** [SecurityPolicy](../resources/SecurityPolicy.md)
**Operation ID:** `DeleteSecurityPolicy`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [SecurityPolicyDeleteParams](../schemas/Security/SecurityPolicyDeleteParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteSecurityPolicy_](../schemas/With/WithTask-DeleteSecurityPolicy.md)

## Security

- **Authorization**
