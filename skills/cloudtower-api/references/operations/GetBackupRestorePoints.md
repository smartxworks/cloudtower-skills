# POST /get-backup-restore-points

**Resource:** [BackupRestorePoint](../resources/BackupRestorePoint.md)
**Operation ID:** `GetBackupRestorePoints`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupRestorePointsRequestBody](../schemas/Get/GetBackupRestorePointsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [BackupRestorePoint](../schemas/Backup/BackupRestorePoint.md)

## Security

- **Authorization**
