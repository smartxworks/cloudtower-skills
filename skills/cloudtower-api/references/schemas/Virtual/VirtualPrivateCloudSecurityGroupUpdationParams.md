# VirtualPrivateCloudSecurityGroupUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [VirtualPrivateCloudSecurityGroupWhereInput](VirtualPrivateCloudSecurityGroupWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vm_ids` | string[] | No |  |
| `label_groups` | LabelGroup[] | No |  |
| `description` | string | No |  |
| `name` | string | No |  |

