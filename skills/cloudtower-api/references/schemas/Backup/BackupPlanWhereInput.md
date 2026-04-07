# BackupPlanWhereInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AND` | BackupPlanWhereInput[] | No |  |
| `NOT` | BackupPlanWhereInput[] | No |  |
| `OR` | BackupPlanWhereInput[] | No |  |
| `backup_delay_option` | any | No |  |
| `backup_delay_option_in` | BackupPlanDelayOption[] | No |  |
| `backup_delay_option_not` | any | No |  |
| `backup_delay_option_not_in` | BackupPlanDelayOption[] | No |  |
| `backup_plan_executions_every` | any | No |  |
| `backup_plan_executions_none` | any | No |  |
| `backup_plan_executions_some` | any | No |  |
| `backup_restore_point_count` | integer (int32) | No |  |
| `backup_restore_point_count_gt` | integer (int32) | No |  |
| `backup_restore_point_count_gte` | integer (int32) | No |  |
| `backup_restore_point_count_in` | integer[] | No |  |
| `backup_restore_point_count_lt` | integer (int32) | No |  |
| `backup_restore_point_count_lte` | integer (int32) | No |  |
| `backup_restore_point_count_not` | integer (int32) | No |  |
| `backup_restore_point_count_not_in` | integer[] | No |  |
| `backup_restore_points_every` | any | No |  |
| `backup_restore_points_none` | any | No |  |
| `backup_restore_points_some` | any | No |  |
| `backup_service` | any | No |  |
| `backup_store_repository` | any | No |  |
| `backup_total_size` | integer (int64) | No |  |
| `backup_total_size_gt` | integer (int64) | No |  |
| `backup_total_size_gte` | integer (int64) | No |  |
| `backup_total_size_in` | integer[] | No |  |
| `backup_total_size_lt` | integer (int64) | No |  |
| `backup_total_size_lte` | integer (int64) | No |  |
| `backup_total_size_not` | integer (int64) | No |  |
| `backup_total_size_not_in` | integer[] | No |  |
| `compression` | boolean | No |  |
| `compression_not` | boolean | No |  |
| `compression_ratio` | number (double) | No |  |
| `compression_ratio_gt` | number (double) | No |  |
| `compression_ratio_gte` | number (double) | No |  |
| `compression_ratio_in` | number[] | No |  |
| `compression_ratio_lt` | number (double) | No |  |
| `compression_ratio_lte` | number (double) | No |  |
| `compression_ratio_not` | number (double) | No |  |
| `compression_ratio_not_in` | number[] | No |  |
| `createdAt` | string | No |  |
| `createdAt_gt` | string | No |  |
| `createdAt_gte` | string | No |  |
| `createdAt_in` | string[] | No |  |
| `createdAt_lt` | string | No |  |
| `createdAt_lte` | string | No |  |
| `createdAt_not` | string | No |  |
| `createdAt_not_in` | string[] | No |  |
| `delete_strategy` | any | No |  |
| `delete_strategy_in` | BackupPlanDeleteStrategy[] | No |  |
| `delete_strategy_not` | any | No |  |
| `delete_strategy_not_in` | BackupPlanDeleteStrategy[] | No |  |
| `description` | string | No |  |
| `description_contains` | string | No |  |
| `description_ends_with` | string | No |  |
| `description_gt` | string | No |  |
| `description_gte` | string | No |  |
| `description_in` | string[] | No |  |
| `description_lt` | string | No |  |
| `description_lte` | string | No |  |
| `description_not` | string | No |  |
| `description_not_contains` | string | No |  |
| `description_not_ends_with` | string | No |  |
| `description_not_in` | string[] | No |  |
| `description_not_starts_with` | string | No |  |
| `description_starts_with` | string | No |  |
| `enable_window` | boolean | No |  |
| `enable_window_not` | boolean | No |  |
| `entityAsyncStatus` | any | No |  |
| `entityAsyncStatus_in` | EntityAsyncStatus[] | No |  |
| `entityAsyncStatus_not` | any | No |  |
| `entityAsyncStatus_not_in` | EntityAsyncStatus[] | No |  |
| `full_interval` | integer (int32) | No |  |
| `full_interval_gt` | integer (int32) | No |  |
| `full_interval_gte` | integer (int32) | No |  |
| `full_interval_in` | integer[] | No |  |
| `full_interval_lt` | integer (int32) | No |  |
| `full_interval_lte` | integer (int32) | No |  |
| `full_interval_not` | integer (int32) | No |  |
| `full_interval_not_in` | integer[] | No |  |
| `full_period` | any | No |  |
| `full_period_in` | BackupPlanPeriod[] | No |  |
| `full_period_not` | any | No |  |
| `full_period_not_in` | BackupPlanPeriod[] | No |  |
| `id` | string | No |  |
| `id_contains` | string | No |  |
| `id_ends_with` | string | No |  |
| `id_gt` | string | No |  |
| `id_gte` | string | No |  |
| `id_in` | string[] | No |  |
| `id_lt` | string | No |  |
| `id_lte` | string | No |  |
| `id_not` | string | No |  |
| `id_not_contains` | string | No |  |
| `id_not_ends_with` | string | No |  |
| `id_not_in` | string[] | No |  |
| `id_not_starts_with` | string | No |  |
| `id_starts_with` | string | No |  |
| `incremental_interval` | integer (int32) | No |  |
| `incremental_interval_gt` | integer (int32) | No |  |
| `incremental_interval_gte` | integer (int32) | No |  |
| `incremental_interval_in` | integer[] | No |  |
| `incremental_interval_lt` | integer (int32) | No |  |
| `incremental_interval_lte` | integer (int32) | No |  |
| `incremental_interval_not` | integer (int32) | No |  |
| `incremental_interval_not_in` | integer[] | No |  |
| `incremental_period` | any | No |  |
| `incremental_period_in` | BackupPlanPeriod[] | No |  |
| `incremental_period_not` | any | No |  |
| `incremental_period_not_in` | BackupPlanPeriod[] | No |  |
| `keep_policy` | any | No |  |
| `keep_policy_in` | BackupPlanKeepPolicy[] | No |  |
| `keep_policy_not` | any | No |  |
| `keep_policy_not_in` | BackupPlanKeepPolicy[] | No |  |
| `keep_policy_value` | integer (int32) | No |  |
| `keep_policy_value_gt` | integer (int32) | No |  |
| `keep_policy_value_gte` | integer (int32) | No |  |
| `keep_policy_value_in` | integer[] | No |  |
| `keep_policy_value_lt` | integer (int32) | No |  |
| `keep_policy_value_lte` | integer (int32) | No |  |
| `keep_policy_value_not` | integer (int32) | No |  |
| `keep_policy_value_not_in` | integer[] | No |  |
| `last_execute_status` | any | No |  |
| `last_execute_status_in` | BackupPlanExecutionStatus[] | No |  |
| `last_execute_status_message` | string | No |  |
| `last_execute_status_message_contains` | string | No |  |
| `last_execute_status_message_ends_with` | string | No |  |
| `last_execute_status_message_gt` | string | No |  |
| `last_execute_status_message_gte` | string | No |  |
| `last_execute_status_message_in` | string[] | No |  |
| `last_execute_status_message_lt` | string | No |  |
| `last_execute_status_message_lte` | string | No |  |
| `last_execute_status_message_not` | string | No |  |
| `last_execute_status_message_not_contains` | string | No |  |
| `last_execute_status_message_not_ends_with` | string | No |  |
| `last_execute_status_message_not_in` | string[] | No |  |
| `last_execute_status_message_not_starts_with` | string | No |  |
| `last_execute_status_message_starts_with` | string | No |  |
| `last_execute_status_not` | any | No |  |
| `last_execute_status_not_in` | BackupPlanExecutionStatus[] | No |  |
| `last_execute_success_job_count` | integer (int32) | No |  |
| `last_execute_success_job_count_gt` | integer (int32) | No |  |
| `last_execute_success_job_count_gte` | integer (int32) | No |  |
| `last_execute_success_job_count_in` | integer[] | No |  |
| `last_execute_success_job_count_lt` | integer (int32) | No |  |
| `last_execute_success_job_count_lte` | integer (int32) | No |  |
| `last_execute_success_job_count_not` | integer (int32) | No |  |
| `last_execute_success_job_count_not_in` | integer[] | No |  |
| `last_execute_total_job_count` | integer (int32) | No |  |
| `last_execute_total_job_count_gt` | integer (int32) | No |  |
| `last_execute_total_job_count_gte` | integer (int32) | No |  |
| `last_execute_total_job_count_in` | integer[] | No |  |
| `last_execute_total_job_count_lt` | integer (int32) | No |  |
| `last_execute_total_job_count_lte` | integer (int32) | No |  |
| `last_execute_total_job_count_not` | integer (int32) | No |  |
| `last_execute_total_job_count_not_in` | integer[] | No |  |
| `last_executed_at` | string | No |  |
| `last_executed_at_gt` | string | No |  |
| `last_executed_at_gte` | string | No |  |
| `last_executed_at_in` | string[] | No |  |
| `last_executed_at_lt` | string | No |  |
| `last_executed_at_lte` | string | No |  |
| `last_executed_at_not` | string | No |  |
| `last_executed_at_not_in` | string[] | No |  |
| `last_manual_execute_status` | any | No |  |
| `last_manual_execute_status_in` | BackupPlanExecutionStatus[] | No |  |
| `last_manual_execute_status_message` | string | No |  |
| `last_manual_execute_status_message_contains` | string | No |  |
| `last_manual_execute_status_message_ends_with` | string | No |  |
| `last_manual_execute_status_message_gt` | string | No |  |
| `last_manual_execute_status_message_gte` | string | No |  |
| `last_manual_execute_status_message_in` | string[] | No |  |
| `last_manual_execute_status_message_lt` | string | No |  |
| `last_manual_execute_status_message_lte` | string | No |  |
| `last_manual_execute_status_message_not` | string | No |  |
| `last_manual_execute_status_message_not_contains` | string | No |  |
| `last_manual_execute_status_message_not_ends_with` | string | No |  |
| `last_manual_execute_status_message_not_in` | string[] | No |  |
| `last_manual_execute_status_message_not_starts_with` | string | No |  |
| `last_manual_execute_status_message_starts_with` | string | No |  |
| `last_manual_execute_status_not` | any | No |  |
| `last_manual_execute_status_not_in` | BackupPlanExecutionStatus[] | No |  |
| `last_manual_execute_success_job_count` | integer (int32) | No |  |
| `last_manual_execute_success_job_count_gt` | integer (int32) | No |  |
| `last_manual_execute_success_job_count_gte` | integer (int32) | No |  |
| `last_manual_execute_success_job_count_in` | integer[] | No |  |
| `last_manual_execute_success_job_count_lt` | integer (int32) | No |  |
| `last_manual_execute_success_job_count_lte` | integer (int32) | No |  |
| `last_manual_execute_success_job_count_not` | integer (int32) | No |  |
| `last_manual_execute_success_job_count_not_in` | integer[] | No |  |
| `last_manual_execute_total_job_count` | integer (int32) | No |  |
| `last_manual_execute_total_job_count_gt` | integer (int32) | No |  |
| `last_manual_execute_total_job_count_gte` | integer (int32) | No |  |
| `last_manual_execute_total_job_count_in` | integer[] | No |  |
| `last_manual_execute_total_job_count_lt` | integer (int32) | No |  |
| `last_manual_execute_total_job_count_lte` | integer (int32) | No |  |
| `last_manual_execute_total_job_count_not` | integer (int32) | No |  |
| `last_manual_execute_total_job_count_not_in` | integer[] | No |  |
| `last_manual_executed_at` | string | No |  |
| `last_manual_executed_at_gt` | string | No |  |
| `last_manual_executed_at_gte` | string | No |  |
| `last_manual_executed_at_in` | string[] | No |  |
| `last_manual_executed_at_lt` | string | No |  |
| `last_manual_executed_at_lte` | string | No |  |
| `last_manual_executed_at_not` | string | No |  |
| `last_manual_executed_at_not_in` | string[] | No |  |
| `logical_size` | integer (int64) | No |  |
| `logical_size_gt` | integer (int64) | No |  |
| `logical_size_gte` | integer (int64) | No |  |
| `logical_size_in` | integer[] | No |  |
| `logical_size_lt` | integer (int64) | No |  |
| `logical_size_lte` | integer (int64) | No |  |
| `logical_size_not` | integer (int64) | No |  |
| `logical_size_not_in` | integer[] | No |  |
| `name` | string | No |  |
| `name_contains` | string | No |  |
| `name_ends_with` | string | No |  |
| `name_gt` | string | No |  |
| `name_gte` | string | No |  |
| `name_in` | string[] | No |  |
| `name_lt` | string | No |  |
| `name_lte` | string | No |  |
| `name_not` | string | No |  |
| `name_not_contains` | string | No |  |
| `name_not_ends_with` | string | No |  |
| `name_not_in` | string[] | No |  |
| `name_not_starts_with` | string | No |  |
| `name_starts_with` | string | No |  |
| `next_execute_time` | string | No |  |
| `next_execute_time_gt` | string | No |  |
| `next_execute_time_gte` | string | No |  |
| `next_execute_time_in` | string[] | No |  |
| `next_execute_time_lt` | string | No |  |
| `next_execute_time_lte` | string | No |  |
| `next_execute_time_not` | string | No |  |
| `next_execute_time_not_in` | string[] | No |  |
| `phase` | any | No |  |
| `phase_in` | BackupPlanPhase[] | No |  |
| `phase_not` | any | No |  |
| `phase_not_in` | BackupPlanPhase[] | No |  |
| `physical_size` | integer (int64) | No |  |
| `physical_size_gt` | integer (int64) | No |  |
| `physical_size_gte` | integer (int64) | No |  |
| `physical_size_in` | integer[] | No |  |
| `physical_size_lt` | integer (int64) | No |  |
| `physical_size_lte` | integer (int64) | No |  |
| `physical_size_not` | integer (int64) | No |  |
| `physical_size_not_in` | integer[] | No |  |
| `snapshot_consistent_type` | any | No |  |
| `snapshot_consistent_type_in` | ConsistentType[] | No |  |
| `snapshot_consistent_type_not` | any | No |  |
| `snapshot_consistent_type_not_in` | ConsistentType[] | No |  |
| `status` | any | No |  |
| `status_in` | BackupPlanStatus[] | No |  |
| `status_not` | any | No |  |
| `status_not_in` | BackupPlanStatus[] | No |  |
| `valid_size_of_backup_object` | integer (int64) | No |  |
| `valid_size_of_backup_object_gt` | integer (int64) | No |  |
| `valid_size_of_backup_object_gte` | integer (int64) | No |  |
| `valid_size_of_backup_object_in` | integer[] | No |  |
| `valid_size_of_backup_object_lt` | integer (int64) | No |  |
| `valid_size_of_backup_object_lte` | integer (int64) | No |  |
| `valid_size_of_backup_object_not` | integer (int64) | No |  |
| `valid_size_of_backup_object_not_in` | integer[] | No |  |
| `valid_size_of_restore_point` | integer (int64) | No |  |
| `valid_size_of_restore_point_gt` | integer (int64) | No |  |
| `valid_size_of_restore_point_gte` | integer (int64) | No |  |
| `valid_size_of_restore_point_in` | integer[] | No |  |
| `valid_size_of_restore_point_lt` | integer (int64) | No |  |
| `valid_size_of_restore_point_lte` | integer (int64) | No |  |
| `valid_size_of_restore_point_not` | integer (int64) | No |  |
| `valid_size_of_restore_point_not_in` | integer[] | No |  |
| `vms_every` | any | No |  |
| `vms_none` | any | No |  |
| `vms_some` | any | No |  |
| `window_end` | string | No |  |
| `window_end_contains` | string | No |  |
| `window_end_ends_with` | string | No |  |
| `window_end_gt` | string | No |  |
| `window_end_gte` | string | No |  |
| `window_end_in` | string[] | No |  |
| `window_end_lt` | string | No |  |
| `window_end_lte` | string | No |  |
| `window_end_not` | string | No |  |
| `window_end_not_contains` | string | No |  |
| `window_end_not_ends_with` | string | No |  |
| `window_end_not_in` | string[] | No |  |
| `window_end_not_starts_with` | string | No |  |
| `window_end_starts_with` | string | No |  |
| `window_start` | string | No |  |
| `window_start_contains` | string | No |  |
| `window_start_ends_with` | string | No |  |
| `window_start_gt` | string | No |  |
| `window_start_gte` | string | No |  |
| `window_start_in` | string[] | No |  |
| `window_start_lt` | string | No |  |
| `window_start_lte` | string | No |  |
| `window_start_not` | string | No |  |
| `window_start_not_contains` | string | No |  |
| `window_start_not_ends_with` | string | No |  |
| `window_start_not_in` | string[] | No |  |
| `window_start_not_starts_with` | string | No |  |
| `window_start_starts_with` | string | No |  |

