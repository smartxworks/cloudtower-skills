# BackupPlanCreationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `keep_policy_value` | integer (int32) | Yes |  |
| `keep_policy` | [BackupPlanKeepPolicy](BackupPlanKeepPolicy.md) | Yes |  |
| `backup_delay_option` | [BackupPlanDelayOption](BackupPlanDelayOption.md) | No |  |
| `window_end` | string | No |  |
| `window_start` | string | No |  |
| `enable_window` | boolean | Yes |  |
| `full_time_point` | [BackupPlanTimePoint](BackupPlanTimePoint.md) | Yes |  |
| `full_period` | [BackupPlanPeriod](BackupPlanPeriod.md) | Yes |  |
| `full_interval` | integer (int32) | Yes |  |
| `incremental_weekdays` | WeekdayTypeEnum[] | No |  |
| `incremental_time_points` | BackupPlanTimePoint[] | No |  |
| `incremental_interval` | integer (int32) | Yes |  |
| `incremental_period` | [BackupPlanPeriod](BackupPlanPeriod.md) | Yes |  |
| `snapshot_consistent_type` | [ConsistentType](ConsistentType.md) | Yes |  |
| `compression` | boolean | Yes |  |
| `vms` | [VmWhereInput](VmWhereInput.md) | Yes |  |
| `description` | string | No |  |
| `backup_store_repository_id` | string | Yes |  |
| `backup_service_id` | string | Yes |  |
| `name` | string | Yes |  |

