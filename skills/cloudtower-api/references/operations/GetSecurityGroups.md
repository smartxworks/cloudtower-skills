# POST /get-security-groups

**Resource:** [SecurityGroup](../resources/SecurityGroup.md)
**Operation ID:** `GetSecurityGroups`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSecurityGroupsRequestBody](../schemas/Get/GetSecurityGroupsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [SecurityGroup](../schemas/Security/SecurityGroup.md)

## Security

- **Authorization**
