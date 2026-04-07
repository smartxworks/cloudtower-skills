# SnapshotPlanUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | No |  |
| `where` | [SnapshotPlanWhereInput](SnapshotPlanWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vm_ids` | string[] | No |  |
| `execute_intervals` | integer[] | No |  |
| `execute_plan_type` | [SnapshotPlanExecuteType](SnapshotPlanExecuteType.md) | No |  |
| `exec_h_m` | string | No |  |
| `end_time` | string | No |  |
| `remain_snapshot_num` | integer (int32) | No |  |
| `name` | string | No |  |

