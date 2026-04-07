# ReplicationPlan

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `abort_window_unfinished` | boolean | No |  |
| `activation_timestamp` | string | No |  |
| `compression` | boolean | Yes |  |
| `createdAt` | string | Yes |  |
| `delete_strategy` | any | No |  |
| `description` | string | No |  |
| `ec_k` | integer (int32) | No |  |
| `ec_m` | integer (int32) | No |  |
| `enable_window` | boolean | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `external_cloudtower` | any | No |  |
| `id` | string | Yes |  |
| `inbound` | boolean | No |  |
| `interval` | integer (int32) | Yes |  |
| `ip_mapping` | NestedReplicationIPAddressMapping[] | Yes |  |
| `iscsi_luns` | NestedIscsiLun[] | No |  |
| `keep_mac_address` | boolean | No |  |
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
| `name` | string | Yes |  |
| `network_mapping` | NestedReplicationPlanNetworkMapping[] | Yes |  |
| `next_execution_time` | string | No |  |
| `objects_descriptor` | NestedReplicationObjectDescriptor[] | Yes |  |
| `period` | [ReplicationPlanPeriod](ReplicationPlanPeriod.md) | Yes |  |
| `phase` | any | No |  |
| `replica_name_rule` | [ReplicaNameRule](ReplicaNameRule.md) | Yes |  |
| `replica_name_setting` | string | No |  |
| `replica_num` | integer (int32) | No |  |
| `replica_vms` | NestedReplicaVm[] | No |  |
| `replication_plan_executions` | NestedReplicationPlanExecution[] | No |  |
| `replication_restore_points` | NestedReplicationRestorePoint[] | No |  |
| `replication_target_executions` | NestedReplicationTargetExecution[] | No |  |
| `resiliency_type` | any | No |  |
| `snapshot_consistent_type` | any | No |  |
| `status` | [BackupPlanStatus](BackupPlanStatus.md) | Yes |  |
| `storage_policy` | [VmVolumeElfStoragePolicyType](VmVolumeElfStoragePolicyType.md) | Yes |  |
| `target_cluster` | any | No |  |
| `target_cluster_descriptor` | [NestedReplicationClusterDescriptor](NestedReplicationClusterDescriptor.md) | Yes |  |
| `target_replication_service` | [NestedReplicationService](NestedReplicationService.md) | Yes |  |
| `thin_provision` | boolean | No |  |
| `time_points` | NestedBackupPlanTimePoint[] | Yes |  |
| `type` | [ReplicationPlanType](ReplicationPlanType.md) | Yes |  |
| `updatedAt` | string | Yes |  |
| `vms` | NestedVm[] | No |  |
| `weekdays` | WeekdayTypeEnum[] | No |  |
| `window_end` | string | No |  |
| `window_start` | string | No |  |

