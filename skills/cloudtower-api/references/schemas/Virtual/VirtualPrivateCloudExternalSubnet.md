# VirtualPrivateCloudExternalSubnet

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cidr` | string | Yes |  |
| `description` | string | No |  |
| `edge_gateway` | any | No |  |
| `entityAsyncStatus` | any | No |  |
| `exclusive` | boolean | Yes |  |
| `floating_ip_cidr` | string | No |  |
| `floating_ips` | NestedVirtualPrivateCloudFloatingIp[] | No |  |
| `gateway` | string | Yes |  |
| `id` | string | Yes |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `nat_gateway_cidr` | string | No |  |
| `nat_gateways` | NestedVirtualPrivateCloudNatGateway[] | No |  |
| `router_gateway_cidr` | string | No |  |
| `router_gateways` | NestedVirtualPrivateCloudRouterGateway[] | No |  |
| `vlan` | [NestedVlan](NestedVlan.md) | Yes |  |
| `vpc` | any | No |  |

