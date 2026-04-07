# NfsExport

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `description` | string | Yes |  |
| `ec_k` | integer (int32) | No |  |
| `ec_m` | integer (int32) | No |  |
| `encrypt_method` | any | No |  |
| `entityAsyncStatus` | any | No |  |
| `export_inode_id` | string | Yes |  |
| `id` | string | Yes |  |
| `inodes` | NestedNfsInode[] | No |  |
| `internal` | boolean | Yes |  |
| `ip_whitelist` | string | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `prioritized` | boolean | No |  |
| `replica_num` | integer (int32) | Yes |  |
| `resiliency_type` | any | No |  |
| `thin_provision` | boolean | Yes |  |

