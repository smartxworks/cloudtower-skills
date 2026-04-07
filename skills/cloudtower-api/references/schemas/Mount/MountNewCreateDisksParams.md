# MountNewCreateDisksParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `max_bandwidth_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_bandwidth_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_iops_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_iops` | integer (int64) | No |  |
| `vm_volume` | object | Yes |  |
| `index` | integer (int32) | No |  |
| `key` | integer (int32) | No |  |
| `bus` | [Bus](Bus.md) | Yes |  |
| `boot` | integer (int32) | Yes |  |

## Nested Fields

### `vm_volume`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resident_in_cache` | boolean | No |  |
| `elf_ec_storage_policy` | object | No |  |
| `elf_replica_storage_policy` | [VmVolumeElfStoragePolicyType](VmVolumeElfStoragePolicyType.md) | No |  |
| `elf_storage_policy` | [VmVolumeElfStoragePolicyType](VmVolumeElfStoragePolicyType.md) | No |  |
| `path` | string | No |  |
| `size_unit` | [ByteUnit](ByteUnit.md) | No |  |
| `size` | integer (int64) | Yes |  |
| `name` | string | Yes |  |

#### `vm_volume.elf_ec_storage_policy`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `thin_provision` | boolean | No |  |
| `ec_m` | integer (int32) | No |  |
| `ec_k` | integer (int32) | No |  |

