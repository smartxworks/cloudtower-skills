# POST /get-zone-topoes

**Resource:** [ZoneTopo](../resources/ZoneTopo.md)
**Operation ID:** `GetZoneTopoes`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetZoneTopoesRequestBody](../schemas/Get/GetZoneTopoesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ZoneTopo](../schemas/Zone/ZoneTopo.md)

## Security

- **Authorization**
