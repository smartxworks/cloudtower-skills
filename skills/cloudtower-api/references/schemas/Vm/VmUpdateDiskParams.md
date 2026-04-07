# VmUpdateDiskParams

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
| `content_library_image_id` | string | No |  |
| `elf_image_id` | string | No |  |
| `vm_volume_id` | string | No |  |
| `vm_disk_id` | string | Yes |  |
| `bus` | [Bus](Bus.md) | No |  |

