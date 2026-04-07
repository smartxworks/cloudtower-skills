# SecurityPolicyCreateParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `is_blocklist` | boolean | No |  |
| `ingress` | SecurityPolicyIngressEgressInput[] | No |  |
| `egress` | SecurityPolicyIngressEgressInput[] | No |  |
| `apply_to` | SecurityPolicyApplyToInput[] | No |  |
| `policy_mode` | [PolicyMode](PolicyMode.md) | No |  |
| `everoute_cluster_id` | string | Yes |  |
| `description` | string | No |  |
| `name` | string | Yes |  |

