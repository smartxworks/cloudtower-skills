# VirtualPrivateCloudNatGatewayCreationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `external_ips` | VirtualPrivateCloudExternalIpsParams[] | No |  |
| `external_ip` | string | No |  |
| `external_subnet_group_id` | string | No |  |
| `external_subnet_id` | string | No |  |
| `dnat_rules` | VirtualPrivateCloudDnatRuleParams[] | No |  |
| `enable_dnat` | boolean | Yes |  |
| `enable_snat` | boolean | Yes |  |
| `vpc_id` | string | Yes |  |
| `name` | string | Yes |  |

