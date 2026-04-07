# POST /get-nfs-inodes-connection

**Resource:** [NfsInode](../resources/NfsInode.md)
**Operation ID:** `GetNfsInodesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNfsInodesConnectionRequestBody](../schemas/Get/GetNfsInodesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[NfsInodeConnection](../schemas/Nfs/NfsInodeConnection.md)

## Security

- **Authorization**
