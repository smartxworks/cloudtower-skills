# NvmfNamespaceSnapshot

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `consistency_group_snapshot` | any | No |  |
| `ec_k` | integer (int32) | No |  |
| `ec_m` | integer (int32) | No |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `local_created_at` | string | Yes |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `nvmf_namespace` | any | No |  |
| `nvmf_subsystem` | [NestedNvmfSubsystem](NestedNvmfSubsystem.md) | Yes |  |
| `resiliency_type` | any | No |  |
| `snapshot_group` | any | No |  |
| `unique_size` | integer (int64) | Yes |  |

