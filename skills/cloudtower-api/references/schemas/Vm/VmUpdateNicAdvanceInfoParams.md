# VmUpdateNicAdvanceInfoParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [VmNicWhereInput](VmNicWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mirror` | boolean | No |  |
| `enabled` | boolean | No |  |
| `mac_address` | string | No |  |
| `nic_id` | string | No |  |
| `connect_vlan_id` | string | No |  |

