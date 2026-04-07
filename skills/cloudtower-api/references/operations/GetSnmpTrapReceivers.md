# POST /get-snmp-trap-receivers

**Resource:** [SnmpTrapReceiver](../resources/SnmpTrapReceiver.md)
**Operation ID:** `GetSnmpTrapReceivers`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSnmpTrapReceiversRequestBody](../schemas/Get/GetSnmpTrapReceiversRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [SnmpTrapReceiver](../schemas/Snmp/SnmpTrapReceiver.md)

## Security

- **Authorization**
