# POST /get-disk-pools-connection

**Resource:** [DiskPool](../resources/DiskPool.md)
**Operation ID:** `GetDiskPoolsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetDiskPoolsConnectionRequestBody](../schemas/Get/GetDiskPoolsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[DiskPoolConnection](../schemas/Disk/DiskPoolConnection.md)

## Security

- **Authorization**
