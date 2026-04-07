# POST /get-backup-services-connection

**Resource:** [BackupService](../resources/BackupService.md)
**Operation ID:** `GetBackupServicesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupServicesConnectionRequestBody](../schemas/Get/GetBackupServicesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[BackupServiceConnection](../schemas/Backup/BackupServiceConnection.md)

## Security

- **Authorization**
