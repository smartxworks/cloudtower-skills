# POST /get-security-groups-connection

**Resource:** [SecurityGroup](../resources/SecurityGroup.md)
**Operation ID:** `GetSecurityGroupsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSecurityGroupsConnectionRequestBody](../schemas/Get/GetSecurityGroupsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[SecurityGroupConnection](../schemas/Security/SecurityGroupConnection.md)

## Security

- **Authorization**
