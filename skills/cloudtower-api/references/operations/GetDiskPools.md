# POST /get-disk-pools

**Resource:** [DiskPool](../resources/DiskPool.md)
**Operation ID:** `GetDiskPools`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetDiskPoolsRequestBody](../schemas/Get/GetDiskPoolsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [DiskPool](../schemas/Disk/DiskPool.md)

## Security

- **Authorization**
