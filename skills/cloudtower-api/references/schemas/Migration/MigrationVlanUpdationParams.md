# MigrationVlanUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | No |  |
| `where` | [VlanWhereInput](VlanWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `extra_ip` | ExtraIp[] | No |  |
| `subnetmask` | string | No |  |
| `gateway_ip` | string | No |  |
| `vlan_id` | [VlanId](VlanId.md) | No |  |

