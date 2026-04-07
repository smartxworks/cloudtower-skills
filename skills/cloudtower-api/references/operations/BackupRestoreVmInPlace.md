# POST /backup-restore-vm-in-place

**Resource:** [BackupPlan](../resources/BackupPlan.md)
**Operation ID:** `BackupRestoreVmInPlace`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [BackupRestorePointRestoreInPlaceParams](../schemas/Backup/BackupRestorePointRestoreInPlaceParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_BackupRestoreExecution_](../schemas/With/WithTask-BackupRestoreExecution.md)

## Security

- **Authorization**
