# LogCollection

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `groups` | string[] | Yes |  |
| `hosts` | NestedHost[] | No |  |
| `id` | string | Yes |  |
| `local_id` | string | Yes |  |
| `log_ended_at` | string | Yes |  |
| `log_started_at` | string | Yes |  |
| `owner` | string | Yes |  |
| `path` | string | Yes |  |
| `progress` | number (double) | Yes |  |
| `service_groups` | object | No |  |
| `services` | string[] | Yes |  |
| `size` | integer (int64) | Yes |  |
| `started_at` | string | Yes |  |
| `status` | [LogCollectionStatus](LogCollectionStatus.md) | Yes |  |
| `witness` | any | No |  |

## Nested Fields

### `service_groups`

| Field | Type | Required | Description |
|-------|------|----------|-------------|

