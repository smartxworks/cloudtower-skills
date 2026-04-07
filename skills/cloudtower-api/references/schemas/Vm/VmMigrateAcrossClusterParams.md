# VmMigrateAcrossClusterParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [VmWhereInput](VmWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vm_config` | [MigrateVmConfig](MigrateVmConfig.md) | Yes |  |
| `cluster_id` | string | Yes |  |
| `host_id` | string | No |  |

