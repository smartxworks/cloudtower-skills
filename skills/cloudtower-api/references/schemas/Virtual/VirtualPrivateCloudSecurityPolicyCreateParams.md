# VirtualPrivateCloudSecurityPolicyCreateParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `egress` | VirtualPrivateCloudNetworkPolicyRuleInput[] | No |  |
| `ingress` | VirtualPrivateCloudNetworkPolicyRuleInput[] | No |  |
| `apply_to` | VirtualPrivateCloudSecurityPolicyApplyInput[] | Yes |  |
| `policy_mode` | [VirtualPrivateCloudSecurityPolicyMode](VirtualPrivateCloudSecurityPolicyMode.md) | No |  |
| `vpc_id` | string | Yes |  |
| `description` | string | No |  |
| `name` | string | Yes |  |

