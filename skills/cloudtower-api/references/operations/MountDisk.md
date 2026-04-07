# POST /mount-disk

**Resource:** [Disk](../resources/Disk.md)
**Operation ID:** `MountDisk`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [DiskMountParams](../schemas/Disk/DiskMountParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_Disk_](../schemas/With/WithTask-Disk.md)

## Security

- **Authorization**
