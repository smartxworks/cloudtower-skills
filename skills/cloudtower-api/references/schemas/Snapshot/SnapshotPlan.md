# SnapshotPlan

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auto_delete_num` | integer (int32) | Yes |  |
| `auto_execute_num` | integer (int32) | Yes |  |
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `description` | string | Yes |  |
| `end_time` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `exec_h_m` | object | No |  |
| `execute_intervals` | integer[] | Yes |  |
| `execute_plan_type` | [SnapshotPlanExecuteType](SnapshotPlanExecuteType.md) | Yes |  |
| `execution_tasks` | NestedSnapshotPlanTask[] | No |  |
| `healthy` | boolean | Yes |  |
| `id` | string | Yes |  |
| `last_execute_end_time` | string | No |  |
| `last_execute_status` | [SnapshotPlanExecuteStatus](SnapshotPlanExecuteStatus.md) | Yes |  |
| `last_execute_time` | string | No |  |
| `local_id` | string | Yes |  |
| `logical_size_bytes` | integer (int64) | Yes |  |
| `manual_delete_num` | integer (int32) | Yes |  |
| `manual_execute_num` | integer (int32) | Yes |  |
| `mirror` | boolean | Yes |  |
| `name` | string | Yes |  |
| `next_execute_time` | string | No |  |
| `object_num` | integer (int32) | Yes |  |
| `physical_size_bytes` | integer (int64) | Yes |  |
| `remain_snapshot_num` | integer (int32) | Yes |  |
| `snapshot_group_num` | integer (int32) | Yes |  |
| `start_time` | string | Yes |  |
| `status` | [SnapshotPlanStatus](SnapshotPlanStatus.md) | Yes |  |
| `vms` | NestedVm[] | No |  |

## Nested Fields

### `exec_h_m`

| Field | Type | Required | Description |
|-------|------|----------|-------------|

