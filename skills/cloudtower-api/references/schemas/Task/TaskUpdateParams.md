# TaskUpdateParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [TaskWhereInput](TaskWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `finished_at` | string | No |  |
| `started_at` | string | No |  |
| `resource_rollback_retry_count` | integer (int32) | No |  |
| `resource_rollback_error` | string | No |  |
| `resource_rollbacked` | boolean | No |  |
| `steps` | TaskStepCreationParams[] | No |  |
| `error_message` | string | No |  |
| `error_code` | string | No |  |
| `progress` | number (float) | No |  |
| `status` | [TaskStatus](TaskStatus.md) | No |  |
| `snapshot` | string | No |  |
| `args` | object | No |  |
| `key` | string | No |  |
| `type` | [TaskType](TaskType.md) | No |  |
| `resource_id` | string | No |  |
| `cluster_id` | string | No |  |
| `user_id` | string | No |  |
| `resource_mutation` | string | No |  |
| `resource_type` | string | No |  |
| `description` | [TaskDescription](TaskDescription.md) | No |  |

