# ClusterEnablePinInPerformanceParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [ClusterWhereInput](ClusterWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `hosts` | ClusterEnablePinInPerformanceHostType[] | Yes |  |
| `cluster_default_prio_percentage` | number (double) | Yes |  |

