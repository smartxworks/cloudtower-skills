# NestedNetworkPolicyRule

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `except_ip_block` | string[] | No |  |
| `ip_block` | string | No |  |
| `ports` | NestedNetworkPolicyRulePort[] | No |  |
| `security_group` | any | No |  |
| `security_group_id` | string | No |  |
| `selector` | NestedLabel[] | No |  |
| `selector_ids` | string[] | No |  |
| `service_ids` | string[] | No |  |
| `services` | NestedNetworkPolicyRuleService[] | No |  |
| `type` | [NetworkPolicyRuleType](NetworkPolicyRuleType.md) | Yes |  |

