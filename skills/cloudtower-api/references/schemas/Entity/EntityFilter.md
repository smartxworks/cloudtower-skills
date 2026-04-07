# EntityFilter

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apply_to_all_clusters` | boolean | No |  |
| `clusters` | NestedCluster[] | No |  |
| `entity_type` | [EntityType](EntityType.md) | Yes |  |
| `exclude_ids` | string[] | Yes |  |
| `exec_failed_cluster` | NestedCluster[] | No |  |
| `filter_error` | string[] | Yes |  |
| `filter_status` | [FilterStatus](FilterStatus.md) | Yes |  |
| `id` | string | Yes |  |
| `ids` | string[] | Yes |  |
| `last_executed_at` | string | No |  |
| `name` | string | Yes |  |
| `preset` | string | No |  |
| `rules` | NestedFilterRule[] | Yes |  |

