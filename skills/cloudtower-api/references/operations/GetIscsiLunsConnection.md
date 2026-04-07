# POST /get-iscsi-luns-connection

**Resource:** [IscsiLun](../resources/IscsiLun.md)
**Operation ID:** `GetIscsiLunsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetIscsiLunsConnectionRequestBody](../schemas/Get/GetIscsiLunsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[IscsiLunConnection](../schemas/Iscsi/IscsiLunConnection.md)

## Security

- **Authorization**
