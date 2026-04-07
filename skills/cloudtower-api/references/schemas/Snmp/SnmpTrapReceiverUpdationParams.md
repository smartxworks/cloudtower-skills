# SnmpTrapReceiverUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [SnmpTrapReceiverWhereInput](SnmpTrapReceiverWhereInput.md) | Yes |  |

## Nested Fields

### `data`

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
| `language_code` | [SnmpLanguageCode](SnmpLanguageCode.md) | No |  |
| `port` | integer (int32) | No |  |
| `host` | string | No |  |
| `protocol` | [SnmpProtocol](SnmpProtocol.md) | No |  |
| `version` | [SnmpVersion](SnmpVersion.md) | No |  |
| `name` | string | No |  |

