# RackTopoUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [RackTopoWhereInput](RackTopoWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `brick_topoes` | [BrickTopoWhereInput](BrickTopoWhereInput.md) | No |  |
| `cluster_id` | string | No |  |
| `zone_topo_id` | string | No |  |
| `height` | integer (int32) | No |  |
| `name` | string | No |  |

