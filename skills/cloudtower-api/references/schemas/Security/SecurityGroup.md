# SecurityGroup

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | No |  |
| `everoute_cluster` | [NestedEverouteCluster](NestedEverouteCluster.md) | Yes |  |
| `id` | string | Yes |  |
| `isolation_policies` | NestedIsolationPolicy[] | No |  |
| `label_groups` | NestedLabelGroup[] | No |  |
| `name` | string | Yes |  |
| `security_policies` | NestedSecurityPolicy[] | No |  |
| `vms` | NestedVm[] | No |  |

