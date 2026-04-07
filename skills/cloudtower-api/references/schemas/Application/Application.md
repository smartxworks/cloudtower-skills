# Application

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `error_message` | string | No |  |
| `id` | string | Yes |  |
| `image_name` | string | No |  |
| `local_id` | string | Yes |  |
| `memory` | integer (int64) | Yes |  |
| `state` | [ApplicationState](ApplicationState.md) | Yes |  |
| `storage_ip` | string | Yes |  |
| `type` | [ApplicationType](ApplicationType.md) | Yes |  |
| `update_time` | string | No |  |
| `vcpu` | integer (int32) | Yes |  |
| `version` | string | Yes |  |
| `vm` | any | No |  |
| `volume_size` | integer (int64) | Yes |  |

