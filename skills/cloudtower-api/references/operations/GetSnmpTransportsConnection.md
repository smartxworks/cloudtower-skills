# POST /get-snmp-transports-connection

**Resource:** [SnmpTransport](../resources/SnmpTransport.md)
**Operation ID:** `GetSnmpTransportsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSnmpTransportsConnectionRequestBody](../schemas/Get/GetSnmpTransportsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[SnmpTransportConnection](../schemas/Snmp/SnmpTransportConnection.md)

## Security

- **Authorization**
