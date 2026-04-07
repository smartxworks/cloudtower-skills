# VirtualPrivateCloudRouteTable

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `default_for_vpc` | boolean | No |  |
| `description` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `routes` | NestedVirtualPrivateCloudRoute[] | No |  |
| `subnets` | NestedVirtualPrivateCloudSubnet[] | No |  |
| `vpc` | [NestedVirtualPrivateCloud](NestedVirtualPrivateCloud.md) | Yes |  |

