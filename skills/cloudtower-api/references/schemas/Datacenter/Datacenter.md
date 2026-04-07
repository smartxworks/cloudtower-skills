# Datacenter

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster_num` | integer (int32) | No |  |
| `clusters` | NestedCluster[] | No |  |
| `failure_data_space` | integer (int64) | No |  |
| `host_num` | integer (int32) | No |  |
| `id` | string | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `name` | string | Yes |  |
| `organization` | [NestedOrganization](NestedOrganization.md) | Yes |  |
| `total_cpu_hz` | integer (int64) | No |  |
| `total_data_capacity` | integer (int64) | No |  |
| `total_memory_bytes` | integer (int64) | No |  |
| `used_cpu_hz` | number (double) | No |  |
| `used_data_space` | integer (int64) | No |  |
| `used_memory_bytes` | number (double) | No |  |
| `vm_num` | integer (int32) | No |  |

