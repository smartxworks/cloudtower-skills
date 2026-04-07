# MountDisksParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `max_bandwidth_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_bandwidth_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_iops_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_iops` | integer (int64) | No |  |
| `vm_volume_id` | string | Yes |  |
| `index` | integer (int32) | No |  |
| `key` | integer (int32) | No |  |
| `bus` | [Bus](Bus.md) | Yes |  |
| `boot` | integer (int32) | Yes |  |

