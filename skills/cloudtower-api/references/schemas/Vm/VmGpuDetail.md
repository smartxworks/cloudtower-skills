# VmGpuDetail

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vgpu_instance_on_vm_num` | integer (int32) | No |  |
| `vgpu_instance_num` | integer (int32) | No |  |
| `user_vgpu_type_name` | string | No |  |
| `user_vgpu_type_id` | string | No |  |
| `user_usage` | any | No |  |
| `status` | [GpuDeviceStatus](GpuDeviceStatus.md) | Yes |  |
| `name` | string | Yes |  |
| `model` | string | Yes |  |
| `mdev_supported_types` | NestedVgpuType[] | No |  |
| `local_id` | string | Yes |  |
| `local_created_at` | string | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `is_nvidia_vfs_supported` | boolean | No |  |
| `is_nvidia_vfs_enabled` | boolean | No |  |
| `is_nvidia_tools_ready` | boolean | No |  |
| `id` | string | Yes |  |
| `host` | [NestedHost](NestedHost.md) | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `driver_info` | any | No |  |
| `description` | string | Yes |  |
| `bus_location` | string | Yes |  |
| `brand` | string | Yes |  |
| `available_vgpus_num` | integer (int32) | No |  |
| `assigned_vgpus_num` | integer (int32) | No |  |

