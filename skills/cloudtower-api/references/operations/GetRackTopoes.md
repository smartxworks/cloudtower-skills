# POST /get-rack-topoes

**Resource:** [RackTopo](../resources/RackTopo.md)
**Operation ID:** `GetRackTopoes`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetRackTopoesRequestBody](../schemas/Get/GetRackTopoesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [RackTopo](../schemas/Rack/RackTopo.md)

## Security

- **Authorization**
