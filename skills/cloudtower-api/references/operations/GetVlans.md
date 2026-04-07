# POST /get-vlans

**Resource:** [Vlan](../resources/Vlan.md)
**Operation ID:** `GetVlans`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVlansRequestBody](../schemas/Get/GetVlansRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [Vlan](../schemas/Vlan/Vlan.md)

## Security

- **Authorization**
