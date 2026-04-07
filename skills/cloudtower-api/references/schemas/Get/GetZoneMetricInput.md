# GetZoneMetricInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `range` | string | Yes |  |
| `type` | enum: primary-to-secondary, secondary-to-primary | Yes |  |
| `clusters` | [ClusterWhereInput](ClusterWhereInput.md) | Yes |  |
| `metrics` | string[] | Yes |  |

