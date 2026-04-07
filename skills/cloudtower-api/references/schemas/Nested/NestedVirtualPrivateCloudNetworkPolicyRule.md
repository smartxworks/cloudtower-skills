# NestedVirtualPrivateCloudNetworkPolicyRule

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `except_ip_block` | string[] | No |  |
| `ip_block` | string | No |  |
| `ports` | NestedVirtualPrivateCloudNetworkPolicyRulePort[] | No |  |
| `security_group` | any | No |  |
| `security_group_id` | string | No |  |
| `selector` | NestedLabel[] | No |  |
| `selector_ids` | string[] | No |  |
| `type` | [VirtualPrivateCloudNetworkPolicyRuleType](VirtualPrivateCloudNetworkPolicyRuleType.md) | Yes |  |

