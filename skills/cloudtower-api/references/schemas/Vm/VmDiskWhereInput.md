# VmDiskWhereInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AND` | VmDiskWhereInput[] | No |  |
| `NOT` | VmDiskWhereInput[] | No |  |
| `OR` | VmDiskWhereInput[] | No |  |
| `boot` | integer (int32) | No |  |
| `boot_gt` | integer (int32) | No |  |
| `boot_gte` | integer (int32) | No |  |
| `boot_in` | integer[] | No |  |
| `boot_lt` | integer (int32) | No |  |
| `boot_lte` | integer (int32) | No |  |
| `boot_not` | integer (int32) | No |  |
| `boot_not_in` | integer[] | No |  |
| `bus` | any | No |  |
| `bus_in` | Bus[] | No |  |
| `bus_not` | any | No |  |
| `bus_not_in` | Bus[] | No |  |
| `cloud_init_image_name` | string | No |  |
| `cloud_init_image_name_contains` | string | No |  |
| `cloud_init_image_name_ends_with` | string | No |  |
| `cloud_init_image_name_gt` | string | No |  |
| `cloud_init_image_name_gte` | string | No |  |
| `cloud_init_image_name_in` | string[] | No |  |
| `cloud_init_image_name_lt` | string | No |  |
| `cloud_init_image_name_lte` | string | No |  |
| `cloud_init_image_name_not` | string | No |  |
| `cloud_init_image_name_not_contains` | string | No |  |
| `cloud_init_image_name_not_ends_with` | string | No |  |
| `cloud_init_image_name_not_in` | string[] | No |  |
| `cloud_init_image_name_not_starts_with` | string | No |  |
| `cloud_init_image_name_starts_with` | string | No |  |
| `cloud_init_image_path` | string | No |  |
| `cloud_init_image_path_contains` | string | No |  |
| `cloud_init_image_path_ends_with` | string | No |  |
| `cloud_init_image_path_gt` | string | No |  |
| `cloud_init_image_path_gte` | string | No |  |
| `cloud_init_image_path_in` | string[] | No |  |
| `cloud_init_image_path_lt` | string | No |  |
| `cloud_init_image_path_lte` | string | No |  |
| `cloud_init_image_path_not` | string | No |  |
| `cloud_init_image_path_not_contains` | string | No |  |
| `cloud_init_image_path_not_ends_with` | string | No |  |
| `cloud_init_image_path_not_in` | string[] | No |  |
| `cloud_init_image_path_not_starts_with` | string | No |  |
| `cloud_init_image_path_starts_with` | string | No |  |
| `device` | string | No |  |
| `device_contains` | string | No |  |
| `device_ends_with` | string | No |  |
| `device_gt` | string | No |  |
| `device_gte` | string | No |  |
| `device_in` | string[] | No |  |
| `device_lt` | string | No |  |
| `device_lte` | string | No |  |
| `device_not` | string | No |  |
| `device_not_contains` | string | No |  |
| `device_not_ends_with` | string | No |  |
| `device_not_in` | string[] | No |  |
| `device_not_starts_with` | string | No |  |
| `device_starts_with` | string | No |  |
| `disabled` | boolean | No |  |
| `disabled_not` | boolean | No |  |
| `elf_image` | any | No |  |
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
| `key` | integer (int32) | No |  |
| `key_gt` | integer (int32) | No |  |
| `key_gte` | integer (int32) | No |  |
| `key_in` | integer[] | No |  |
| `key_lt` | integer (int32) | No |  |
| `key_lte` | integer (int32) | No |  |
| `key_not` | integer (int32) | No |  |
| `key_not_in` | integer[] | No |  |
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
| `serial` | string | No |  |
| `serial_contains` | string | No |  |
| `serial_ends_with` | string | No |  |
| `serial_gt` | string | No |  |
| `serial_gte` | string | No |  |
| `serial_in` | string[] | No |  |
| `serial_lt` | string | No |  |
| `serial_lte` | string | No |  |
| `serial_not` | string | No |  |
| `serial_not_contains` | string | No |  |
| `serial_not_ends_with` | string | No |  |
| `serial_not_in` | string[] | No |  |
| `serial_not_starts_with` | string | No |  |
| `serial_starts_with` | string | No |  |
| `svt_image` | any | No |  |
| `type` | any | No |  |
| `type_in` | VmDiskType[] | No |  |
| `type_not` | any | No |  |
| `type_not_in` | VmDiskType[] | No |  |
| `unsafe_image_path` | string | No |  |
| `unsafe_image_path_contains` | string | No |  |
| `unsafe_image_path_ends_with` | string | No |  |
| `unsafe_image_path_gt` | string | No |  |
| `unsafe_image_path_gte` | string | No |  |
| `unsafe_image_path_in` | string[] | No |  |
| `unsafe_image_path_lt` | string | No |  |
| `unsafe_image_path_lte` | string | No |  |
| `unsafe_image_path_not` | string | No |  |
| `unsafe_image_path_not_contains` | string | No |  |
| `unsafe_image_path_not_ends_with` | string | No |  |
| `unsafe_image_path_not_in` | string[] | No |  |
| `unsafe_image_path_not_starts_with` | string | No |  |
| `unsafe_image_path_starts_with` | string | No |  |
| `unsafe_image_uuid` | string | No |  |
| `unsafe_image_uuid_contains` | string | No |  |
| `unsafe_image_uuid_ends_with` | string | No |  |
| `unsafe_image_uuid_gt` | string | No |  |
| `unsafe_image_uuid_gte` | string | No |  |
| `unsafe_image_uuid_in` | string[] | No |  |
| `unsafe_image_uuid_lt` | string | No |  |
| `unsafe_image_uuid_lte` | string | No |  |
| `unsafe_image_uuid_not` | string | No |  |
| `unsafe_image_uuid_not_contains` | string | No |  |
| `unsafe_image_uuid_not_ends_with` | string | No |  |
| `unsafe_image_uuid_not_in` | string[] | No |  |
| `unsafe_image_uuid_not_starts_with` | string | No |  |
| `unsafe_image_uuid_starts_with` | string | No |  |
| `unsafe_provision` | string | No |  |
| `unsafe_provision_contains` | string | No |  |
| `unsafe_provision_ends_with` | string | No |  |
| `unsafe_provision_gt` | string | No |  |
| `unsafe_provision_gte` | string | No |  |
| `unsafe_provision_in` | string[] | No |  |
| `unsafe_provision_lt` | string | No |  |
| `unsafe_provision_lte` | string | No |  |
| `unsafe_provision_not` | string | No |  |
| `unsafe_provision_not_contains` | string | No |  |
| `unsafe_provision_not_ends_with` | string | No |  |
| `unsafe_provision_not_in` | string[] | No |  |
| `unsafe_provision_not_starts_with` | string | No |  |
| `unsafe_provision_starts_with` | string | No |  |
| `vm` | any | No |  |
| `vm_volume` | any | No |  |

