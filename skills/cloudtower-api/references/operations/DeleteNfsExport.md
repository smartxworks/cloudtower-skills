# POST /delete-nfs-export

**Resource:** [NfsExport](../resources/NfsExport.md)
**Operation ID:** `DeleteNfsExport`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [NfsExportDeletionParams](../schemas/Nfs/NfsExportDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteNfsExport_](../schemas/With/WithTask-DeleteNfsExport.md)

## Security

- **Authorization**
