# VirtualPrivateCloudRouterGateway

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `associated_subnets` | NestedVirtualPrivateCloudSubnet[] | No |  |
| `entityAsyncStatus` | any | No |  |
| `external_ip` | string | No |  |
| `external_ips` | NestedVpcGatewaysCommonExternalIpsType[] | No |  |
| `external_subnet` | any | No |  |
| `external_subnet_group` | any | No |  |
| `id` | string | Yes |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `nexthop_ip` | string | No |  |
| `rules` | NestedVpcRouterGatewayRuleType[] | Yes |  |
| `vpc` | [NestedVirtualPrivateCloud](NestedVirtualPrivateCloud.md) | Yes |  |

