# ConsistencyGroup

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `consistency_group_snapshots` | NestedConsistencyGroupSnapshot[] | No |  |
| `description` | string | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `iscsi_luns` | NestedIscsiLun[] | No |  |
| `labels` | NestedLabel[] | No |  |
| `local_created_at` | string | Yes |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `namespaces` | NestedNvmfNamespace[] | No |  |
| `unique_size` | integer (int64) | Yes |  |

