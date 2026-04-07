# POST /get-iscsi-connections-connection

**Resource:** [IscsiConnection](../resources/IscsiConnection.md)
**Operation ID:** `GetIscsiConnectionsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetIscsiConnectionsConnectionRequestBody](../schemas/Get/GetIscsiConnectionsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[IscsiConnectionConnection](../schemas/Iscsi/IscsiConnectionConnection.md)

## Security

- **Authorization**
