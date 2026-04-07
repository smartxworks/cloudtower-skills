# VirtualPrivateCloud

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `associate_external_subnet_num` | integer (int32) | No |  |
| `description` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `isolation_policies` | NestedVirtualPrivateCloudIsolationPolicy[] | No |  |
| `local_id` | string | Yes |  |
| `mtu` | integer (int32) | No |  |
| `name` | string | Yes |  |
| `route_tables` | NestedVirtualPrivateCloudRouteTable[] | No |  |
| `security_groups` | NestedVirtualPrivateCloudSecurityGroup[] | No |  |
| `security_policies` | NestedVirtualPrivateCloudSecurityPolicy[] | No |  |
| `subnets` | NestedVirtualPrivateCloudSubnet[] | No |  |
| `vpc_service` | [NestedVirtualPrivateCloudService](NestedVirtualPrivateCloudService.md) | Yes |  |

