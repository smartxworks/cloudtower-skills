# POST /update-elf-image

**Resource:** [ElfImage](../resources/ElfImage.md)
**Operation ID:** `UpdateElfImage`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ElfImageUpdationParams](../schemas/Elf/ElfImageUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_ElfImage_](../schemas/With/WithTask-ElfImage.md)

## Security

- **Authorization**
