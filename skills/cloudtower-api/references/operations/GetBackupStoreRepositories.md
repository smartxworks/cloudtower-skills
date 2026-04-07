# POST /get-backup-store-repositories

**Resource:** [BackupStoreRepository](../resources/BackupStoreRepository.md)
**Operation ID:** `GetBackupStoreRepositories`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupStoreRepositoriesRequestBody](../schemas/Get/GetBackupStoreRepositoriesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [BackupStoreRepository](../schemas/Backup/BackupStoreRepository.md)

## Security

- **Authorization**
