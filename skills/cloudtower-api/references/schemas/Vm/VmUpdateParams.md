# VmUpdateParams

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
| `vcpu` | integer (int32) | No |  |
| `ha_priority` | [VmHaPriority](VmHaPriority.md) | No |  |
| `ha` | boolean | No |  |
| `memory_unit` | [ByteUnit](ByteUnit.md) | No |  |
| `memory` | integer (int64) | No |  |
| `cpu_cores` | integer (int32) | No |  |
| `cpu_sockets` | integer (int32) | No |  |
| `description` | string | No |  |
| `name` | string | No |  |

