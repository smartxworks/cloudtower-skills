# POST /get-content-library-images

**Resource:** [ContentLibraryImage](../resources/ContentLibraryImage.md)
**Operation ID:** `GetContentLibraryImages`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetContentLibraryImagesRequestBody](../schemas/Get/GetContentLibraryImagesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ContentLibraryImage](../schemas/Content/ContentLibraryImage.md)

## Security

- **Authorization**
