# VmUpdateIoPolicyParams

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
| `each_disk` | VmUpdateEachDiskIoPolicyParams[] | No |  |
| `whole_vm` | [VmRestrictIoParamsData](VmRestrictIoParamsData.md) | No |  |
| `io_policy` | any | No |  |

