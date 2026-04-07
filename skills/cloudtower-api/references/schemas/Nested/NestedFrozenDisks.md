# NestedFrozenDisks

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `boot` | integer (int32) | Yes |  |
| `bus` | [Bus](Bus.md) | Yes |  |
| `disabled` | boolean | No |  |
| `disk_name` | string | No |  |
| `elf_image_local_id` | string | Yes |  |
| `image_name` | string | No |  |
| `index` | integer (int32) | Yes |  |
| `key` | integer (int32) | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_bandwidth_policy` | any | No |  |
| `max_iops` | integer (int32) | No |  |
| `max_iops_policy` | any | No |  |
| `path` | string | Yes |  |
| `resident_in_cache` | boolean | No |  |
| `size` | integer (int64) | Yes |  |
| `snapshot_local_id` | string | No |  |
| `storage_policy_uuid` | string | Yes |  |
| `svt_image_local_id` | string | Yes |  |
| `type` | [VmDiskType](VmDiskType.md) | Yes |  |
| `vm_volume_local_id` | string | Yes |  |
| `vm_volume_snapshot_uuid` | string | No |  |
| `vm_volume_template_uuid` | string | No |  |

