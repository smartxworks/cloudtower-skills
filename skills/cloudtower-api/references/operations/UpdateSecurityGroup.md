# POST /update-security-group

**Resource:** [SecurityGroup](../resources/SecurityGroup.md)
**Operation ID:** `UpdateSecurityGroup`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [SecurityGroupUpdateBody](../schemas/Security/SecurityGroupUpdateBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_SecurityGroup_](../schemas/With/WithTask-SecurityGroup.md)

## Security

- **Authorization**
