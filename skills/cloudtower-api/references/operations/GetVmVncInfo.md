# POST /get-vm-vnc-info

**Resource:** [Vm](../resources/Vm.md)
**Operation ID:** `GetVmVncInfo`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmVncInfoParams](../schemas/Get/GetVmVncInfoParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmVncInfo](../schemas/Vm/VmVncInfo.md)

## Security

- **Authorization**
