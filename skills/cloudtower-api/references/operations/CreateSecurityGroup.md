# POST /create-security-group

**Resource:** [SecurityGroup](../resources/SecurityGroup.md)
**Operation ID:** `CreateSecurityGroup`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [SecurityGroupCreateParams](../schemas/Security/SecurityGroupCreateParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[WithTask_SecurityGroup_](../schemas/With/WithTask-SecurityGroup.md)

## Security

- **Authorization**
