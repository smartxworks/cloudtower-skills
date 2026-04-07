# POST /get-elf-images

**Resource:** [ElfImage](../resources/ElfImage.md)
**Operation ID:** `GetElfImages`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetElfImagesRequestBody](../schemas/Get/GetElfImagesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ElfImage](../schemas/Elf/ElfImage.md)

## Security

- **Authorization**
