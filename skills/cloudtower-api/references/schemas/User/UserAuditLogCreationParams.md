# UserAuditLogCreationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_key_name` | string | No |  |
| `id` | string | No |  |
| `started_at` | string | No |  |
| `finished_at` | string | No |  |
| `cluster_id` | string | No |  |
| `resource_id` | string | No |  |
| `ip_address` | string | No |  |
| `status` | [UserAuditLogStatus](UserAuditLogStatus.md) | Yes |  |
| `user_id` | string | Yes |  |
| `key` | string | No |  |
| `message` | [UserAuditLogMessage](UserAuditLogMessage.md) | Yes |  |
| `resource_type` | string | Yes |  |
| `action` | string | Yes |  |

