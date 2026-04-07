# SnmpTransport

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auth_pass_phrase` | string | No |  |
| `auth_protocol` | any | No |  |
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `community` | string | No |  |
| `disabled` | boolean | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `port` | integer (int32) | Yes |  |
| `privacy_pass_phrase` | string | No |  |
| `privacy_protocol` | any | No |  |
| `protocol` | [SnmpProtocol](SnmpProtocol.md) | Yes |  |
| `username` | string | No |  |
| `version` | [SnmpVersion](SnmpVersion.md) | Yes |  |

