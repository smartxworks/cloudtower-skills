# POST /update-vm-volume

**Resource:** [VmVolume](../resources/VmVolume.md)
**Operation ID:** `UpdateVmVolume`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [UpdateVmVolumeParams](../schemas/Update/UpdateVmVolumeParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 304 | Not modified |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VmVolume_](../schemas/With/WithTask-VmVolume.md)

## Security

- **Authorization**
