# POST /get-backup-restore-point-metadata

**Resource:** [BackupPlan](../resources/BackupPlan.md)
**Operation ID:** `GetBackupRestorePointMetadata`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupRestorePointMetadataRequestBody](../schemas/Get/GetBackupRestorePointMetadataRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmMetaData](../schemas/Vm/VmMetaData.md)

## Security

- **Authorization**
