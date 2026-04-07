# POST /convert-content-library-vm-template-from-vm

**Resource:** [ContentLibraryVmTemplate](../resources/ContentLibraryVmTemplate.md)
**Operation ID:** `ConvertContentLibraryVmTemplateFromVm`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [ContentLibraryVmTemplateCreationParams](../schemas/Content/ContentLibraryVmTemplateCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_ContentLibraryVmTemplate_](../schemas/With/WithTask-ContentLibraryVmTemplate.md)

## Security

- **Authorization**
