# Vlan

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `entityAsyncStatus` | any | No |  |
| `gateway_ip` | string | No |  |
| `gateway_subnetmask` | string | No |  |
| `id` | string | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `local_id` | string | Yes |  |
| `mode_type` | any | No |  |
| `name` | string | Yes |  |
| `network_ids` | string[] | Yes |  |
| `qos_burst` | number (double) | No |  |
| `qos_max_bandwidth` | number (double) | No |  |
| `qos_min_bandwidth` | number (double) | No |  |
| `qos_priority` | integer (int32) | No |  |
| `subnetmask` | string | No |  |
| `type` | [NetworkType](NetworkType.md) | Yes |  |
| `vds` | [NestedVds](NestedVds.md) | Yes |  |
| `vlan_id` | integer (int32) | Yes |  |
| `vm_nics` | NestedVmNic[] | No |  |

