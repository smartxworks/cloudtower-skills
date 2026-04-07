# IscsiLun

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `allowed_initiators` | string | Yes |  |
| `assigned_size` | integer (int64) | Yes |  |
| `bps` | integer (int64) | Yes |  |
| `bps_max` | integer (int64) | Yes |  |
| `bps_max_length` | integer (int64) | Yes |  |
| `bps_rd` | integer (int64) | Yes |  |
| `bps_rd_max` | integer (int64) | Yes |  |
| `bps_rd_max_length` | integer (int64) | Yes |  |
| `bps_wr` | integer (int64) | Yes |  |
| `bps_wr_max` | integer (int64) | Yes |  |
| `bps_wr_max_length` | integer (int64) | Yes |  |
| `business_host_groups` | NestedBusinessHostGroup[] | No |  |
| `business_host_is_same_with_parent` | boolean | No |  |
| `business_hosts` | NestedBusinessHost[] | No |  |
| `configuration_method` | any | No |  |
| `consistency_group` | any | No |  |
| `downgraded_prioritized_space` | integer (int64) | No |  |
| `ec_k` | integer (int32) | No |  |
| `ec_m` | integer (int32) | No |  |
| `encrypt_method` | any | No |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `io_size` | integer (int64) | Yes |  |
| `iops` | integer (int64) | Yes |  |
| `iops_max` | integer (int64) | Yes |  |
| `iops_max_length` | integer (int64) | Yes |  |
| `iops_rd` | integer (int64) | Yes |  |
| `iops_rd_max` | integer (int64) | Yes |  |
| `iops_rd_max_length` | integer (int64) | Yes |  |
| `iops_wr` | integer (int64) | Yes |  |
| `iops_wr_max` | integer (int64) | Yes |  |
| `iops_wr_max_length` | integer (int64) | Yes |  |
| `iscsi_target` | [NestedIscsiTarget](NestedIscsiTarget.md) | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `local_created_at` | string | Yes |  |
| `local_id` | string | Yes |  |
| `lun_id` | integer (int32) | Yes |  |
| `name` | string | Yes |  |
| `prioritized` | boolean | No |  |
| `replica_num` | integer (int32) | Yes |  |
| `replication_plans` | NestedReplicationPlan[] | No |  |
| `resiliency_type` | any | No |  |
| `shared_size` | integer (int64) | Yes |  |
| `snapshot_num` | integer (int32) | Yes |  |
| `snapshot_plans` | NestedSnapshotPlan[] | No |  |
| `stripe_num` | integer (int32) | Yes |  |
| `stripe_size` | integer (int64) | Yes |  |
| `thin_provision` | boolean | Yes |  |
| `unique_logical_size` | number (double) | No |  |
| `unique_size` | integer (int64) | Yes |  |
| `zbs_volume_id` | string | Yes |  |

