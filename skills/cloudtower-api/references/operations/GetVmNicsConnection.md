# POST /get-vm-nics-connection

**Resource:** [VmNic](../resources/VmNic.md)
**Operation ID:** `GetVmNicsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmNicsConnectionRequestBody](../schemas/Get/GetVmNicsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmNicConnection](../schemas/Vm/VmNicConnection.md)

## Security

- **Authorization**
