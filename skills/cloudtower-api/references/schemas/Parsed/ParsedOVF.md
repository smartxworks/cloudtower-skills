# ParsedOVF

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `firmware` | [VmFirmware](VmFirmware.md) | Yes |  |
| `disks` | OvfDisk[] | Yes |  |
| `nics` | OvfNic[] | Yes |  |
| `memory` | integer (int64) | Yes |  |
| `cpu` | [OvfCpu](OvfCpu.md) | Yes |  |
| `vcpu` | integer (int32) | Yes |  |
| `description` | string | No |  |
| `name` | string | Yes |  |

