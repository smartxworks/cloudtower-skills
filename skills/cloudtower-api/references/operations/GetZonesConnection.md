# POST /get-zones-connection

**Resource:** [Zone](../resources/Zone.md)
**Operation ID:** `GetZonesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetZonesConnectionRequestBody](../schemas/Get/GetZonesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ZoneConnection](../schemas/Zone/ZoneConnection.md)

## Security

- **Authorization**
