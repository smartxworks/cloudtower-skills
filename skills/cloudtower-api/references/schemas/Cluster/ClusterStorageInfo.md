# ClusterStorageInfo

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `allocable_storage_capacity` | [AllocatableStorageCapacity](AllocatableStorageCapacity.md) | No |  |
| `free_data_space` | integer (int64) | No |  |
| `failure_data_space` | integer (int64) | No |  |
| `used_data_space` | integer (int64) | No |  |
| `total_data_capacity` | integer (int64) | No |  |
| `storage_cluster` | ClusterStorageInfo[] | No |  |
| `stretch` | boolean | No |  |
| `type` | [ClusterType](ClusterType.md) | Yes |  |
| `name` | string | Yes |  |
| `id` | string | Yes |  |

