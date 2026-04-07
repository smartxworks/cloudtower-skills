# ReplicationService

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `application` | any | No |  |
| `createdAt` | string | Yes |  |
| `description` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `failover_executions` | NestedFailoverExecution[] | No |  |
| `id` | string | Yes |  |
| `kube_config` | string | Yes |  |
| `management_network` | [NestedReplicationServiceNetwork](NestedReplicationServiceNetwork.md) | Yes |  |
| `max_failback_jobs` | integer (int32) | No |  |
| `max_failback_speed_limit` | number (double) | No |  |
| `max_replication_jobs` | integer (int32) | No |  |
| `max_replication_speed_limit` | number (double) | No |  |
| `max_retry_times` | integer (int32) | No |  |
| `name` | string | Yes |  |
| `permanent_failover_execution` | NestedPermanentFailoverExecution[] | No |  |
| `replication_clusters` | NestedCluster[] | No |  |
| `replication_clusters_descriptor` | NestedReplicationClusterDescriptor[] | Yes |  |
| `replication_network` | [NestedReplicationServiceNetwork](NestedReplicationServiceNetwork.md) | Yes |  |
| `replication_plans` | NestedReplicationPlan[] | No |  |
| `retry_interval` | integer (int32) | No |  |
| `storage_network` | [NestedReplicationServiceNetwork](NestedReplicationServiceNetwork.md) | Yes |  |
| `updatedAt` | string | Yes |  |

