# PciDevice

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `bus` | string | Yes |  |
| `bus_location` | string | Yes |  |
| `class_code` | string | Yes |  |
| `device_type` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `function_num` | string | Yes |  |
| `host` | [NestedHost](NestedHost.md) | Yes |  |
| `id` | string | Yes |  |
| `iommu_status` | any | No |  |
| `local_id` | string | Yes |  |
| `mdev_state` | any | No |  |
| `mdev_type_id` | string | No |  |
| `name` | string | Yes |  |
| `partitioning_state` | any | No |  |
| `product_id` | string | Yes |  |
| `slot` | string | Yes |  |
| `sriov_state` | any | No |  |
| `subsystem_product_id` | string | Yes |  |
| `subsystem_vendor_id` | string | Yes |  |
| `total_mdev_num` | integer (int32) | No |  |
| `total_partitioning_num` | integer (int32) | No |  |
| `total_vf_num` | integer (int32) | No |  |
| `usage_type` | any | No |  |
| `used_mdev_num` | integer (int32) | No |  |
| `used_partitioning_num` | integer (int32) | No |  |
| `used_vf_num` | integer (int32) | No |  |
| `user_usage` | any | No |  |
| `vendor_id` | string | Yes |  |
| `verdor_name` | string | Yes |  |

