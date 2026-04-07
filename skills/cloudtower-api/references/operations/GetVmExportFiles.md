# POST /get-vm-export-files

**Resource:** [VmExportFile](../resources/VmExportFile.md)
**Operation ID:** `GetVmExportFiles`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmExportFilesRequestBody](../schemas/Get/GetVmExportFilesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VmExportFile](../schemas/Vm/VmExportFile.md)

## Security

- **Authorization**
