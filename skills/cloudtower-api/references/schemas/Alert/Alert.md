# Alert

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `alert_rule` | any | No |  |
| `cause` | string | Yes |  |
| `cluster` | any | No |  |
| `create_time` | string | No |  |
| `disk` | any | No |  |
| `ended` | boolean | Yes |  |
| `host` | any | No |  |
| `id` | string | Yes |  |
| `impact` | string | Yes |  |
| `labels` | object | Yes |  |
| `local_create_time` | string | Yes |  |
| `local_end_time` | string | Yes |  |
| `local_id` | string | Yes |  |
| `local_start_time` | string | Yes |  |
| `local_update_time` | string | Yes |  |
| `message` | string | Yes |  |
| `severity` | string | Yes |  |
| `solution` | string | Yes |  |
| `threshold` | number (double) | Yes |  |
| `value` | number (double) | Yes |  |
| `vms` | NestedVm[] | No |  |

## Nested Fields

### `labels`

| Field | Type | Required | Description |
|-------|------|----------|-------------|

