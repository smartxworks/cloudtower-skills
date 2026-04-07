# POST /create-nfs-export

**Resource:** [NfsExport](../resources/NfsExport.md)
**Operation ID:** `CreateNfsExport`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [NfsExportCreationParams](../schemas/Nfs/NfsExportCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_NfsExport_](../schemas/With/WithTask-NfsExport.md)

## Security

- **Authorization**
