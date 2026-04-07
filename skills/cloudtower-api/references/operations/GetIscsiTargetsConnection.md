# POST /get-iscsi-targets-connection

**Resource:** [IscsiTarget](../resources/IscsiTarget.md)
**Operation ID:** `GetIscsiTargetsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetIscsiTargetsConnectionRequestBody](../schemas/Get/GetIscsiTargetsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[IscsiTargetConnection](../schemas/Iscsi/IscsiTargetConnection.md)

## Security

- **Authorization**
