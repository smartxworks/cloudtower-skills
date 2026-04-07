# VmdkDiskModify

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `elf_ec_storage_policy` | object | No |  |
| `elf_replica_storage_policy` | [VmVolumeElfStoragePolicyType](VmVolumeElfStoragePolicyType.md) | No |  |
| `elf_storage_policy` | [VmVolumeElfStoragePolicyType](VmVolumeElfStoragePolicyType.md) | No |  |
| `bus` | [Bus](Bus.md) | No |  |
| `volume_name` | string | No |  |
| `boot` | integer (int32) | No |  |
| `vmdk_name` | string | Yes |  |

## Nested Fields

### `elf_ec_storage_policy`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `thin_provision` | boolean | No |  |
| `ec_m` | integer (int32) | No |  |
| `ec_k` | integer (int32) | No |  |

