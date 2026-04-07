# POST /mount-usb-device

**Resource:** [UsbDevice](../resources/UsbDevice.md)
**Operation ID:** `MountUsbDevice`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [UsbDeviceMountParams](../schemas/Usb/UsbDeviceMountParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_UsbDevice_](../schemas/With/WithTask-UsbDevice.md)

## Security

- **Authorization**
