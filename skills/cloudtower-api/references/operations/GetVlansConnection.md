# POST /get-vlans-connection

**Resource:** [Vlan](../resources/Vlan.md)
**Operation ID:** `GetVlansConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVlansConnectionRequestBody](../schemas/Get/GetVlansConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VlanConnection](../schemas/Vlan/VlanConnection.md)

## Security

- **Authorization**
