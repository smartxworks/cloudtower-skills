# POST /get-brick-topoes-connection

**Resource:** [BrickTopo](../resources/BrickTopo.md)
**Operation ID:** `GetBrickTopoesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBrickTopoesConnectionRequestBody](../schemas/Get/GetBrickTopoesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[BrickTopoConnection](../schemas/Brick/BrickTopoConnection.md)

## Security

- **Authorization**
