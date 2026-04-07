# NfsInode

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `assigned_size` | integer (int64) | Yes |  |
| `downgraded_prioritized_space` | integer (int64) | No |  |
| `ec_k` | integer (int32) | No |  |
| `ec_m` | integer (int32) | No |  |
| `encrypt_method` | any | No |  |
| `entityAsyncStatus` | any | No |  |
| `file` | boolean | Yes |  |
| `id` | string | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `local_id` | string | Yes |  |
| `local_updated_at` | string | Yes |  |
| `name` | string | Yes |  |
| `nfs_export` | [NestedNfsExport](NestedNfsExport.md) | Yes |  |
| `parent_id` | string | Yes |  |
| `prioritized` | boolean | No |  |
| `resiliency_type` | any | No |  |
| `shared_size` | integer (int64) | Yes |  |
| `snapshot_num` | integer (int32) | Yes |  |
| `unique_logical_size` | number (double) | No |  |
| `unique_size` | integer (int64) | Yes |  |

