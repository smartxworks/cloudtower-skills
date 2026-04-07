# ReplicaVm

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `createdAt` | string | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `external_cloudtower` | any | No |  |
| `failover_test_object_descriptor` | any | No |  |
| `failover_test_replica_group` | string | No |  |
| `failover_test_vm` | any | No |  |
| `id` | string | Yes |  |
| `inbound` | boolean | No |  |
| `iscsi_lun` | any | No |  |
| `object_descriptor` | any | No |  |
| `origin_iscsi_lun` | any | No |  |
| `origin_object_descriptor` | [NestedReplicationObjectDescriptor](NestedReplicationObjectDescriptor.md) | Yes |  |
| `origin_vm` | any | No |  |
| `origin_vm_cluster_local_id` | string | No |  |
| `origin_vm_cluster_name` | string | No |  |
| `origin_vm_local_id` | string | No |  |
| `origin_vm_name` | string | No |  |
| `replica_group` | string | No |  |
| `replication_group` | string | No |  |
| `replication_plan` | any | No |  |
| `replication_service` | [NestedReplicationService](NestedReplicationService.md) | Yes |  |
| `replication_target_executions` | NestedReplicationTargetExecution[] | No |  |
| `restore_points` | NestedReplicationRestorePoint[] | No |  |
| `state` | [ReplicaVmState](ReplicaVmState.md) | Yes |  |
| `targets_deletable` | boolean | No |  |
| `type` | [ReplicationObjectType](ReplicationObjectType.md) | Yes |  |
| `updatedAt` | string | Yes |  |
| `vm` | any | No |  |

