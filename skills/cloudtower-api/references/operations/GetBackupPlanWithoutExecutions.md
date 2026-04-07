# POST /get-backup-plans-without-executions

**Resource:** [BackupPlan](../resources/BackupPlan.md)
**Operation ID:** `GetBackupPlanWithoutExecutions`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupPlansRequestBody](../schemas/Get/GetBackupPlansRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [BackupPlan](../schemas/Backup/BackupPlan.md)

## Security

- **Authorization**
