# VmNic

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `dpi_enabled` | boolean | No |  |
| `egress_rate_limit_burst_in_bit` | number (double) | No |  |
| `egress_rate_limit_enabled` | boolean | No |  |
| `egress_rate_limit_max_rate_in_bitps` | number (double) | No |  |
| `enabled` | boolean | No |  |
| `gateway` | string | No |  |
| `guest_info_ip_addresses` | string[] | Yes |  |
| `guest_info_ip_addresses_v6` | string[] | Yes |  |
| `id` | string | Yes |  |
| `ingress_rate_limit_burst_in_bit` | number (double) | No |  |
| `ingress_rate_limit_enabled` | boolean | No |  |
| `ingress_rate_limit_max_rate_in_bitps` | number (double) | No |  |
| `interface_id` | string | No |  |
| `ip_address` | string | No |  |
| `local_id` | string | Yes |  |
| `mac_address` | string | No |  |
| `mirror` | boolean | No |  |
| `model` | any | No |  |
| `nic` | any | No |  |
| `order` | integer (int32) | No |  |
| `subnet_mask` | string | No |  |
| `type` | any | No |  |
| `vlan` | any | No |  |
| `vm` | [NestedVm](NestedVm.md) | Yes |  |
| `vpc_nic` | any | No |  |

