# POST /update-snmp-trap-receiver

**Resource:** [SnmpTrapReceiver](../resources/SnmpTrapReceiver.md)
**Operation ID:** `UpdateSnmpTrapReceiver`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [SnmpTrapReceiverUpdationParams](../schemas/Snmp/SnmpTrapReceiverUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_SnmpTrapReceiver_](../schemas/With/WithTask-SnmpTrapReceiver.md)

## Security

- **Authorization**
