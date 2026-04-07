# SnmpTransportUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [SnmpTransportWhereInput](SnmpTransportWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `disabled` | boolean | No |  |
| `privacy_protocol` | [SnmpPrivacyProtocol](SnmpPrivacyProtocol.md) | No |  |
| `privacy_pass_phrase` | string | No |  |
| `auth_protocol` | [SnmpAuthProtocol](SnmpAuthProtocol.md) | No |  |
| `auth_pass_phrase` | string | No |  |
| `username` | string | No |  |
| `community` | string | No |  |
| `port` | integer (int32) | No |  |
| `protocol` | [SnmpProtocol](SnmpProtocol.md) | No |  |
| `version` | [SnmpVersion](SnmpVersion.md) | No |  |
| `name` | string | No |  |

