# BackupPlan

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backup_delay_option` | any | No |  |
| `backup_plan_executions` | NestedBackupPlanExecution[] | No |  |
| `backup_restore_point_count` | integer (int32) | No |  |
| `backup_restore_points` | NestedBackupRestorePoint[] | No |  |
| `backup_service` | [NestedBackupService](NestedBackupService.md) | Yes |  |
| `backup_store_repository` | [NestedBackupStoreRepository](NestedBackupStoreRepository.md) | Yes |  |
| `backup_total_size` | integer (int64) | No |  |
| `compression` | boolean | No |  |
| `compression_ratio` | number (double) | No |  |
| `createdAt` | string | Yes |  |
| `delete_strategy` | any | No |  |
| `description` | string | No |  |
| `enable_window` | boolean | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `full_interval` | integer (int32) | Yes |  |
| `full_period` | [BackupPlanPeriod](BackupPlanPeriod.md) | Yes |  |
| `full_time_point` | [NestedBackupPlanTimePoint](NestedBackupPlanTimePoint.md) | Yes |  |
| `id` | string | Yes |  |
| `incremental_interval` | integer (int32) | No |  |
| `incremental_period` | [BackupPlanPeriod](BackupPlanPeriod.md) | Yes |  |
| `incremental_time_points` | NestedBackupPlanTimePoint[] | Yes |  |
| `incremental_weekdays` | WeekdayTypeEnum[] | No |  |
| `keep_policy` | any | No |  |
| `keep_policy_value` | integer (int32) | No |  |
| `last_execute_status` | [BackupPlanExecutionStatus](BackupPlanExecutionStatus.md) | Yes |  |
| `last_execute_status_message` | string | No |  |
| `last_execute_success_job_count` | integer (int32) | No |  |
| `last_execute_total_job_count` | integer (int32) | No |  |
| `last_executed_at` | string | No |  |
| `last_manual_execute_status` | [BackupPlanExecutionStatus](BackupPlanExecutionStatus.md) | Yes |  |
| `last_manual_execute_status_message` | string | No |  |
| `last_manual_execute_success_job_count` | integer (int32) | No |  |
| `last_manual_execute_total_job_count` | integer (int32) | No |  |
| `last_manual_executed_at` | string | No |  |
| `logical_size` | integer (int64) | Yes |  |
| `name` | string | Yes |  |
| `next_execute_time` | string | No |  |
| `phase` | any | No |  |
| `physical_size` | integer (int64) | Yes |  |
| `snapshot_consistent_type` | any | No |  |
| `status` | [BackupPlanStatus](BackupPlanStatus.md) | Yes |  |
| `valid_size_of_backup_object` | integer (int64) | Yes |  |
| `valid_size_of_restore_point` | integer (int64) | Yes |  |
| `vms` | NestedVm[] | No |  |
| `window_end` | string | No |  |
| `window_start` | string | No |  |

