# POST /get-backup-restore-executions-connection

**Resource:** [BackupRestoreExecution](../resources/BackupRestoreExecution.md)
**Operation ID:** `GetBackupRestoreExecutionsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupRestoreExecutionsConnectionRequestBody](../schemas/Get/GetBackupRestoreExecutionsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[BackupRestoreExecutionConnection](../schemas/Backup/BackupRestoreExecutionConnection.md)

## Security

- **Authorization**
