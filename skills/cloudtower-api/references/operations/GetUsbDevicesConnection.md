# POST /get-usb-devices-connection

**Resource:** [UsbDevice](../resources/UsbDevice.md)
**Operation ID:** `GetUsbDevicesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetUsbDevicesConnectionRequestBody](../schemas/Get/GetUsbDevicesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[UsbDeviceConnection](../schemas/Usb/UsbDeviceConnection.md)

## Security

- **Authorization**
