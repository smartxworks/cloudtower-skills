# BrickTopoUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [BrickTopoWhereInput](BrickTopoWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tag_position_in_brick` | NestedTagPosition[] | No |  |
| `node_topoes` | [NodeTopoWhereInput](NodeTopoWhereInput.md) | No |  |
| `capacity` | [NestedCapacity](NestedCapacity.md) | No |  |
| `height` | integer (int32) | No |  |
| `name` | string | No |  |
| `position` | integer (int32) | No |  |

