# EntityFilterUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [EntityFilterWhereInput](EntityFilterWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `exclude_vms` | [VmWhereInput](VmWhereInput.md) | No |  |
| `clusters` | [ClusterWhereInput](ClusterWhereInput.md) | No |  |
| `apply_to_all_clusters` | boolean | No |  |
| `rules` | FilterRuleInput[] | No |  |
| `name` | string | No |  |

