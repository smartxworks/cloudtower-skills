# VmVolume

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `description` | string | No |  |
| `elf_storage_policy` | [VmVolumeElfStoragePolicyType](VmVolumeElfStoragePolicyType.md) | Yes |  |
| `elf_storage_policy_ec_k` | integer (int32) | No |  |
| `elf_storage_policy_ec_m` | integer (int32) | No |  |
| `elf_storage_policy_replica_num` | integer (int32) | No |  |
| `elf_storage_policy_stripe_num` | integer (int32) | No |  |
| `elf_storage_policy_thin_provision` | boolean | No |  |
| `entityAsyncStatus` | any | No |  |
| `guest_size_usage` | number (double) | No |  |
| `guest_used_size` | integer (int64) | No |  |
| `id` | string | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `local_created_at` | string | Yes |  |
| `local_id` | string | Yes |  |
| `lun` | any | No |  |
| `mounting` | boolean | Yes |  |
| `name` | string | Yes |  |
| `path` | string | Yes |  |
| `resident_in_cache` | boolean | No |  |
| `sharing` | boolean | Yes |  |
| `size` | integer (int64) | Yes |  |
| `type` | any | No |  |
| `unique_logical_size` | number (double) | No |  |
| `unique_size` | integer (int64) | No |  |
| `used_size` | integer (int64) | No |  |
| `used_size_usage` | number (double) | No |  |
| `vm_disks` | NestedVmDisk[] | No |  |

