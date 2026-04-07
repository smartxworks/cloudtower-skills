# POST /get-snmp-transports

**Resource:** [SnmpTransport](../resources/SnmpTransport.md)
**Operation ID:** `GetSnmpTransports`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSnmpTransportsRequestBody](../schemas/Get/GetSnmpTransportsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [SnmpTransport](../schemas/Snmp/SnmpTransport.md)

## Security

- **Authorization**
