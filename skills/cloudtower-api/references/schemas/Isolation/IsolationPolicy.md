# IsolationPolicy

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `egress` | NestedNetworkPolicyRule[] | No |  |
| `everoute_cluster` | [NestedEverouteCluster](NestedEverouteCluster.md) | Yes |  |
| `id` | string | Yes |  |
| `ingress` | NestedNetworkPolicyRule[] | No |  |
| `labels` | NestedLabel[] | No |  |
| `mode` | [IsolationMode](IsolationMode.md) | Yes |  |
| `statistics` | any | No |  |
| `vm` | [NestedVm](NestedVm.md) | Yes |  |

