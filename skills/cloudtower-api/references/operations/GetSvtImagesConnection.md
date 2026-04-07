# POST /get-svt-images-connection

**Resource:** [SvtImage](../resources/SvtImage.md)
**Operation ID:** `GetSvtImagesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSvtImagesConnectionRequestBody](../schemas/Get/GetSvtImagesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[SvtImageConnection](../schemas/Svt/SvtImageConnection.md)

## Security

- **Authorization**
