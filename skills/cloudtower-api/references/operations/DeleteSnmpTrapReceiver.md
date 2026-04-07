# POST /delete-snmp-trap-receiver

**Resource:** [SnmpTrapReceiver](../resources/SnmpTrapReceiver.md)
**Operation ID:** `DeleteSnmpTrapReceiver`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [SnmpTrapReceiverDeletionParams](../schemas/Snmp/SnmpTrapReceiverDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteSnmpTrapReceiver_](../schemas/With/WithTask-DeleteSnmpTrapReceiver.md)

## Security

- **Authorization**
