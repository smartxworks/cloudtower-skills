# TaskCreationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_key_name` | string | No |  |
| `snapshot` | string | No |  |
| `status` | [TaskStatus](TaskStatus.md) | No |  |
| `id` | string | No |  |
| `finished_at` | string | No |  |
| `started_at` | string | No |  |
| `steps` | TaskStepCreationParams[] | No |  |
| `args` | object | No |  |
| `key` | string | No |  |
| `internal` | boolean | No |  |
| `type` | [TaskType](TaskType.md) | No |  |
| `resource_id` | string | No |  |
| `cluster_id` | string | No |  |
| `user_id` | string | Yes |  |
| `description` | [TaskDescription](TaskDescription.md) | Yes |  |
| `resource_mutation` | string | Yes |  |
| `resource_type` | string | Yes |  |

