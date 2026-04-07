# POST /get-backup-services

**Resource:** [BackupService](../resources/BackupService.md)
**Operation ID:** `GetBackupServices`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupServicesRequestBody](../schemas/Get/GetBackupServicesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [BackupService](../schemas/Backup/BackupService.md)

## Security

- **Authorization**
