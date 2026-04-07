# POST /get-backup-plans-connection

**Resource:** [BackupPlan](../resources/BackupPlan.md)
**Operation ID:** `GetBackupPlansConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupPlansConnectionRequestBody](../schemas/Get/GetBackupPlansConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[BackupPlanConnection](../schemas/Backup/BackupPlanConnection.md)

## Security

- **Authorization**
