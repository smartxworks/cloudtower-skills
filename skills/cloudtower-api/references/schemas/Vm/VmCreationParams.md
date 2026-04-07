# VmCreationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `owner` | [VmOwnerParams](VmOwnerParams.md) | No |  |
| `gpu_devices` | VmGpuOperationParams[] | No |  |
| `max_bandwidth_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_bandwidth_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_iops_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_iops` | integer (int64) | No |  |
| `io_policy` | [VmDiskIoPolicy](VmDiskIoPolicy.md) | No |  |
| `vcpu` | integer (int32) | No |  |
| `status` | [VmStatus](VmStatus.md) | Yes |  |
| `firmware` | [VmFirmware](VmFirmware.md) | Yes |  |
| `ha_priority` | [VmHaPriority](VmHaPriority.md) | No |  |
| `ha` | boolean | Yes |  |
| `pci_nics` | [NicWhereInput](NicWhereInput.md) | No |  |
| `vm_placement_group` | [VmPlacementGroupWhereInput](VmPlacementGroupWhereInput.md) | No |  |
| `vm_nics` | VmNicParams[] | Yes |  |
| `vm_disks` | [VmDiskParams](VmDiskParams.md) | Yes |  |
| `memory_unit` | [ByteUnit](ByteUnit.md) | No |  |
| `memory` | integer (int64) | Yes |  |
| `cpu_cores` | integer (int32) | Yes |  |
| `cpu_sockets` | integer (int32) | Yes |  |
| `guest_os_type` | [VmGuestsOperationSystem](VmGuestsOperationSystem.md) | No |  |
| `folder_id` | string | No |  |
| `description` | string | No |  |
| `name` | string | Yes |  |
| `host_id` | string | No |  |
| `cluster_id` | string | Yes |  |

