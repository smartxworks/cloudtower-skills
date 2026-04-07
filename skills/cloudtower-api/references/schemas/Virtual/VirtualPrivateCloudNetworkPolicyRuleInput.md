# VirtualPrivateCloudNetworkPolicyRuleInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | [VirtualPrivateCloudNetworkPolicyRuleType](VirtualPrivateCloudNetworkPolicyRuleType.md) | Yes |  |
| `selector_ids` | string[] | No |  |
| `security_group_id` | string | No |  |
| `ports` | VirtualPrivateCloudNetworkPolicyRulePortInput[] | No |  |
| `ip_block` | string | No |  |
| `except_ip_block` | string[] | No |  |

