# POST /get-gpu-devices

**Resource:** [GpuDevice](../resources/GpuDevice.md)
**Operation ID:** `GetGpuDevices`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetGpuDevicesRequestBody](../schemas/Get/GetGpuDevicesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [GpuDevice](../schemas/Gpu/GpuDevice.md)

## Security

- **Authorization**
