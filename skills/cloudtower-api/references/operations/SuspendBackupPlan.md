# POST /suspend-backup-plan

**Resource:** [BackupPlan](../resources/BackupPlan.md)
**Operation ID:** `SuspendBackupPlan`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [BackupPlanSuspendParams](../schemas/Backup/BackupPlanSuspendParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_BackupPlan_](../schemas/With/WithTask-BackupPlan.md)

## Security

- **Authorization**
