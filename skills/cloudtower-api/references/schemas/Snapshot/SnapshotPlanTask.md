# SnapshotPlanTask

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `end_time` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `internal` | boolean | No |  |
| `local_id` | string | Yes |  |
| `snapshotGroup` | any | No |  |
| `snapshotPlan` | [NestedSnapshotPlan](NestedSnapshotPlan.md) | Yes |  |
| `start_time` | string | Yes |  |
| `status` | [SnapshotPlanExecuteStatus](SnapshotPlanExecuteStatus.md) | Yes |  |
| `type` | [SnapshotPlanTaskType](SnapshotPlanTaskType.md) | Yes |  |

