# VirtualPrivateCloudExternalSubnetGroup

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `edge_gateway_group` | [NestedVirtualPrivateCloudEdgeGatewayGroup](NestedVirtualPrivateCloudEdgeGatewayGroup.md) | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `exclusive` | boolean | Yes |  |
| `external_subnets_spec` | NestedVirtualPrivateCloudExternalSubnetGroupExternalSubnetsSpec[] | Yes |  |
| `floating_ips` | NestedVirtualPrivateCloudFloatingIp[] | No |  |
| `id` | string | Yes |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `nat_gateways` | NestedVirtualPrivateCloudNatGateway[] | No |  |
| `router_gateways` | NestedVirtualPrivateCloudRouterGateway[] | No |  |
| `shared_in_edge_gateway_group` | boolean | Yes |  |
| `vpc` | any | No |  |

