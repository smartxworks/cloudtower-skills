# GlobalAlertRule

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `alert_rules` | NestedAlertRule[] | No |  |
| `boolean` | boolean | Yes |  |
| `cause` | string | Yes |  |
| `default_thresholds` | NestedThresholds[] | Yes |  |
| `disabled` | boolean | Yes |  |
| `id` | string | Yes |  |
| `impact` | string | Yes |  |
| `message` | string | Yes |  |
| `name` | string | Yes |  |
| `object` | any | No |  |
| `operator` | string | Yes |  |
| `solution` | string | Yes |  |
| `thresholds` | NestedThresholds[] | Yes |  |
| `unit` | [AlertRuleUnit](AlertRuleUnit.md) | Yes |  |

