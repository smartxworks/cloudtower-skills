# GpuDevice

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `assigned_vgpus_num` | integer (int32) | No |  |
| `available_vgpus_num` | integer (int32) | No |  |
| `brand` | string | Yes |  |
| `bus_location` | string | Yes |  |
| `description` | string | Yes |  |
| `driver_info` | any | No |  |
| `entityAsyncStatus` | any | No |  |
| `host` | [NestedHost](NestedHost.md) | Yes |  |
| `id` | string | Yes |  |
| `is_nvidia_tools_ready` | boolean | No |  |
| `is_nvidia_vfs_enabled` | boolean | No |  |
| `is_nvidia_vfs_supported` | boolean | No |  |
| `labels` | NestedLabel[] | No |  |
| `local_created_at` | string | Yes |  |
| `local_id` | string | Yes |  |
| `mdev_supported_types` | NestedVgpuType[] | No |  |
| `model` | string | Yes |  |
| `name` | string | Yes |  |
| `status` | [GpuDeviceStatus](GpuDeviceStatus.md) | Yes |  |
| `user_usage` | any | No |  |
| `user_vgpu_type_id` | string | No |  |
| `user_vgpu_type_name` | string | No |  |
| `vgpu_instance_num` | integer (int32) | No |  |
| `vms` | NestedVm[] | No |  |

