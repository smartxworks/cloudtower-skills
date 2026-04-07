# POST /get-gpu-devices-connection

**Resource:** [GpuDevice](../resources/GpuDevice.md)
**Operation ID:** `GetGpuDevicesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetGpuDevicesConnectionRequestBody](../schemas/Get/GetGpuDevicesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[GpuDeviceConnection](../schemas/Gpu/GpuDeviceConnection.md)

## Security

- **Authorization**
