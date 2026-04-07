# POST /get-vm-volumes

**Resource:** [VmVolume](../resources/VmVolume.md)
**Operation ID:** `GetVmVolumes`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmVolumesRequestBody](../schemas/Get/GetVmVolumesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VmVolume](../schemas/Vm/VmVolume.md)

## Security

- **Authorization**
