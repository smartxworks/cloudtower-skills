# POST /get-snmp-trap-receivers-connection

**Resource:** [SnmpTrapReceiver](../resources/SnmpTrapReceiver.md)
**Operation ID:** `GetSnmpTrapReceiversConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSnmpTrapReceiversConnectionRequestBody](../schemas/Get/GetSnmpTrapReceiversConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[SnmpTrapReceiverConnection](../schemas/Snmp/SnmpTrapReceiverConnection.md)

## Security

- **Authorization**
