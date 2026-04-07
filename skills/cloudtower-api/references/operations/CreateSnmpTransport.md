# POST /create-snmp-transport

**Resource:** [SnmpTransport](../resources/SnmpTransport.md)
**Operation ID:** `CreateSnmpTransport`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [SnmpTransportCreationParams](../schemas/Snmp/SnmpTransportCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_SnmpTransport_](../schemas/With/WithTask-SnmpTransport.md)

## Security

- **Authorization**
