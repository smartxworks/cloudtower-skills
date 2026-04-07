# GlobalAlertRuleUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [GlobalAlertRuleWhereInput](GlobalAlertRuleWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `thresholds` | AlertRuleThresholds[] | No |  |
| `disabled` | boolean | No |  |

