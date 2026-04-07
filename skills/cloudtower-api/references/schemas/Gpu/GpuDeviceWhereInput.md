# GpuDeviceWhereInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AND` | GpuDeviceWhereInput[] | No |  |
| `NOT` | GpuDeviceWhereInput[] | No |  |
| `OR` | GpuDeviceWhereInput[] | No |  |
| `assigned_vgpus_num` | integer (int32) | No |  |
| `assigned_vgpus_num_gt` | integer (int32) | No |  |
| `assigned_vgpus_num_gte` | integer (int32) | No |  |
| `assigned_vgpus_num_in` | integer[] | No |  |
| `assigned_vgpus_num_lt` | integer (int32) | No |  |
| `assigned_vgpus_num_lte` | integer (int32) | No |  |
| `assigned_vgpus_num_not` | integer (int32) | No |  |
| `assigned_vgpus_num_not_in` | integer[] | No |  |
| `available_vgpus_num` | integer (int32) | No |  |
| `available_vgpus_num_gt` | integer (int32) | No |  |
| `available_vgpus_num_gte` | integer (int32) | No |  |
| `available_vgpus_num_in` | integer[] | No |  |
| `available_vgpus_num_lt` | integer (int32) | No |  |
| `available_vgpus_num_lte` | integer (int32) | No |  |
| `available_vgpus_num_not` | integer (int32) | No |  |
| `available_vgpus_num_not_in` | integer[] | No |  |
| `brand` | string | No |  |
| `brand_contains` | string | No |  |
| `brand_ends_with` | string | No |  |
| `brand_gt` | string | No |  |
| `brand_gte` | string | No |  |
| `brand_in` | string[] | No |  |
| `brand_lt` | string | No |  |
| `brand_lte` | string | No |  |
| `brand_not` | string | No |  |
| `brand_not_contains` | string | No |  |
| `brand_not_ends_with` | string | No |  |
| `brand_not_in` | string[] | No |  |
| `brand_not_starts_with` | string | No |  |
| `brand_starts_with` | string | No |  |
| `bus_location` | string | No |  |
| `bus_location_contains` | string | No |  |
| `bus_location_ends_with` | string | No |  |
| `bus_location_gt` | string | No |  |
| `bus_location_gte` | string | No |  |
| `bus_location_in` | string[] | No |  |
| `bus_location_lt` | string | No |  |
| `bus_location_lte` | string | No |  |
| `bus_location_not` | string | No |  |
| `bus_location_not_contains` | string | No |  |
| `bus_location_not_ends_with` | string | No |  |
| `bus_location_not_in` | string[] | No |  |
| `bus_location_not_starts_with` | string | No |  |
| `bus_location_starts_with` | string | No |  |
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
| `host` | any | No |  |
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
| `is_nvidia_tools_ready` | boolean | No |  |
| `is_nvidia_tools_ready_not` | boolean | No |  |
| `is_nvidia_vfs_enabled` | boolean | No |  |
| `is_nvidia_vfs_enabled_not` | boolean | No |  |
| `is_nvidia_vfs_supported` | boolean | No |  |
| `is_nvidia_vfs_supported_not` | boolean | No |  |
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
| `model` | string | No |  |
| `model_contains` | string | No |  |
| `model_ends_with` | string | No |  |
| `model_gt` | string | No |  |
| `model_gte` | string | No |  |
| `model_in` | string[] | No |  |
| `model_lt` | string | No |  |
| `model_lte` | string | No |  |
| `model_not` | string | No |  |
| `model_not_contains` | string | No |  |
| `model_not_ends_with` | string | No |  |
| `model_not_in` | string[] | No |  |
| `model_not_starts_with` | string | No |  |
| `model_starts_with` | string | No |  |
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
| `status` | any | No |  |
| `status_in` | GpuDeviceStatus[] | No |  |
| `status_not` | any | No |  |
| `status_not_in` | GpuDeviceStatus[] | No |  |
| `user_usage` | any | No |  |
| `user_usage_in` | GpuDeviceUsage[] | No |  |
| `user_usage_not` | any | No |  |
| `user_usage_not_in` | GpuDeviceUsage[] | No |  |
| `user_vgpu_type_id` | string | No |  |
| `user_vgpu_type_id_contains` | string | No |  |
| `user_vgpu_type_id_ends_with` | string | No |  |
| `user_vgpu_type_id_gt` | string | No |  |
| `user_vgpu_type_id_gte` | string | No |  |
| `user_vgpu_type_id_in` | string[] | No |  |
| `user_vgpu_type_id_lt` | string | No |  |
| `user_vgpu_type_id_lte` | string | No |  |
| `user_vgpu_type_id_not` | string | No |  |
| `user_vgpu_type_id_not_contains` | string | No |  |
| `user_vgpu_type_id_not_ends_with` | string | No |  |
| `user_vgpu_type_id_not_in` | string[] | No |  |
| `user_vgpu_type_id_not_starts_with` | string | No |  |
| `user_vgpu_type_id_starts_with` | string | No |  |
| `user_vgpu_type_name` | string | No |  |
| `user_vgpu_type_name_contains` | string | No |  |
| `user_vgpu_type_name_ends_with` | string | No |  |
| `user_vgpu_type_name_gt` | string | No |  |
| `user_vgpu_type_name_gte` | string | No |  |
| `user_vgpu_type_name_in` | string[] | No |  |
| `user_vgpu_type_name_lt` | string | No |  |
| `user_vgpu_type_name_lte` | string | No |  |
| `user_vgpu_type_name_not` | string | No |  |
| `user_vgpu_type_name_not_contains` | string | No |  |
| `user_vgpu_type_name_not_ends_with` | string | No |  |
| `user_vgpu_type_name_not_in` | string[] | No |  |
| `user_vgpu_type_name_not_starts_with` | string | No |  |
| `user_vgpu_type_name_starts_with` | string | No |  |
| `vgpu_instance_num` | integer (int32) | No |  |
| `vgpu_instance_num_gt` | integer (int32) | No |  |
| `vgpu_instance_num_gte` | integer (int32) | No |  |
| `vgpu_instance_num_in` | integer[] | No |  |
| `vgpu_instance_num_lt` | integer (int32) | No |  |
| `vgpu_instance_num_lte` | integer (int32) | No |  |
| `vgpu_instance_num_not` | integer (int32) | No |  |
| `vgpu_instance_num_not_in` | integer[] | No |  |
| `vms_every` | any | No |  |
| `vms_none` | any | No |  |
| `vms_some` | any | No |  |

