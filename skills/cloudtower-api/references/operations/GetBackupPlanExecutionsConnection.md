# POST /get-backup-plan-executions-connection

**Resource:** [BackupPlanExecution](../resources/BackupPlanExecution.md)
**Operation ID:** `GetBackupPlanExecutionsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupPlanExecutionsConnectionRequestBody](../schemas/Get/GetBackupPlanExecutionsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[BackupPlanExecutionConnection](../schemas/Backup/BackupPlanExecutionConnection.md)

## Security

- **Authorization**
