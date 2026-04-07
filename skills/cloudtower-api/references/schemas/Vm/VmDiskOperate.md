# VmDiskOperate

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `remove_disks` | object | No |  |
| `modify_disks` | DiskOperateModifyDisk[] | No |  |
| `new_disks` | [VmDiskParams](VmDiskParams.md) | No |  |

## Nested Fields

### `remove_disks`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `disk_index` | integer[] | Yes |  |

