# POST /upload-elf-image

**Resource:** [ElfImage](../resources/ElfImage.md)
**Operation ID:** `CreateElfImage`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `multipart/form-data`

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [UploadTask](../schemas/Upload/UploadTask.md)

## Security

- **Authorization**
