# POST /update-nfs-inode

**Resource:** [NfsInode](../resources/NfsInode.md)
**Operation ID:** `UpdateNfsInode`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [NfsInodeUpdationParams](../schemas/Nfs/NfsInodeUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_NfsInode_](../schemas/With/WithTask-NfsInode.md)

## Security

- **Authorization**
