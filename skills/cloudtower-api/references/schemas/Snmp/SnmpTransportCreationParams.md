# SnmpTransportCreationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `disabled` | boolean | No |  |
| `privacy_protocol` | [SnmpPrivacyProtocol](SnmpPrivacyProtocol.md) | No |  |
| `privacy_pass_phrase` | string | No |  |
| `auth_protocol` | [SnmpAuthProtocol](SnmpAuthProtocol.md) | No |  |
| `auth_pass_phrase` | string | No |  |
| `username` | string | No |  |
| `community` | string | No |  |
| `port` | integer (int32) | Yes |  |
| `protocol` | [SnmpProtocol](SnmpProtocol.md) | Yes |  |
| `version` | [SnmpVersion](SnmpVersion.md) | Yes |  |
| `name` | string | Yes |  |
| `cluster_id` | string | Yes |  |

