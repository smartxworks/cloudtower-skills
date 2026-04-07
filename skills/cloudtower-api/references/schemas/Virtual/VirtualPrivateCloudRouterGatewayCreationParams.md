# VirtualPrivateCloudRouterGatewayCreationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `rules` | VirtualPrivateCloudRouterGatewayRuleInputType[] | Yes |  |
| `associated_subnets_ids` | string[] | Yes |  |
| `external_ips` | VirtualPrivateCloudExternalIpsParams[] | No |  |
| `external_subnet_group_id` | string | No |  |
| `external_ip` | string | No |  |
| `external_subnet_id` | string | No |  |
| `vpc_id` | string | Yes |  |
| `name` | string | Yes |  |

