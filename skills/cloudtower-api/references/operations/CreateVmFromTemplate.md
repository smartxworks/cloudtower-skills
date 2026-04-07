# POST /create-vm-from-template

**Resource:** [Vm](../resources/Vm.md)
**Operation ID:** `CreateVmFromTemplate`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [VmCreateVmFromTemplateParams](../schemas/Vm/VmCreateVmFromTemplateParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_Vm_](../schemas/With/WithTask-Vm.md)

## Security

- **Authorization**
