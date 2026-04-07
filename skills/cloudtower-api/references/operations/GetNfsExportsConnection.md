# POST /get-nfs-exports-connection

**Resource:** [NfsExport](../resources/NfsExport.md)
**Operation ID:** `GetNfsExportsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNfsExportsConnectionRequestBody](../schemas/Get/GetNfsExportsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[NfsExportConnection](../schemas/Nfs/NfsExportConnection.md)

## Security

- **Authorization**
