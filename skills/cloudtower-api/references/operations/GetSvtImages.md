# POST /get-svt-images

**Resource:** [SvtImage](../resources/SvtImage.md)
**Operation ID:** `GetSvtImages`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSvtImagesRequestBody](../schemas/Get/GetSvtImagesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [SvtImage](../schemas/Svt/SvtImage.md)

## Security

- **Authorization**
