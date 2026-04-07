# POST /get-vm-nics

**Resource:** [VmNic](../resources/VmNic.md)
**Operation ID:** `GetVmNics`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmNicsRequestBody](../schemas/Get/GetVmNicsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VmNic](../schemas/Vm/VmNic.md)

## Security

- **Authorization**
