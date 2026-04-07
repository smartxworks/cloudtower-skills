# GetTopNMetricInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `metrics` | string[] | Yes |  |
| `clusters` | [ClusterWhereInput](ClusterWhereInput.md) | Yes |  |
| `type` | enum: top, bottom | Yes |  |
| `n` | integer (int32) | Yes |  |
| `range` | string | Yes |  |

