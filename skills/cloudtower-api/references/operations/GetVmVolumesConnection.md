# POST /get-vm-volumes-connection

**Resource:** [VmVolume](../resources/VmVolume.md)
**Operation ID:** `GetVmVolumesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmVolumesConnectionRequestBody](../schemas/Get/GetVmVolumesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmVolumeConnection](../schemas/Vm/VmVolumeConnection.md)

## Security

- **Authorization**
