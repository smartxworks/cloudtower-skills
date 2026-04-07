# HostUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [HostWhereInput](HostWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ipmi` | [HostBatchCreateIpmiInput](HostBatchCreateIpmiInput.md) | No |  |
| `scvm_name` | string | No |  |
| `name` | string | No |  |

