# UpdateVmVolumeParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `where` | [VmVolumeWhereInput](VmVolumeWhereInput.md) | Yes |  |
| `data` | object | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `size_unit` | [ByteUnit](ByteUnit.md) | No |  |
| `size` | integer (int64) | No |  |
| `description` | string | No |  |
| `name` | string | No |  |

