# Nic

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `driver` | string | No |  |
| `driver_state` | any | No |  |
| `entityAsyncStatus` | any | No |  |
| `gateway_ip` | string | No |  |
| `host` | [NestedHost](NestedHost.md) | Yes |  |
| `ibdev` | string | No |  |
| `id` | string | Yes |  |
| `iommu_status` | any | No |  |
| `ip_address` | string | No |  |
| `is_sriov` | boolean | No |  |
| `labels` | NestedLabel[] | No |  |
| `local_id` | string | Yes |  |
| `mac_address` | string | Yes |  |
| `max_vf_num` | integer (int32) | No |  |
| `model` | string | No |  |
| `mtu` | integer (int32) | Yes |  |
| `name` | string | Yes |  |
| `nic_uuid` | string | No |  |
| `physical` | boolean | Yes |  |
| `rdma_enabled` | boolean | No |  |
| `running` | boolean | Yes |  |
| `speed` | integer (int64) | No |  |
| `subnet_mask` | string | No |  |
| `total_vf_num` | integer (int32) | No |  |
| `type` | any | No |  |
| `up` | boolean | Yes |  |
| `used_vf_num` | integer (int32) | No |  |
| `user_usage` | any | No |  |
| `vds` | any | No |  |
| `vms` | NestedVm[] | No |  |

