# POST /delete-content-library-image

**Resource:** [ContentLibraryImage](../resources/ContentLibraryImage.md)
**Operation ID:** `DeleteContentLibraryImage`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ContentLibraryImageDeletionParams](../schemas/Content/ContentLibraryImageDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteContentLibraryImage_](../schemas/With/WithTask-DeleteContentLibraryImage.md)

## Security

- **Authorization**
