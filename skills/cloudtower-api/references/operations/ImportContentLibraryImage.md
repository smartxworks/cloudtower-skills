# POST /import-content-library-image

**Resource:** [ContentLibraryImage](../resources/ContentLibraryImage.md)
**Operation ID:** `ImportContentLibraryImage`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ContentLibraryImageImportParams](../schemas/Content/ContentLibraryImageImportParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[UploadTask](../schemas/Upload/UploadTask.md)

## Security

- **Authorization**
