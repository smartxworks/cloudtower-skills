# NfsExportUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | No |  |
| `where` | [NfsExportWhereInput](NfsExportWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ec_m` | number (double) | No |  |
| `ec_k` | number (double) | No |  |
| `resiliency_type` | [ResiliencyType](ResiliencyType.md) | No |  |
| `replica_num` | number (double) | No |  |
| `ip_whitelist` | string | No |  |
| `name` | string | No |  |

