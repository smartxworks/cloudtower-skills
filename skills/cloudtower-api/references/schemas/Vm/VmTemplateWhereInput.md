# VmTemplateWhereInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AND` | VmTemplateWhereInput[] | No |  |
| `NOT` | VmTemplateWhereInput[] | No |  |
| `OR` | VmTemplateWhereInput[] | No |  |
| `clock_offset` | any | No |  |
| `clock_offset_in` | VmClockOffset[] | No |  |
| `clock_offset_not` | any | No |  |
| `clock_offset_not_in` | VmClockOffset[] | No |  |
| `cloud_init_supported` | boolean | No |  |
| `cloud_init_supported_not` | boolean | No |  |
| `cluster` | any | No |  |
| `content_library_vm_template` | any | No |  |
| `cpu_model` | string | No |  |
| `cpu_model_contains` | string | No |  |
| `cpu_model_ends_with` | string | No |  |
| `cpu_model_gt` | string | No |  |
| `cpu_model_gte` | string | No |  |
| `cpu_model_in` | string[] | No |  |
| `cpu_model_lt` | string | No |  |
| `cpu_model_lte` | string | No |  |
| `cpu_model_not` | string | No |  |
| `cpu_model_not_contains` | string | No |  |
| `cpu_model_not_ends_with` | string | No |  |
| `cpu_model_not_in` | string[] | No |  |
| `cpu_model_not_starts_with` | string | No |  |
| `cpu_model_starts_with` | string | No |  |
| `description` | string | No |  |
| `description_contains` | string | No |  |
| `description_ends_with` | string | No |  |
| `description_gt` | string | No |  |
| `description_gte` | string | No |  |
| `description_in` | string[] | No |  |
| `description_lt` | string | No |  |
| `description_lte` | string | No |  |
| `description_not` | string | No |  |
| `description_not_contains` | string | No |  |
| `description_not_ends_with` | string | No |  |
| `description_not_in` | string[] | No |  |
| `description_not_starts_with` | string | No |  |
| `description_starts_with` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `entityAsyncStatus_in` | EntityAsyncStatus[] | No |  |
| `entityAsyncStatus_not` | any | No |  |
| `entityAsyncStatus_not_in` | EntityAsyncStatus[] | No |  |
| `firmware` | any | No |  |
| `firmware_in` | VmFirmware[] | No |  |
| `firmware_not` | any | No |  |
| `firmware_not_in` | VmFirmware[] | No |  |
| `ha` | boolean | No |  |
| `ha_not` | boolean | No |  |
| `id` | string | No |  |
| `id_contains` | string | No |  |
| `id_ends_with` | string | No |  |
| `id_gt` | string | No |  |
| `id_gte` | string | No |  |
| `id_in` | string[] | No |  |
| `id_lt` | string | No |  |
| `id_lte` | string | No |  |
| `id_not` | string | No |  |
| `id_not_contains` | string | No |  |
| `id_not_ends_with` | string | No |  |
| `id_not_in` | string[] | No |  |
| `id_not_starts_with` | string | No |  |
| `id_starts_with` | string | No |  |
| `io_policy` | any | No |  |
| `io_policy_in` | VmDiskIoPolicy[] | No |  |
| `io_policy_not` | any | No |  |
| `io_policy_not_in` | VmDiskIoPolicy[] | No |  |
| `labels_every` | any | No |  |
| `labels_none` | any | No |  |
| `labels_some` | any | No |  |
| `local_created_at` | string | No |  |
| `local_created_at_gt` | string | No |  |
| `local_created_at_gte` | string | No |  |
| `local_created_at_in` | string[] | No |  |
| `local_created_at_lt` | string | No |  |
| `local_created_at_lte` | string | No |  |
| `local_created_at_not` | string | No |  |
| `local_created_at_not_in` | string[] | No |  |
| `local_id` | string | No |  |
| `local_id_contains` | string | No |  |
| `local_id_ends_with` | string | No |  |
| `local_id_gt` | string | No |  |
| `local_id_gte` | string | No |  |
| `local_id_in` | string[] | No |  |
| `local_id_lt` | string | No |  |
| `local_id_lte` | string | No |  |
| `local_id_not` | string | No |  |
| `local_id_not_contains` | string | No |  |
| `local_id_not_ends_with` | string | No |  |
| `local_id_not_in` | string[] | No |  |
| `local_id_not_starts_with` | string | No |  |
| `local_id_starts_with` | string | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_bandwidth_gt` | integer (int64) | No |  |
| `max_bandwidth_gte` | integer (int64) | No |  |
| `max_bandwidth_in` | integer[] | No |  |
| `max_bandwidth_lt` | integer (int64) | No |  |
| `max_bandwidth_lte` | integer (int64) | No |  |
| `max_bandwidth_not` | integer (int64) | No |  |
| `max_bandwidth_not_in` | integer[] | No |  |
| `max_bandwidth_policy` | any | No |  |
| `max_bandwidth_policy_in` | VmDiskIoRestrictType[] | No |  |
| `max_bandwidth_policy_not` | any | No |  |
| `max_bandwidth_policy_not_in` | VmDiskIoRestrictType[] | No |  |
| `max_iops` | integer (int32) | No |  |
| `max_iops_gt` | integer (int32) | No |  |
| `max_iops_gte` | integer (int32) | No |  |
| `max_iops_in` | integer[] | No |  |
| `max_iops_lt` | integer (int32) | No |  |
| `max_iops_lte` | integer (int32) | No |  |
| `max_iops_not` | integer (int32) | No |  |
| `max_iops_not_in` | integer[] | No |  |
| `max_iops_policy` | any | No |  |
| `max_iops_policy_in` | VmDiskIoRestrictType[] | No |  |
| `max_iops_policy_not` | any | No |  |
| `max_iops_policy_not_in` | VmDiskIoRestrictType[] | No |  |
| `memory` | integer (int64) | No |  |
| `memory_gt` | integer (int64) | No |  |
| `memory_gte` | integer (int64) | No |  |
| `memory_in` | integer[] | No |  |
| `memory_lt` | integer (int64) | No |  |
| `memory_lte` | integer (int64) | No |  |
| `memory_not` | integer (int64) | No |  |
| `memory_not_in` | integer[] | No |  |
| `name` | string | No |  |
| `name_contains` | string | No |  |
| `name_ends_with` | string | No |  |
| `name_gt` | string | No |  |
| `name_gte` | string | No |  |
| `name_in` | string[] | No |  |
| `name_lt` | string | No |  |
| `name_lte` | string | No |  |
| `name_not` | string | No |  |
| `name_not_contains` | string | No |  |
| `name_not_ends_with` | string | No |  |
| `name_not_in` | string[] | No |  |
| `name_not_starts_with` | string | No |  |
| `name_starts_with` | string | No |  |
| `size` | integer (int64) | No |  |
| `size_gt` | integer (int64) | No |  |
| `size_gte` | integer (int64) | No |  |
| `size_in` | integer[] | No |  |
| `size_lt` | integer (int64) | No |  |
| `size_lte` | integer (int64) | No |  |
| `size_not` | integer (int64) | No |  |
| `size_not_in` | integer[] | No |  |
| `vcpu` | integer (int32) | No |  |
| `vcpu_gt` | integer (int32) | No |  |
| `vcpu_gte` | integer (int32) | No |  |
| `vcpu_in` | integer[] | No |  |
| `vcpu_lt` | integer (int32) | No |  |
| `vcpu_lte` | integer (int32) | No |  |
| `vcpu_not` | integer (int32) | No |  |
| `vcpu_not_in` | integer[] | No |  |
| `video_type` | string | No |  |
| `video_type_contains` | string | No |  |
| `video_type_ends_with` | string | No |  |
| `video_type_gt` | string | No |  |
| `video_type_gte` | string | No |  |
| `video_type_in` | string[] | No |  |
| `video_type_lt` | string | No |  |
| `video_type_lte` | string | No |  |
| `video_type_not` | string | No |  |
| `video_type_not_contains` | string | No |  |
| `video_type_not_ends_with` | string | No |  |
| `video_type_not_in` | string[] | No |  |
| `video_type_not_starts_with` | string | No |  |
| `video_type_starts_with` | string | No |  |
| `win_opt` | boolean | No |  |
| `win_opt_not` | boolean | No |  |

