# BackupRestorePoint

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backup_plan` | [NestedBackupPlan](NestedBackupPlan.md) | Yes |  |
| `backup_restore_executions` | NestedBackupRestoreExecution[] | No |  |
| `backup_target_execution` | [NestedBackupTargetExecution](NestedBackupTargetExecution.md) | Yes |  |
| `cluster_local_id` | string | No |  |
| `compressed` | boolean | No |  |
| `compression_ratio` | number (double) | No |  |
| `creation` | any | No |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `local_created_at` | string | No |  |
| `local_id` | string | Yes |  |
| `logical_size` | integer (int64) | No |  |
| `parent_restore_point` | string | No |  |
| `physical_size` | integer (int64) | No |  |
| `size` | integer (int64) | No |  |
| `slice` | string | Yes |  |
| `snapshot_consistent_type` | any | No |  |
| `type` | any | No |  |
| `valid_capacity` | integer (int64) | No |  |
| `valid_size` | integer (int64) | No |  |
| `vm` | any | No |  |
| `vm_local_id` | string | No |  |
| `vm_name` | string | No |  |

