# EntityFilterCreationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `exclude_vms` | [VmWhereInput](VmWhereInput.md) | No |  |
| `clusters` | [ClusterWhereInput](ClusterWhereInput.md) | No |  |
| `apply_to_all_clusters` | boolean | No |  |
| `rules` | FilterRuleInput[] | Yes |  |
| `name` | string | Yes |  |

