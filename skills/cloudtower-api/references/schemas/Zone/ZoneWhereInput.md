# ZoneWhereInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AND` | ZoneWhereInput[] | No |  |
| `NOT` | ZoneWhereInput[] | No |  |
| `OR` | ZoneWhereInput[] | No |  |
| `cluster` | any | No |  |
| `datacenter` | any | No |  |
| `failure_data_space` | integer (int64) | No |  |
| `failure_data_space_gt` | integer (int64) | No |  |
| `failure_data_space_gte` | integer (int64) | No |  |
| `failure_data_space_in` | integer[] | No |  |
| `failure_data_space_lt` | integer (int64) | No |  |
| `failure_data_space_lte` | integer (int64) | No |  |
| `failure_data_space_not` | integer (int64) | No |  |
| `failure_data_space_not_in` | integer[] | No |  |
| `host_num` | integer (int32) | No |  |
| `host_num_gt` | integer (int32) | No |  |
| `host_num_gte` | integer (int32) | No |  |
| `host_num_in` | integer[] | No |  |
| `host_num_lt` | integer (int32) | No |  |
| `host_num_lte` | integer (int32) | No |  |
| `host_num_not` | integer (int32) | No |  |
| `host_num_not_in` | integer[] | No |  |
| `hosts_every` | any | No |  |
| `hosts_none` | any | No |  |
| `hosts_some` | any | No |  |
| `id` | string | No |  |
| `id_contains` | string | No |  |
| `id_ends_with` | string | No |  |
| `id_gt` | string | No |  |
| `id_gte` | string | No |  |
| `id_in` | string[] | No |  |
| `id_lt` | string | No |  |
| `id_lte` | string | No |  |
| `id_not` | string | No |  |
| `id_not_contains` | string | No |  |
| `id_not_ends_with` | string | No |  |
| `id_not_in` | string[] | No |  |
| `id_not_starts_with` | string | No |  |
| `id_starts_with` | string | No |  |
| `is_preferred` | boolean | No |  |
| `is_preferred_not` | boolean | No |  |
| `local_id` | string | No |  |
| `local_id_contains` | string | No |  |
| `local_id_ends_with` | string | No |  |
| `local_id_gt` | string | No |  |
| `local_id_gte` | string | No |  |
| `local_id_in` | string[] | No |  |
| `local_id_lt` | string | No |  |
| `local_id_lte` | string | No |  |
| `local_id_not` | string | No |  |
| `local_id_not_contains` | string | No |  |
| `local_id_not_ends_with` | string | No |  |
| `local_id_not_in` | string[] | No |  |
| `local_id_not_starts_with` | string | No |  |
| `local_id_starts_with` | string | No |  |
| `provisioned_cpu_cores` | integer (int32) | No |  |
| `provisioned_cpu_cores_for_active_vm` | integer (int32) | No |  |
| `provisioned_cpu_cores_for_active_vm_gt` | integer (int32) | No |  |
| `provisioned_cpu_cores_for_active_vm_gte` | integer (int32) | No |  |
| `provisioned_cpu_cores_for_active_vm_in` | integer[] | No |  |
| `provisioned_cpu_cores_for_active_vm_lt` | integer (int32) | No |  |
| `provisioned_cpu_cores_for_active_vm_lte` | integer (int32) | No |  |
| `provisioned_cpu_cores_for_active_vm_not` | integer (int32) | No |  |
| `provisioned_cpu_cores_for_active_vm_not_in` | integer[] | No |  |
| `provisioned_cpu_cores_gt` | integer (int32) | No |  |
| `provisioned_cpu_cores_gte` | integer (int32) | No |  |
| `provisioned_cpu_cores_in` | integer[] | No |  |
| `provisioned_cpu_cores_lt` | integer (int32) | No |  |
| `provisioned_cpu_cores_lte` | integer (int32) | No |  |
| `provisioned_cpu_cores_not` | integer (int32) | No |  |
| `provisioned_cpu_cores_not_in` | integer[] | No |  |
| `provisioned_data_space` | integer (int64) | No |  |
| `provisioned_data_space_gt` | integer (int64) | No |  |
| `provisioned_data_space_gte` | integer (int64) | No |  |
| `provisioned_data_space_in` | integer[] | No |  |
| `provisioned_data_space_lt` | integer (int64) | No |  |
| `provisioned_data_space_lte` | integer (int64) | No |  |
| `provisioned_data_space_not` | integer (int64) | No |  |
| `provisioned_data_space_not_in` | integer[] | No |  |
| `provisioned_memory_bytes` | integer (int64) | No |  |
| `provisioned_memory_bytes_gt` | integer (int64) | No |  |
| `provisioned_memory_bytes_gte` | integer (int64) | No |  |
| `provisioned_memory_bytes_in` | integer[] | No |  |
| `provisioned_memory_bytes_lt` | integer (int64) | No |  |
| `provisioned_memory_bytes_lte` | integer (int64) | No |  |
| `provisioned_memory_bytes_not` | integer (int64) | No |  |
| `provisioned_memory_bytes_not_in` | integer[] | No |  |
| `running_vm_num` | integer (int32) | No |  |
| `running_vm_num_gt` | integer (int32) | No |  |
| `running_vm_num_gte` | integer (int32) | No |  |
| `running_vm_num_in` | integer[] | No |  |
| `running_vm_num_lt` | integer (int32) | No |  |
| `running_vm_num_lte` | integer (int32) | No |  |
| `running_vm_num_not` | integer (int32) | No |  |
| `running_vm_num_not_in` | integer[] | No |  |
| `stopped_vm_num` | integer (int32) | No |  |
| `stopped_vm_num_gt` | integer (int32) | No |  |
| `stopped_vm_num_gte` | integer (int32) | No |  |
| `stopped_vm_num_in` | integer[] | No |  |
| `stopped_vm_num_lt` | integer (int32) | No |  |
| `stopped_vm_num_lte` | integer (int32) | No |  |
| `stopped_vm_num_not` | integer (int32) | No |  |
| `stopped_vm_num_not_in` | integer[] | No |  |
| `suspended_vm_num` | integer (int32) | No |  |
| `suspended_vm_num_gt` | integer (int32) | No |  |
| `suspended_vm_num_gte` | integer (int32) | No |  |
| `suspended_vm_num_in` | integer[] | No |  |
| `suspended_vm_num_lt` | integer (int32) | No |  |
| `suspended_vm_num_lte` | integer (int32) | No |  |
| `suspended_vm_num_not` | integer (int32) | No |  |
| `suspended_vm_num_not_in` | integer[] | No |  |
| `total_cache_capacity` | integer (int64) | No |  |
| `total_cache_capacity_gt` | integer (int64) | No |  |
| `total_cache_capacity_gte` | integer (int64) | No |  |
| `total_cache_capacity_in` | integer[] | No |  |
| `total_cache_capacity_lt` | integer (int64) | No |  |
| `total_cache_capacity_lte` | integer (int64) | No |  |
| `total_cache_capacity_not` | integer (int64) | No |  |
| `total_cache_capacity_not_in` | integer[] | No |  |
| `total_cpu_cores` | integer (int32) | No |  |
| `total_cpu_cores_gt` | integer (int32) | No |  |
| `total_cpu_cores_gte` | integer (int32) | No |  |
| `total_cpu_cores_in` | integer[] | No |  |
| `total_cpu_cores_lt` | integer (int32) | No |  |
| `total_cpu_cores_lte` | integer (int32) | No |  |
| `total_cpu_cores_not` | integer (int32) | No |  |
| `total_cpu_cores_not_in` | integer[] | No |  |
| `total_cpu_hz` | integer (int64) | No |  |
| `total_cpu_hz_gt` | integer (int64) | No |  |
| `total_cpu_hz_gte` | integer (int64) | No |  |
| `total_cpu_hz_in` | integer[] | No |  |
| `total_cpu_hz_lt` | integer (int64) | No |  |
| `total_cpu_hz_lte` | integer (int64) | No |  |
| `total_cpu_hz_not` | integer (int64) | No |  |
| `total_cpu_hz_not_in` | integer[] | No |  |
| `total_data_capacity` | integer (int64) | No |  |
| `total_data_capacity_gt` | integer (int64) | No |  |
| `total_data_capacity_gte` | integer (int64) | No |  |
| `total_data_capacity_in` | integer[] | No |  |
| `total_data_capacity_lt` | integer (int64) | No |  |
| `total_data_capacity_lte` | integer (int64) | No |  |
| `total_data_capacity_not` | integer (int64) | No |  |
| `total_data_capacity_not_in` | integer[] | No |  |
| `total_memory_bytes` | integer (int64) | No |  |
| `total_memory_bytes_gt` | integer (int64) | No |  |
| `total_memory_bytes_gte` | integer (int64) | No |  |
| `total_memory_bytes_in` | integer[] | No |  |
| `total_memory_bytes_lt` | integer (int64) | No |  |
| `total_memory_bytes_lte` | integer (int64) | No |  |
| `total_memory_bytes_not` | integer (int64) | No |  |
| `total_memory_bytes_not_in` | integer[] | No |  |
| `used_data_space` | integer (int64) | No |  |
| `used_data_space_gt` | integer (int64) | No |  |
| `used_data_space_gte` | integer (int64) | No |  |
| `used_data_space_in` | integer[] | No |  |
| `used_data_space_lt` | integer (int64) | No |  |
| `used_data_space_lte` | integer (int64) | No |  |
| `used_data_space_not` | integer (int64) | No |  |
| `used_data_space_not_in` | integer[] | No |  |
| `valid_data_space` | integer (int64) | No |  |
| `valid_data_space_gt` | integer (int64) | No |  |
| `valid_data_space_gte` | integer (int64) | No |  |
| `valid_data_space_in` | integer[] | No |  |
| `valid_data_space_lt` | integer (int64) | No |  |
| `valid_data_space_lte` | integer (int64) | No |  |
| `valid_data_space_not` | integer (int64) | No |  |
| `valid_data_space_not_in` | integer[] | No |  |
| `vm_num` | integer (int32) | No |  |
| `vm_num_gt` | integer (int32) | No |  |
| `vm_num_gte` | integer (int32) | No |  |
| `vm_num_in` | integer[] | No |  |
| `vm_num_lt` | integer (int32) | No |  |
| `vm_num_lte` | integer (int32) | No |  |
| `vm_num_not` | integer (int32) | No |  |
| `vm_num_not_in` | integer[] | No |  |

