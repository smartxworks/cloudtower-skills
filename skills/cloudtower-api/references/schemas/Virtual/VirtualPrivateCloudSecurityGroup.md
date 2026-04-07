# VirtualPrivateCloudSecurityGroup

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `default_for_vpc` | boolean | No |  |
| `description` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `label_groups` | NestedVirtualPrivateCloudLabelGroup[] | No |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `vms` | NestedVm[] | No |  |
| `vpc` | [NestedVirtualPrivateCloud](NestedVirtualPrivateCloud.md) | Yes |  |

