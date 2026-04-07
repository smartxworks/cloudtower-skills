# Metric

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `unit` | [MetricUnit](MetricUnit.md) | Yes |  |
| `step` | integer (int32) | Yes |  |
| `samples` | MetricSample[] | No |  |
| `sample_streams` | MetricStream[] | No |  |
| `dropped` | boolean | Yes |  |
| `__typename` | enum: Metric | No |  |

