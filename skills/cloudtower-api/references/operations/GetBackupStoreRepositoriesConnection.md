# POST /get-backup-store-repositories-connection

**Resource:** [BackupStoreRepository](../resources/BackupStoreRepository.md)
**Operation ID:** `GetBackupStoreRepositoriesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBackupStoreRepositoriesConnectionRequestBody](../schemas/Get/GetBackupStoreRepositoriesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[BackupStoreRepositoryConnection](../schemas/Backup/BackupStoreRepositoryConnection.md)

## Security

- **Authorization**
