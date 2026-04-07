# NestedContentLibraryVmTemplateDisk

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `boot` | integer (int32) | Yes |  |
| `bus` | [Bus](Bus.md) | Yes |  |
| `content_library_image_id` | string | No |  |
| `disabled` | boolean | No |  |
| `disk_name` | string | No |  |
| `elf_storage_policy_ec_k` | integer (int32) | No |  |
| `elf_storage_policy_ec_m` | integer (int32) | No |  |
| `elf_storage_policy_replica_num` | integer (int32) | No |  |
| `elf_storage_policy_thin_provision` | boolean | No |  |
| `index` | integer (int32) | Yes |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_bandwidth_policy` | any | No |  |
| `max_iops` | integer (int32) | No |  |
| `max_iops_policy` | any | No |  |
| `path` | string | No |  |
| `resident_in_cache` | boolean | No |  |
| `size` | integer (int64) | No |  |
| `storage_encrypted` | boolean | No |  |
| `storage_policy` | any | No |  |
| `type` | [VmDiskType](VmDiskType.md) | Yes |  |

