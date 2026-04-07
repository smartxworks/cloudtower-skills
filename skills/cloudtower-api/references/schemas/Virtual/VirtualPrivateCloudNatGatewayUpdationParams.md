# VirtualPrivateCloudNatGatewayUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [VirtualPrivateCloudNatGatewayWhereInput](VirtualPrivateCloudNatGatewayWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `external_ips` | VirtualPrivateCloudExternalIpsParams[] | No |  |
| `external_ip` | string | No |  |
| `dnat_rules` | VirtualPrivateCloudDnatRuleParams[] | No |  |
| `enable_dnat` | boolean | No |  |
| `enable_snat` | boolean | No |  |
| `name` | string | No |  |

