# ReplicationPlanWhereInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AND` | ReplicationPlanWhereInput[] | No |  |
| `NOT` | ReplicationPlanWhereInput[] | No |  |
| `OR` | ReplicationPlanWhereInput[] | No |  |
| `abort_window_unfinished` | boolean | No |  |
| `abort_window_unfinished_not` | boolean | No |  |
| `activation_timestamp` | string | No |  |
| `activation_timestamp_gt` | string | No |  |
| `activation_timestamp_gte` | string | No |  |
| `activation_timestamp_in` | string[] | No |  |
| `activation_timestamp_lt` | string | No |  |
| `activation_timestamp_lte` | string | No |  |
| `activation_timestamp_not` | string | No |  |
| `activation_timestamp_not_in` | string[] | No |  |
| `compression` | boolean | No |  |
| `compression_not` | boolean | No |  |
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
| `ec_k` | integer (int32) | No |  |
| `ec_k_gt` | integer (int32) | No |  |
| `ec_k_gte` | integer (int32) | No |  |
| `ec_k_in` | integer[] | No |  |
| `ec_k_lt` | integer (int32) | No |  |
| `ec_k_lte` | integer (int32) | No |  |
| `ec_k_not` | integer (int32) | No |  |
| `ec_k_not_in` | integer[] | No |  |
| `ec_m` | integer (int32) | No |  |
| `ec_m_gt` | integer (int32) | No |  |
| `ec_m_gte` | integer (int32) | No |  |
| `ec_m_in` | integer[] | No |  |
| `ec_m_lt` | integer (int32) | No |  |
| `ec_m_lte` | integer (int32) | No |  |
| `ec_m_not` | integer (int32) | No |  |
| `ec_m_not_in` | integer[] | No |  |
| `enable_window` | boolean | No |  |
| `enable_window_not` | boolean | No |  |
| `entityAsyncStatus` | any | No |  |
| `entityAsyncStatus_in` | EntityAsyncStatus[] | No |  |
| `entityAsyncStatus_not` | any | No |  |
| `entityAsyncStatus_not_in` | EntityAsyncStatus[] | No |  |
| `external_cloudtower` | any | No |  |
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
| `inbound` | boolean | No |  |
| `inbound_not` | boolean | No |  |
| `interval` | integer (int32) | No |  |
| `interval_gt` | integer (int32) | No |  |
| `interval_gte` | integer (int32) | No |  |
| `interval_in` | integer[] | No |  |
| `interval_lt` | integer (int32) | No |  |
| `interval_lte` | integer (int32) | No |  |
| `interval_not` | integer (int32) | No |  |
| `interval_not_in` | integer[] | No |  |
| `iscsi_luns_every` | any | No |  |
| `iscsi_luns_none` | any | No |  |
| `iscsi_luns_some` | any | No |  |
| `keep_mac_address` | boolean | No |  |
| `keep_mac_address_not` | boolean | No |  |
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
| `next_execution_time` | string | No |  |
| `next_execution_time_gt` | string | No |  |
| `next_execution_time_gte` | string | No |  |
| `next_execution_time_in` | string[] | No |  |
| `next_execution_time_lt` | string | No |  |
| `next_execution_time_lte` | string | No |  |
| `next_execution_time_not` | string | No |  |
| `next_execution_time_not_in` | string[] | No |  |
| `period` | any | No |  |
| `period_in` | ReplicationPlanPeriod[] | No |  |
| `period_not` | any | No |  |
| `period_not_in` | ReplicationPlanPeriod[] | No |  |
| `phase` | any | No |  |
| `phase_in` | BackupPlanPhase[] | No |  |
| `phase_not` | any | No |  |
| `phase_not_in` | BackupPlanPhase[] | No |  |
| `replica_name_rule` | any | No |  |
| `replica_name_rule_in` | ReplicaNameRule[] | No |  |
| `replica_name_rule_not` | any | No |  |
| `replica_name_rule_not_in` | ReplicaNameRule[] | No |  |
| `replica_name_setting` | string | No |  |
| `replica_name_setting_contains` | string | No |  |
| `replica_name_setting_ends_with` | string | No |  |
| `replica_name_setting_gt` | string | No |  |
| `replica_name_setting_gte` | string | No |  |
| `replica_name_setting_in` | string[] | No |  |
| `replica_name_setting_lt` | string | No |  |
| `replica_name_setting_lte` | string | No |  |
| `replica_name_setting_not` | string | No |  |
| `replica_name_setting_not_contains` | string | No |  |
| `replica_name_setting_not_ends_with` | string | No |  |
| `replica_name_setting_not_in` | string[] | No |  |
| `replica_name_setting_not_starts_with` | string | No |  |
| `replica_name_setting_starts_with` | string | No |  |
| `replica_num` | integer (int32) | No |  |
| `replica_num_gt` | integer (int32) | No |  |
| `replica_num_gte` | integer (int32) | No |  |
| `replica_num_in` | integer[] | No |  |
| `replica_num_lt` | integer (int32) | No |  |
| `replica_num_lte` | integer (int32) | No |  |
| `replica_num_not` | integer (int32) | No |  |
| `replica_num_not_in` | integer[] | No |  |
| `replica_vms_every` | any | No |  |
| `replica_vms_none` | any | No |  |
| `replica_vms_some` | any | No |  |
| `replication_plan_executions_every` | any | No |  |
| `replication_plan_executions_none` | any | No |  |
| `replication_plan_executions_some` | any | No |  |
| `replication_restore_points_every` | any | No |  |
| `replication_restore_points_none` | any | No |  |
| `replication_restore_points_some` | any | No |  |
| `replication_target_executions_every` | any | No |  |
| `replication_target_executions_none` | any | No |  |
| `replication_target_executions_some` | any | No |  |
| `resiliency_type` | any | No |  |
| `resiliency_type_in` | ResiliencyType[] | No |  |
| `resiliency_type_not` | any | No |  |
| `resiliency_type_not_in` | ResiliencyType[] | No |  |
| `snapshot_consistent_type` | any | No |  |
| `snapshot_consistent_type_in` | ConsistentType[] | No |  |
| `snapshot_consistent_type_not` | any | No |  |
| `snapshot_consistent_type_not_in` | ConsistentType[] | No |  |
| `status` | any | No |  |
| `status_in` | BackupPlanStatus[] | No |  |
| `status_not` | any | No |  |
| `status_not_in` | BackupPlanStatus[] | No |  |
| `storage_policy` | any | No |  |
| `storage_policy_in` | VmVolumeElfStoragePolicyType[] | No |  |
| `storage_policy_not` | any | No |  |
| `storage_policy_not_in` | VmVolumeElfStoragePolicyType[] | No |  |
| `target_cluster` | any | No |  |
| `target_replication_service` | any | No |  |
| `thin_provision` | boolean | No |  |
| `thin_provision_not` | boolean | No |  |
| `type` | any | No |  |
| `type_in` | ReplicationPlanType[] | No |  |
| `type_not` | any | No |  |
| `type_not_in` | ReplicationPlanType[] | No |  |
| `updatedAt` | string | No |  |
| `updatedAt_gt` | string | No |  |
| `updatedAt_gte` | string | No |  |
| `updatedAt_in` | string[] | No |  |
| `updatedAt_lt` | string | No |  |
| `updatedAt_lte` | string | No |  |
| `updatedAt_not` | string | No |  |
| `updatedAt_not_in` | string[] | No |  |
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

