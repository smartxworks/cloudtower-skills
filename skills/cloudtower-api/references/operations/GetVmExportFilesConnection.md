# POST /get-vm-export-files-connection

**Resource:** [VmExportFile](../resources/VmExportFile.md)
**Operation ID:** `GetVmExportFilesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmExportFilesConnectionRequestBody](../schemas/Get/GetVmExportFilesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmExportFileConnection](../schemas/Vm/VmExportFileConnection.md)

## Security

- **Authorization**
