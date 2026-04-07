# POST /get-elf-images-connection

**Resource:** [ElfImage](../resources/ElfImage.md)
**Operation ID:** `GetElfImagesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetElfImagesConnectionRequestBody](../schemas/Get/GetElfImagesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ElfImageConnection](../schemas/Elf/ElfImageConnection.md)

## Security

- **Authorization**
