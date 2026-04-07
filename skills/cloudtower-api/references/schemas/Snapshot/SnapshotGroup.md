# SnapshotGroup

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `deleted` | boolean | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `estimated_recycling_time` | string | No |  |
| `id` | string | Yes |  |
| `internal` | boolean | No |  |
| `keep` | boolean | Yes |  |
| `local_created_at` | string | Yes |  |
| `local_id` | string | Yes |  |
| `logical_size_bytes` | integer (int64) | Yes |  |
| `name` | string | Yes |  |
| `object_num` | integer (int32) | Yes |  |
| `snapshotPlanTask` | [NestedSnapshotPlanTask](NestedSnapshotPlanTask.md) | Yes |  |
| `vm_info` | NestedSnapshotGroupVmInfo[] | Yes |  |
| `vm_snapshots` | NestedVmSnapshot[] | No |  |

