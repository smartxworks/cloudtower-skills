# BackupPlanUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [BackupPlanWhereInput](BackupPlanWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `disconnect_strategy` | [BackupPlanDeleteStrategy](BackupPlanDeleteStrategy.md) | No |  |
| `keep_policy_value` | integer (int32) | No |  |
| `keep_policy` | [BackupPlanKeepPolicy](BackupPlanKeepPolicy.md) | No |  |
| `backup_delay_option` | [BackupPlanDelayOption](BackupPlanDelayOption.md) | No |  |
| `window_end` | string | No |  |
| `window_start` | string | No |  |
| `enable_window` | boolean | No |  |
| `full_time_point` | [BackupPlanTimePoint](BackupPlanTimePoint.md) | No |  |
| `full_period` | [BackupPlanPeriod](BackupPlanPeriod.md) | No |  |
| `full_interval` | integer (int32) | No |  |
| `incremental_weekdays` | WeekdayTypeEnum[] | No |  |
| `incremental_time_points` | BackupPlanTimePoint[] | No |  |
| `incremental_interval` | integer (int32) | No |  |
| `incremental_period` | [BackupPlanPeriod](BackupPlanPeriod.md) | No |  |
| `snapshot_consistent_type` | [ConsistentType](ConsistentType.md) | No |  |
| `compression` | boolean | No |  |
| `vms` | [VmWhereInput](VmWhereInput.md) | No |  |
| `description` | string | No |  |
| `name` | string | No |  |

