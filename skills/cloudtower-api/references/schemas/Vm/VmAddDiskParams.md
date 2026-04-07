# VmAddDiskParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [VmWhereInput](VmWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `max_bandwidth_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_bandwidth_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_iops_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_iops` | integer (int64) | No |  |
| `io_policy` | [VmDiskIoPolicy](VmDiskIoPolicy.md) | No |  |
| `vm_disks` | object | Yes |  |

#### `data.vm_disks`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mount_disks` | MountDisksParams[] | No |  |
| `mount_new_create_disks` | MountNewCreateDisksParams[] | No |  |

