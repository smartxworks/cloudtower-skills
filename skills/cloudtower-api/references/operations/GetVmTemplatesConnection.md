# POST /get-vm-templates-connection

**Resource:** [VmTemplate](../resources/VmTemplate.md)
**Operation ID:** `GetVmTemplatesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmTemplatesConnectionRequestBody](../schemas/Get/GetVmTemplatesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmTemplateConnection](../schemas/Vm/VmTemplateConnection.md)

## Security

- **Authorization**
