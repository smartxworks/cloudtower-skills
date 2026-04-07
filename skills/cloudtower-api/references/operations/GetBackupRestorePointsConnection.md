# POST /get-backup-restore-points-connection

**Resource:** [BackupRestorePoint](../resources/BackupRestorePoint.md)
**Operation ID:** `GetBackupRestorePointsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupRestorePointsConnectionRequestBody](../schemas/Get/GetBackupRestorePointsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[BackupRestorePointConnection](../schemas/Backup/BackupRestorePointConnection.md)

## Security

- **Authorization**
