# BackupPlanExecution

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backup_plan` | any | No |  |
| `deletable_flag_marked` | boolean | No |  |
| `duration` | integer (int32) | No |  |
| `entityAsyncStatus` | any | No |  |
| `executed_at` | string | No |  |
| `id` | string | Yes |  |
| `local_created_at` | string | Yes |  |
| `local_id` | string | Yes |  |
| `method` | [BackupExecutionMethod](BackupExecutionMethod.md) | Yes |  |
| `state` | any | No |  |
| `status` | [BackupPlanExecutionStatus](BackupPlanExecutionStatus.md) | Yes |  |
| `success_job_count` | integer (int32) | No |  |
| `total_job_count` | integer (int32) | No |  |
| `type` | [BackupExecutionType](BackupExecutionType.md) | Yes |  |

