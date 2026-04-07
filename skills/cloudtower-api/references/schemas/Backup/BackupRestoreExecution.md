# BackupRestoreExecution

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backup_restore_point` | any | No |  |
| `duration` | integer (int32) | No |  |
| `entityAsyncStatus` | any | No |  |
| `executed_at` | string | Yes |  |
| `id` | string | Yes |  |
| `mode` | [BackupRestoreExecutionMode](BackupRestoreExecutionMode.md) | Yes |  |
| `name` | string | Yes |  |
| `read_bytes` | integer (int64) | No |  |
| `rebuild_name` | string | No |  |
| `rebuild_network_mapping` | NestedBackupRestoreExecutionNetworkMapping[] | No |  |
| `rebuild_target_cluster` | string | No |  |
| `retry_times` | integer (int32) | No |  |
| `startup_after_restore` | boolean | Yes |  |
| `status` | [BackupExecutionStatus](BackupExecutionStatus.md) | Yes |  |
| `total_bytes` | integer (int64) | No |  |

