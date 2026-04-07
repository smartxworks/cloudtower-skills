# POST /get-vms-connection

**Resource:** [Vm](../resources/Vm.md)
**Operation ID:** `GetVmsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmsConnectionRequestBody](../schemas/Get/GetVmsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmConnection](../schemas/Vm/VmConnection.md)

## Security

- **Authorization**
