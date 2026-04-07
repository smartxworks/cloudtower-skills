# ConsistencyGroupUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [ConsistencyGroupWhereInput](ConsistencyGroupWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `remain_volume_snapshot` | boolean | No |  |
| `namespaces_ids` | string[] | No |  |
| `iscsi_luns_ids` | string[] | No |  |
| `description` | string | No |  |
| `name` | string | No |  |

