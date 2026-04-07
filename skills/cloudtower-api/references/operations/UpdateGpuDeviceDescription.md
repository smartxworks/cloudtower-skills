# POST /update-gpu-device-description

**Resource:** [GpuDevice](../resources/GpuDevice.md)
**Operation ID:** `UpdateGpuDeviceDescription`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GpuDeviceDescriptionUpdationParams](../schemas/Gpu/GpuDeviceDescriptionUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 304 | Not modified |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_GpuDevice_](../schemas/With/WithTask-GpuDevice.md)

## Security

- **Authorization**
