# ContentLibraryVmTemplate

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `architecture` | [Architecture](Architecture.md) | Yes |  |
| `clock_offset` | any | No |  |
| `cloud_init_supported` | boolean | Yes |  |
| `clusters` | NestedCluster[] | No |  |
| `cpu` | any | No |  |
| `cpu_model` | string | No |  |
| `createdAt` | string | Yes |  |
| `description` | string | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `firmware` | any | No |  |
| `ha` | boolean | No |  |
| `id` | string | Yes |  |
| `io_policy` | any | No |  |
| `labels` | NestedLabel[] | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_bandwidth_policy` | any | No |  |
| `max_iops` | integer (int32) | No |  |
| `max_iops_policy` | any | No |  |
| `memory` | integer (int64) | Yes |  |
| `name` | string | Yes |  |
| `os` | string | No |  |
| `size` | integer (int64) | Yes |  |
| `template_config` | any | No |  |
| `usage` | any | No |  |
| `vcpu` | integer (int32) | Yes |  |
| `video_type` | string | No |  |
| `vm_disks` | NestedContentLibraryVmTemplateDisk[] | No |  |
| `vm_nics` | NestedContentLibraryVmTemplateNic[] | No |  |
| `vm_template_uuids` | string[] | Yes |  |
| `vm_templates` | NestedVmTemplate[] | No |  |
| `win_opt` | boolean | No |  |
| `zbs_storage_info` | NestedZbsStorageInfo[] | No |  |

