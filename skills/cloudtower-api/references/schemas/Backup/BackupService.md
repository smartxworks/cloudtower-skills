# BackupService

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `application` | any | No |  |
| `backup_clusters` | NestedCluster[] | No |  |
| `backup_network_gateway` | string | No |  |
| `backup_network_ip` | string | No |  |
| `backup_network_subnet_mask` | string | No |  |
| `backup_network_type` | any | No |  |
| `backup_network_vlan` | string | No |  |
| `backup_plans` | NestedBackupPlan[] | No |  |
| `backup_rd_iops_max` | integer (int64) | No |  |
| `backup_store_repositories` | NestedBackupStoreRepository[] | No |  |
| `backup_wr_iops_max` | integer (int64) | No |  |
| `description` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `kube_config` | string | Yes |  |
| `management_network_gateway` | string | No |  |
| `management_network_ip` | string | No |  |
| `management_network_subnet_mask` | string | No |  |
| `management_network_vlan` | string | No |  |
| `max_job_retry_times` | integer (int32) | No |  |
| `max_parallel_backup_jobs` | integer (int32) | No |  |
| `max_parallel_restore_jobs` | integer (int32) | No |  |
| `name` | string | Yes |  |
| `network_status` | NestedBackupServiceNetworkStatus[] | No |  |
| `restore_rd_iops_max` | integer (int64) | No |  |
| `restore_wr_iops_max` | integer (int64) | No |  |
| `retry_interval` | integer (int32) | No |  |
| `running_vm` | any | No |  |
| `status` | any | No |  |
| `storage_network_gateway` | string | No |  |
| `storage_network_ip` | string | No |  |
| `storage_network_subnet_mask` | string | No |  |
| `storage_network_type` | any | No |  |
| `storage_network_vlan` | string | No |  |

