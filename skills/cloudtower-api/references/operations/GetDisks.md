# POST /get-disks

**Resource:** [Disk](../resources/Disk.md)
**Operation ID:** `GetDisks`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetDisksRequestBody](../schemas/Get/GetDisksRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [Disk](../schemas/Disk/Disk.md)

## Security

- **Authorization**
