# GpuDeviceUsageUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [GpuDeviceWhereInput](GpuDeviceWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vgpu_spec` | string | No |  |
| `usage` | [GpuDeviceUsage](GpuDeviceUsage.md) | No |  |

