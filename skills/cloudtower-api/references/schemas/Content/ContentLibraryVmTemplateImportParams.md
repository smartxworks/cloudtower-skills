# ContentLibraryVmTemplateImportParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vm_nics` | ContentLibraryImportVmNic[] | No |  |
| `disk_operate` | [ContentLibraryVmTemplateOvfDiskOperate](ContentLibraryVmTemplateOvfDiskOperate.md) | No |  |
| `ha` | boolean | No |  |
| `memory_unit` | [ByteUnit](ByteUnit.md) | No |  |
| `memory` | integer (int64) | No |  |
| `vcpu` | integer (int32) | No |  |
| `cpu_cores` | integer (int32) | No |  |
| `cpu_sockets` | integer (int32) | No |  |
| `description` | string | No |  |
| `name` | string | Yes |  |
| `upload_tasks` | string[] | Yes |  |
| `parsed_ovf` | [ParsedOVF](ParsedOVF.md) | Yes |  |
| `cluster_id` | string | Yes |  |

