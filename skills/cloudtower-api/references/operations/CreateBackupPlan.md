# POST /create-backup-plan

**Resource:** [BackupPlan](../resources/BackupPlan.md)
**Operation ID:** `CreateBackupPlan`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [BackupPlanCreationParams](../schemas/Backup/BackupPlanCreationParams.md)

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
