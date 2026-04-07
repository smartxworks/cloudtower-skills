# POST /get-vm-templates

**Resource:** [VmTemplate](../resources/VmTemplate.md)
**Operation ID:** `GetVmTemplates`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmTemplatesRequestBody](../schemas/Get/GetVmTemplatesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VmTemplate](../schemas/Vm/VmTemplate.md)

## Security

- **Authorization**
