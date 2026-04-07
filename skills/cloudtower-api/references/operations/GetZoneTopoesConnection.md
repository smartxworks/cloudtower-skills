# POST /get-zone-topoes-connection

**Resource:** [ZoneTopo](../resources/ZoneTopo.md)
**Operation ID:** `GetZoneTopoesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetZoneTopoesConnectionRequestBody](../schemas/Get/GetZoneTopoesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ZoneTopoConnection](../schemas/Zone/ZoneTopoConnection.md)

## Security

- **Authorization**
