# BackupStoreRepository

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `backup_plans` | NestedBackupPlan[] | No |  |
| `backup_restore_points` | NestedBackupRestorePoint[] | No |  |
| `backup_service` | any | No |  |
| `createdAt` | string | Yes |  |
| `description` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `error_code` | string | No |  |
| `id` | string | Yes |  |
| `iscsi_chap_name` | string | No |  |
| `iscsi_chap_secret` | string | No |  |
| `iscsi_ip` | string | No |  |
| `iscsi_lun_id` | string | No |  |
| `iscsi_port` | integer (int32) | No |  |
| `iscsi_target_iqn` | string | No |  |
| `name` | string | Yes |  |
| `nfs_path` | string | No |  |
| `nfs_server` | string | No |  |
| `status` | [BackupStoreStatus](BackupStoreStatus.md) | Yes |  |
| `total_capacity` | integer (int64) | Yes |  |
| `type` | [BackupStoreType](BackupStoreType.md) | Yes |  |
| `update_timestamp` | string | No |  |
| `used_data_space` | integer (int64) | Yes |  |
| `used_data_space_usage` | number (double) | No |  |
| `valid_data_space` | integer (int64) | No |  |

