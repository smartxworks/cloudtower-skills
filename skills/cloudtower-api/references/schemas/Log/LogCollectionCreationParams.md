# LogCollectionCreationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `witness_id` | string | No |  |
| `service_groups` | LogCollectionServiceGroupParams[] | No |  |
| `log_ended_at` | string (date-time) | Yes |  |
| `log_started_at` | string (date-time) | Yes |  |
| `cluster_id` | string | Yes |  |
| `hosts` | [HostWhereInput](HostWhereInput.md) | Yes |  |

