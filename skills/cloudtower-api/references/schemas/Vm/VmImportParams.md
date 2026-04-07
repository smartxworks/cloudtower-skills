# VmImportParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `max_bandwidth_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_bandwidth_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_iops_policy` | [VmDiskIoRestrictType](VmDiskIoRestrictType.md) | No |  |
| `max_iops` | integer (int64) | No |  |
| `io_policy` | [VmDiskIoPolicy](VmDiskIoPolicy.md) | No |  |
| `vcpu` | integer (int32) | No |  |
| `status` | [VmStatus](VmStatus.md) | No |  |
| `ha` | boolean | No |  |
| `vm_nics` | VmImportNicParams[] | No |  |
| `disk_operate` | [OvfDiskOperate](OvfDiskOperate.md) | No |  |
| `memory_unit` | [ByteUnit](ByteUnit.md) | No |  |
| `memory` | integer (int64) | No |  |
| `cpu_cores` | integer (int32) | No |  |
| `cpu_sockets` | integer (int32) | No |  |
| `guest_os_type` | [VmGuestsOperationSystem](VmGuestsOperationSystem.md) | No |  |
| `folder_id` | string | No |  |
| `description` | string | No |  |
| `name` | string | Yes |  |
| `host_id` | string | No |  |
| `cluster_id` | string | Yes |  |
| `upload_tasks` | string[] | Yes |  |
| `owner_id` | string | No |  |
| `parsed_ovf` | [ParsedOVF](ParsedOVF.md) | Yes |  |

