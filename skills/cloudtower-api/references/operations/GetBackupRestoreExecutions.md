# POST /get-backup-restore-executions

**Resource:** [BackupRestoreExecution](../resources/BackupRestoreExecution.md)
**Operation ID:** `GetBackupRestoreExecutions`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupRestoreExecutionsRequestBody](../schemas/Get/GetBackupRestoreExecutionsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [BackupRestoreExecution](../schemas/Backup/BackupRestoreExecution.md)

## Security

- **Authorization**
