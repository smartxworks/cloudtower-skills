# SecurityPolicy

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apply_to` | NestedSecurityPolicyApply[] | Yes |  |
| `description` | string | Yes |  |
| `egress` | NestedNetworkPolicyRule[] | No |  |
| `everoute_cluster` | [NestedEverouteCluster](NestedEverouteCluster.md) | Yes |  |
| `id` | string | Yes |  |
| `ingress` | NestedNetworkPolicyRule[] | No |  |
| `is_blocklist` | boolean | Yes |  |
| `name` | string | Yes |  |
| `policy_mode` | any | No |  |
| `statistics` | any | No |  |

