# POST /get-content-library-images-connection

**Resource:** [ContentLibraryImage](../resources/ContentLibraryImage.md)
**Operation ID:** `GetContentLibraryImagesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetContentLibraryImagesConnectionRequestBody](../schemas/Get/GetContentLibraryImagesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ContentLibraryImageConnection](../schemas/Content/ContentLibraryImageConnection.md)

## Security

- **Authorization**
