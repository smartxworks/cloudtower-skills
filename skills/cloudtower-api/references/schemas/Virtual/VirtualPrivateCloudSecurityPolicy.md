# VirtualPrivateCloudSecurityPolicy

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apply_to` | NestedVirtualPrivateCloudSecurityPolicyApply[] | Yes |  |
| `description` | string | No |  |
| `egress` | NestedVirtualPrivateCloudNetworkPolicyRule[] | No |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `ingress` | NestedVirtualPrivateCloudNetworkPolicyRule[] | No |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `policy_mode` | any | No |  |
| `vpc` | [NestedVirtualPrivateCloud](NestedVirtualPrivateCloud.md) | Yes |  |

