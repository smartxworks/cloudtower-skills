# POST /get-business-host-groups-connection

**Resource:** [BusinessHostGroup](../resources/BusinessHostGroup.md)
**Operation ID:** `GetBusinessHostGroupsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBusinessHostGroupsConnectionRequestBody](../schemas/Get/GetBusinessHostGroupsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[BusinessHostGroupConnection](../schemas/Business/BusinessHostGroupConnection.md)

## Security

- **Authorization**
