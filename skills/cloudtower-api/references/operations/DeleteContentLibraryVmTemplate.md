# POST /delete-content-library-vm-template

**Resource:** [ContentLibraryVmTemplate](../resources/ContentLibraryVmTemplate.md)
**Operation ID:** `DeleteContentLibraryVmTemplate`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ContentLibraryVmTemplateDeletionParams](../schemas/Content/ContentLibraryVmTemplateDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteContentLibraryVmTemplate_](../schemas/With/WithTask-DeleteContentLibraryVmTemplate.md)

## Security

- **Authorization**
