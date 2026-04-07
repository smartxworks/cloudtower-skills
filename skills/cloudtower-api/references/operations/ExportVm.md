# POST /export-vm

**Resource:** [Vm](../resources/Vm.md)
**Operation ID:** `ExportVm`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VmExportParams](../schemas/Vm/VmExportParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 304 | Not modified |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VmExportFile_](../schemas/With/WithTask-VmExportFile.md)

## Security

- **Authorization**
