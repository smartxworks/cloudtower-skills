# VmUpdateAdvancedOptionsParams

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
| `video_type` | [VmVideoType](VmVideoType.md) | No |  |
| `windows_optimize` | boolean | No |  |
| `cpu_model` | string | No |  |
| `clock_offset` | [VmClockOffset](VmClockOffset.md) | No |  |

