# Zone

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `datacenter` | [NestedDatacenter](NestedDatacenter.md) | Yes |  |
| `failure_data_space` | integer (int64) | No |  |
| `host_num` | integer (int32) | No |  |
| `hosts` | NestedHost[] | No |  |
| `id` | string | Yes |  |
| `is_preferred` | boolean | Yes |  |
| `local_id` | string | No |  |
| `provisioned_cpu_cores` | integer (int32) | No |  |
| `provisioned_cpu_cores_for_active_vm` | integer (int32) | No |  |
| `provisioned_data_space` | integer (int64) | No |  |
| `provisioned_memory_bytes` | integer (int64) | No |  |
| `running_vm_num` | integer (int32) | No |  |
| `stopped_vm_num` | integer (int32) | No |  |
| `suspended_vm_num` | integer (int32) | No |  |
| `total_cache_capacity` | integer (int64) | No |  |
| `total_cpu_cores` | integer (int32) | No |  |
| `total_cpu_hz` | integer (int64) | No |  |
| `total_data_capacity` | integer (int64) | No |  |
| `total_memory_bytes` | integer (int64) | No |  |
| `used_data_space` | integer (int64) | No |  |
| `valid_data_space` | integer (int64) | No |  |
| `vm_num` | integer (int32) | No |  |

