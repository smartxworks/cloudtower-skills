# POST /get-backup-target-executions-connection

**Resource:** [BackupTargetExecution](../resources/BackupTargetExecution.md)
**Operation ID:** `GetBackupTargetExecutionsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupTargetExecutionsConnectionRequestBody](../schemas/Get/GetBackupTargetExecutionsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[BackupTargetExecutionConnection](../schemas/Backup/BackupTargetExecutionConnection.md)

## Security

- **Authorization**
