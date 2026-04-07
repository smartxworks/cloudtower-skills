# VirtualPrivateCloudSubnet

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cidr` | string | Yes |  |
| `description` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `gateway` | string | No |  |
| `id` | string | Yes |  |
| `ip_pools` | NestedVpcSubnetIpPooType[] | No |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `route_table` | [NestedVirtualPrivateCloudRouteTable](NestedVirtualPrivateCloudRouteTable.md) | Yes |  |
| `total_ip_count` | integer (int32) | No |  |
| `unused_ip_count` | integer (int32) | No |  |
| `vpc` | [NestedVirtualPrivateCloud](NestedVirtualPrivateCloud.md) | Yes |  |

