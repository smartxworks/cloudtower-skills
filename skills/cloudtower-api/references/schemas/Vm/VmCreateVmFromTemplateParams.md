# VmCreateVmFromTemplateParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `owner` | [VmOwnerParams](VmOwnerParams.md) | No |  |
| `gpu_devices` | VmGpuOperationParams[] | No |  |
| `cloud_init` | [TemplateCloudInit](TemplateCloudInit.md) | No |  |
| `is_full_copy` | boolean | Yes |  |
| `template_id` | string | Yes |  |
| `max_bandwidth_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_bandwidth_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_iops_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_iops` | integer (int64) | No |  |
| `io_policy` | [VmDiskIoPolicy](VmDiskIoPolicy.md) | No |  |
| `vcpu` | integer (int32) | No |  |
| `status` | [VmStatus](VmStatus.md) | No |  |
| `firmware` | [VmFirmware](VmFirmware.md) | No |  |
| `ha_priority` | [VmHaPriority](VmHaPriority.md) | No |  |
| `ha` | boolean | No |  |
| `pci_nics` | [NicWhereInput](NicWhereInput.md) | No |  |
| `vm_placement_group` | [VmPlacementGroupWhereInput](VmPlacementGroupWhereInput.md) | No |  |
| `vm_nics` | VmNicParams[] | No |  |
| `disk_operate` | [VmDiskOperate](VmDiskOperate.md) | No |  |
| `memory_unit` | [ByteUnit](ByteUnit.md) | No |  |
| `memory` | integer (int64) | No |  |
| `cpu_cores` | integer (int32) | No |  |
| `cpu_sockets` | integer (int32) | No |  |
| `guest_os_type` | [VmGuestsOperationSystem](VmGuestsOperationSystem.md) | No |  |
| `folder_id` | string | No |  |
| `description` | string | No |  |
| `name` | string | Yes |  |
| `host_id` | string | No |  |
| `cluster_id` | string | No |  |

