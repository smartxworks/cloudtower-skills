# VmVlanUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [VlanWhereInput](VlanWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `qos_burst_unit` | [ByteUnit](ByteUnit.md) | No |  |
| `qos_burst` | integer (int64) | No |  |
| `qos_max_bandwidth_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `qos_max_bandwidth` | integer (int64) | No |  |
| `qos_min_bandwidth_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `qos_min_bandwidth` | integer (int64) | No |  |
| `qos_priority` | [Priority](Priority.md) | No |  |
| `mode_type` | [VlanModeType](VlanModeType.md) | No |  |
| `network_ids` | string[] | No |  |
| `vlan_id` | [VlanId](VlanId.md) | No |  |
| `name` | string | No |  |

