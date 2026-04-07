# ReportTemplateUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [ReportTemplateWhereInput](ReportTemplateWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `resource_meta` | ResourceMeta[] | No |  |
| `execute_plan` | ExecutePlan[] | No |  |
| `description` | string | No |  |
| `name` | string | No |  |

