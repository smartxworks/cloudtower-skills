# VmVolumeSnapshot

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `createAt` | string | No |  |
| `description` | string | Yes |  |
| `elf_storage_policy` | [VmVolumeElfStoragePolicyType](VmVolumeElfStoragePolicyType.md) | Yes |  |
| `elf_storage_policy_ec_k` | integer (int32) | No |  |
| `elf_storage_policy_ec_m` | integer (int32) | No |  |
| `elf_storage_policy_replica_num` | integer (int32) | No |  |
| `elf_storage_policy_stripe_num` | integer (int32) | No |  |
| `elf_storage_policy_thin_provision` | boolean | No |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `local_created_at` | string | Yes |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `resident_in_cache` | boolean | No |  |
| `shared_size` | number (double) | No |  |
| `size` | number (double) | No |  |
| `type` | [VmVolumeSnapshotType](VmVolumeSnapshotType.md) | Yes |  |
| `unique_size` | number (double) | No |  |
| `vm_volume` | any | No |  |
| `volume_sharing` | boolean | No |  |
| `volume_size` | number (double) | No |  |
| `zbs_snapshot_uuid` | string | No |  |

