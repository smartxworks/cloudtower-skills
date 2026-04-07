# SnmpTrapReceiverCreationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `disabled` | boolean | No |  |
| `inform` | boolean | No |  |
| `engine_id` | string | No |  |
| `privacy_protocol` | [SnmpPrivacyProtocol](SnmpPrivacyProtocol.md) | No |  |
| `privacy_pass_phrase` | string | No |  |
| `auth_protocol` | [SnmpAuthProtocol](SnmpAuthProtocol.md) | No |  |
| `auth_pass_phrase` | string | No |  |
| `username` | string | No |  |
| `community` | string | No |  |
| `language_code` | [SnmpLanguageCode](SnmpLanguageCode.md) | Yes |  |
| `port` | integer (int32) | Yes |  |
| `host` | string | Yes |  |
| `protocol` | [SnmpProtocol](SnmpProtocol.md) | Yes |  |
| `version` | [SnmpVersion](SnmpVersion.md) | Yes |  |
| `name` | string | Yes |  |
| `cluster_id` | string | Yes |  |

