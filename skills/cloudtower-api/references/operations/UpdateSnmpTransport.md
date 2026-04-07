# POST /update-snmp-transport

**Resource:** [SnmpTransport](../resources/SnmpTransport.md)
**Operation ID:** `UpdateSnmpTransport`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [SnmpTransportUpdationParams](../schemas/Snmp/SnmpTransportUpdationParams.md)

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
