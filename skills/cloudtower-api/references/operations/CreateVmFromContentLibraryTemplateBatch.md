# POST /create-vm-from-content-library-template-batch

**Resource:** [Vm](../resources/Vm.md)
**Operation ID:** `CreateVmFromContentLibraryTemplateBatch`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VmCreateVmFromContentLibraryTemplateBatchParams](../schemas/Vm/VmCreateVmFromContentLibraryTemplateBatchParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[WithTask_Vm-Array_](../schemas/With/WithTask-Vm-Array.md)

## Security

- **Authorization**
