# IscsiTarget

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `bps` | integer (int64) | No |  |
| `bps_max` | integer (int64) | No |  |
| `bps_max_length` | integer (int64) | No |  |
| `bps_rd` | integer (int64) | No |  |
| `bps_rd_max` | integer (int64) | No |  |
| `bps_rd_max_length` | integer (int64) | No |  |
| `bps_wr` | integer (int64) | No |  |
| `bps_wr_max` | integer (int64) | No |  |
| `bps_wr_max_length` | integer (int64) | No |  |
| `business_host_groups` | NestedBusinessHostGroup[] | No |  |
| `business_hosts` | NestedBusinessHost[] | No |  |
| `chap_enabled` | boolean | Yes |  |
| `chap_name` | string | No |  |
| `chap_secret` | string | No |  |
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `configuration_adaptive` | boolean | No |  |
| `configuration_method` | any | No |  |
| `description` | string | Yes |  |
| `ec_k` | integer (int32) | No |  |
| `ec_m` | integer (int32) | No |  |
| `encrypt_method` | any | No |  |
| `entityAsyncStatus` | any | No |  |
| `external_use` | boolean | Yes |  |
| `id` | string | Yes |  |
| `initiator_chaps` | NestedInitiatorChap[] | No |  |
| `internal` | boolean | Yes |  |
| `io_size` | integer (int64) | No |  |
| `iops` | integer (int64) | No |  |
| `iops_max` | integer (int64) | No |  |
| `iops_max_length` | integer (int64) | No |  |
| `iops_rd` | integer (int64) | No |  |
| `iops_rd_max` | integer (int64) | No |  |
| `iops_rd_max_length` | integer (int64) | No |  |
| `iops_wr` | integer (int64) | No |  |
| `iops_wr_max` | integer (int64) | No |  |
| `iops_wr_max_length` | integer (int64) | No |  |
| `ip_whitelist` | string | Yes |  |
| `iqn_name` | string | Yes |  |
| `iqn_whitelist` | string | Yes |  |
| `iscsi_connections` | NestedIscsiConnection[] | No |  |
| `iscsi_luns_num` | integer (int32) | No |  |
| `labels` | NestedLabel[] | No |  |
| `local_id` | string | Yes |  |
| `luns` | NestedIscsiLun[] | No |  |
| `name` | string | Yes |  |
| `prioritized` | boolean | No |  |
| `replica_num` | integer (int32) | Yes |  |
| `resiliency_type` | any | No |  |
| `stripe_num` | integer (int32) | Yes |  |
| `stripe_size` | integer (int64) | Yes |  |
| `thin_provision` | boolean | Yes |  |

