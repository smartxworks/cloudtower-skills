# ImportVmVolumeParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `upload_task_id` | string | Yes |  |
| `name` | string | Yes |  |
| `elf_ec_storage_policy` | object | No |  |
| `elf_replica_storage_policy` | [VmVolumeElfStoragePolicyType](VmVolumeElfStoragePolicyType.md) | No |  |
| `storage_policy` | [VmVolumeElfStoragePolicyType](VmVolumeElfStoragePolicyType.md) | No |  |
| `cluster_id` | string | Yes |  |

## Nested Fields

### `elf_ec_storage_policy`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `thin_provision` | boolean | No |  |
| `ec_m` | integer (int32) | No |  |
| `ec_k` | integer (int32) | No |  |

