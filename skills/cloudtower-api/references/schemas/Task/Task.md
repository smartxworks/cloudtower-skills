# Task

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `args` | object | Yes |  |
| `cluster` | any | No |  |
| `description` | string | Yes |  |
| `error_code` | string | No |  |
| `error_message` | string | No |  |
| `finished_at` | string | No |  |
| `id` | string | Yes |  |
| `internal` | boolean | Yes |  |
| `key` | string | No |  |
| `local_created_at` | string | Yes |  |
| `progress` | number (double) | Yes |  |
| `resource_id` | string | No |  |
| `resource_mutation` | string | No |  |
| `resource_rollback_error` | string | No |  |
| `resource_rollback_retry_count` | integer (int32) | No |  |
| `resource_rollbacked` | boolean | No |  |
| `resource_type` | string | No |  |
| `snapshot` | string | Yes |  |
| `started_at` | string | No |  |
| `status` | [TaskStatus](TaskStatus.md) | Yes |  |
| `steps` | NestedStep[] | Yes |  |
| `type` | any | No |  |
| `user` | any | No |  |

## Nested Fields

### `args`

| Field | Type | Required | Description |
|-------|------|----------|-------------|

