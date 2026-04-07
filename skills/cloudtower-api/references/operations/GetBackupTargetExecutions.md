# POST /get-backup-target-executions

**Resource:** [BackupTargetExecution](../resources/BackupTargetExecution.md)
**Operation ID:** `GetBackupTargetExecutions`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupTargetExecutionsRequestBody](../schemas/Get/GetBackupTargetExecutionsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [BackupTargetExecution](../schemas/Backup/BackupTargetExecution.md)

## Security

- **Authorization**
