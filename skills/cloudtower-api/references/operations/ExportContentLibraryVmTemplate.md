# POST /export-content-library-vm-template

**Resource:** [ContentLibraryVmTemplate](../resources/ContentLibraryVmTemplate.md)
**Operation ID:** `ExportContentLibraryVmTemplate`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ContentLibraryVmTemplateExportParams](../schemas/Content/ContentLibraryVmTemplateExportParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VmExportFile_](../schemas/With/WithTask-VmExportFile.md)

## Security

- **Authorization**
