# Disk

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `entityAsyncStatus` | any | No |  |
| `failure_information` | any | No |  |
| `firmware` | string | Yes |  |
| `function` | any | No |  |
| `health_status` | any | No |  |
| `healthy` | boolean | Yes |  |
| `host` | [NestedHost](NestedHost.md) | Yes |  |
| `id` | string | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `local_id` | string | Yes |  |
| `model` | string | Yes |  |
| `mounted` | boolean | Yes |  |
| `name` | string | Yes |  |
| `numa_node` | integer (int32) | No |  |
| `offline` | boolean | Yes |  |
| `partitions` | NestedPartition[] | Yes |  |
| `path` | string | Yes |  |
| `persistent_memory_type` | string | No |  |
| `physical_slot_on_brick` | integer (int32) | No |  |
| `pmem_dimms` | NestedPmemDimm[] | No |  |
| `recommended_usage` | any | No |  |
| `remaining_life_percent` | integer (int32) | No |  |
| `serial` | string | Yes |  |
| `size` | integer (int64) | Yes |  |
| `type` | [DiskType](DiskType.md) | Yes |  |
| `usage` | [DiskUsage](DiskUsage.md) | Yes |  |
| `usage_status` | any | No |  |

