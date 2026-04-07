# IscsiConnection

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `client_port` | integer (int32) | Yes |  |
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `host` | [NestedHost](NestedHost.md) | Yes |  |
| `id` | string | Yes |  |
| `initiator_ip` | string | Yes |  |
| `iscsi_target` | any | No |  |
| `nvmf_subsystem` | any | No |  |
| `tr_type` | any | No |  |
| `type` | [StoreConnectionType](StoreConnectionType.md) | Yes |  |

