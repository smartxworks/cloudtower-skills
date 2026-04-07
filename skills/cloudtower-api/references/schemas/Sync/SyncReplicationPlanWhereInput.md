# SyncReplicationPlanWhereInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AND` | SyncReplicationPlanWhereInput[] | No |  |
| `NOT` | SyncReplicationPlanWhereInput[] | No |  |
| `OR` | SyncReplicationPlanWhereInput[] | No |  |
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
| `data_version` | integer (int32) | No |  |
| `data_version_gt` | integer (int32) | No |  |
| `data_version_gte` | integer (int32) | No |  |
| `data_version_in` | integer[] | No |  |
| `data_version_lt` | integer (int32) | No |  |
| `data_version_lte` | integer (int32) | No |  |
| `data_version_not` | integer (int32) | No |  |
| `data_version_not_in` | integer[] | No |  |
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
| `entityAsyncStatus` | any | No |  |
| `entityAsyncStatus_in` | EntityAsyncStatus[] | No |  |
| `entityAsyncStatus_not` | any | No |  |
| `entityAsyncStatus_not_in` | EntityAsyncStatus[] | No |  |
| `external_cloudtower` | any | No |  |
| `failover_test_keep_mac_address` | boolean | No |  |
| `failover_test_keep_mac_address_not` | boolean | No |  |
| `failover_test_name_rule` | any | No |  |
| `failover_test_name_rule_in` | ReplicaNameRule[] | No |  |
| `failover_test_name_rule_not` | any | No |  |
| `failover_test_name_rule_not_in` | ReplicaNameRule[] | No |  |
| `failover_test_name_setting` | string | No |  |
| `failover_test_name_setting_contains` | string | No |  |
| `failover_test_name_setting_ends_with` | string | No |  |
| `failover_test_name_setting_gt` | string | No |  |
| `failover_test_name_setting_gte` | string | No |  |
| `failover_test_name_setting_in` | string[] | No |  |
| `failover_test_name_setting_lt` | string | No |  |
| `failover_test_name_setting_lte` | string | No |  |
| `failover_test_name_setting_not` | string | No |  |
| `failover_test_name_setting_not_contains` | string | No |  |
| `failover_test_name_setting_not_ends_with` | string | No |  |
| `failover_test_name_setting_not_in` | string[] | No |  |
| `failover_test_name_setting_not_starts_with` | string | No |  |
| `failover_test_name_setting_starts_with` | string | No |  |
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
| `initialization_time_point` | string | No |  |
| `initialization_time_point_contains` | string | No |  |
| `initialization_time_point_ends_with` | string | No |  |
| `initialization_time_point_gt` | string | No |  |
| `initialization_time_point_gte` | string | No |  |
| `initialization_time_point_in` | string[] | No |  |
| `initialization_time_point_lt` | string | No |  |
| `initialization_time_point_lte` | string | No |  |
| `initialization_time_point_not` | string | No |  |
| `initialization_time_point_not_contains` | string | No |  |
| `initialization_time_point_not_ends_with` | string | No |  |
| `initialization_time_point_not_in` | string[] | No |  |
| `initialization_time_point_not_starts_with` | string | No |  |
| `initialization_time_point_starts_with` | string | No |  |
| `interval` | integer (int32) | No |  |
| `interval_gt` | integer (int32) | No |  |
| `interval_gte` | integer (int32) | No |  |
| `interval_in` | integer[] | No |  |
| `interval_lt` | integer (int32) | No |  |
| `interval_lte` | integer (int32) | No |  |
| `interval_not` | integer (int32) | No |  |
| `interval_not_in` | integer[] | No |  |
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
| `resource_version` | integer (int32) | No |  |
| `resource_version_gt` | integer (int32) | No |  |
| `resource_version_gte` | integer (int32) | No |  |
| `resource_version_in` | integer[] | No |  |
| `resource_version_lt` | integer (int32) | No |  |
| `resource_version_lte` | integer (int32) | No |  |
| `resource_version_not` | integer (int32) | No |  |
| `resource_version_not_in` | integer[] | No |  |
| `snapshot_consistent_type` | any | No |  |
| `snapshot_consistent_type_in` | ConsistentType[] | No |  |
| `snapshot_consistent_type_not` | any | No |  |
| `snapshot_consistent_type_not_in` | ConsistentType[] | No |  |
| `status` | any | No |  |
| `status_in` | BackupPlanStatus[] | No |  |
| `status_not` | any | No |  |
| `status_not_in` | BackupPlanStatus[] | No |  |
| `storage_encrypted` | boolean | No |  |
| `storage_encrypted_not` | boolean | No |  |
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

