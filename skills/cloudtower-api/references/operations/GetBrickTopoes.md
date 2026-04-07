# POST /get-brick-topoes

**Resource:** [BrickTopo](../resources/BrickTopo.md)
**Operation ID:** `GetBrickTopoes`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBrickTopoesRequestBody](../schemas/Get/GetBrickTopoesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [BrickTopo](../schemas/Brick/BrickTopo.md)

## Security

- **Authorization**
