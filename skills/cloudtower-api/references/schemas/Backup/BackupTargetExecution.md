# BackupTargetExecution

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backup_group` | string | Yes |  |
| `backup_plan_execution` | any | No |  |
| `backup_restore_point` | any | No |  |
| `cluster_local_id` | string | No |  |
| `duration` | integer (int32) | No |  |
| `entityAsyncStatus` | any | No |  |
| `executed_at` | string | Yes |  |
| `id` | string | Yes |  |
| `local_id` | string | Yes |  |
| `parent_backup` | string | Yes |  |
| `read_bytes` | integer (int64) | No |  |
| `retry_times` | integer (int32) | No |  |
| `status` | any | No |  |
| `total_bytes` | integer (int64) | No |  |
| `type` | [BackupExecutionType](BackupExecutionType.md) | Yes |  |
| `vm` | any | No |  |
| `vm_local_id` | string | No |  |
| `vm_name` | string | No |  |

