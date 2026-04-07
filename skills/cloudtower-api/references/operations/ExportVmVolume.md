# POST /export-vm-volume

**Resource:** [VmVolume](../resources/VmVolume.md)
**Operation ID:** `ExportVmVolume`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ExportVmVolumeParams](../schemas/Export/ExportVmVolumeParams.md)

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
