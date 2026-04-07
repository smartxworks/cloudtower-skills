# POST /get-nfs-inodes

**Resource:** [NfsInode](../resources/NfsInode.md)
**Operation ID:** `GetNfsInodes`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNfsInodesRequestBody](../schemas/Get/GetNfsInodesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [NfsInode](../schemas/Nfs/NfsInode.md)

## Security

- **Authorization**
