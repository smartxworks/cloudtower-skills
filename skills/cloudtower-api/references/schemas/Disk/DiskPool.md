# DiskPool

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `chunk_id` | integer (int32) | Yes |  |
| `chunk_ins_id` | integer (int32) | Yes |  |
| `data_space_usage` | number (double) | Yes |  |
| `dirty_cache_space` | integer (int64) | Yes |  |
| `dirty_cache_usage` | number (double) | Yes |  |
| `disks` | NestedDisk[] | No |  |
| `failure_cache_space` | integer (int64) | Yes |  |
| `failure_data_space` | integer (int64) | Yes |  |
| `hdd_disk_count` | integer (int32) | Yes |  |
| `host` | [NestedHost](NestedHost.md) | Yes |  |
| `id` | string | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `local_id` | string | Yes |  |
| `numa_node` | string | Yes |  |
| `nvme_ssd_disk_count` | integer (int32) | Yes |  |
| `perf_allocated_data_space` | integer (int64) | Yes |  |
| `perf_failure_data_space` | integer (int64) | Yes |  |
| `perf_total_data_capacity` | integer (int64) | Yes |  |
| `perf_used_data_space` | integer (int64) | Yes |  |
| `perf_valid_data_space` | integer (int64) | Yes |  |
| `planned_prioritized_space` | integer (int64) | Yes |  |
| `prio_space_percentage` | number (double) | No |  |
| `sata_or_sas_ssd_disk_count` | integer (int32) | Yes |  |
| `status` | [DiskPoolStatus](DiskPoolStatus.md) | Yes |  |
| `total_cache_capacity` | integer (int64) | Yes |  |
| `total_data_capacity` | integer (int64) | Yes |  |
| `use_state` | [DiskPoolUseState](DiskPoolUseState.md) | Yes |  |
| `used_cache_space` | integer (int64) | Yes |  |
| `used_data_space` | integer (int64) | Yes |  |
| `valid_cache_space` | integer (int64) | Yes |  |
| `valid_free_cache_space` | integer (int64) | Yes |  |

