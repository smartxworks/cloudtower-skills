# VmUpdateNicParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [VmWhereInput](VmWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vpc_nic` | [UpdateVpcNicPayloads](UpdateVpcNicPayloads.md) | No |  |
| `subnet_mask` | string | No |  |
| `gateway` | string | No |  |
| `ip_address` | string | No |  |
| `nic_id` | string | No |  |
| `connect_vlan_id` | string | No |  |
| `mirror` | boolean | No |  |
| `model` | [VmNicModel](VmNicModel.md) | No |  |
| `enabled` | boolean | No |  |
| `mac_address` | string | No |  |
| `nic_index` | integer (int32) | Yes |  |

