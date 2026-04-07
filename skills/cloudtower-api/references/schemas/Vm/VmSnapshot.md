# VmSnapshot

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `clock_offset` | [VmClockOffset](VmClockOffset.md) | Yes |  |
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `consistent_type` | [ConsistentType](ConsistentType.md) | Yes |  |
| `cpu` | [NestedCpu](NestedCpu.md) | Yes |  |
| `cpu_model` | string | Yes |  |
| `description` | string | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `firmware` | [VmFirmware](VmFirmware.md) | Yes |  |
| `ha` | boolean | Yes |  |
| `ha_priority` | any | No |  |
| `id` | string | Yes |  |
| `io_policy` | any | No |  |
| `labels` | NestedLabel[] | No |  |
| `local_created_at` | string | No |  |
| `local_id` | string | Yes |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_bandwidth_policy` | any | No |  |
| `max_iops` | integer (int32) | No |  |
| `max_iops_policy` | any | No |  |
| `memory` | integer (int64) | Yes |  |
| `name` | string | Yes |  |
| `size` | integer (int64) | Yes |  |
| `snapshot_group` | any | No |  |
| `vcpu` | integer (int32) | Yes |  |
| `vm` | any | No |  |
| `vm_disks` | NestedFrozenDisks[] | No |  |
| `vm_nics` | NestedFrozenNic[] | No |  |
| `win_opt` | boolean | Yes |  |

