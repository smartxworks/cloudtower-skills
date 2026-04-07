# VmDisk

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `boot` | integer (int32) | Yes |  |
| `bus` | [Bus](Bus.md) | Yes |  |
| `cloud_init_image_name` | string | No |  |
| `cloud_init_image_path` | string | No |  |
| `device` | string | No |  |
| `disabled` | boolean | No |  |
| `elf_image` | any | No |  |
| `id` | string | Yes |  |
| `key` | integer (int32) | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_bandwidth_policy` | any | No |  |
| `max_iops` | integer (int32) | No |  |
| `max_iops_policy` | any | No |  |
| `serial` | string | No |  |
| `svt_image` | any | No |  |
| `type` | [VmDiskType](VmDiskType.md) | Yes |  |
| `unsafe_image_path` | string | No |  |
| `unsafe_image_uuid` | string | No |  |
| `unsafe_provision` | string | No |  |
| `vm` | [NestedVm](NestedVm.md) | Yes |  |
| `vm_volume` | any | No |  |

