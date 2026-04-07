# POST /update-vm-template

**Resource:** [VmTemplate](../resources/VmTemplate.md)
**Operation ID:** `UpdateVmTemplate`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VmTemplateUpdationParams](../schemas/Vm/VmTemplateUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VmTemplate_](../schemas/With/WithTask-VmTemplate.md)

## Security

- **Authorization**
