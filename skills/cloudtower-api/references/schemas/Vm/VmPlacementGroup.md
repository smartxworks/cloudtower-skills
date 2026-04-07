# VmPlacementGroup

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `description` | string | Yes |  |
| `enabled` | boolean | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `local_created_at` | string | Yes |  |
| `local_id` | string | Yes |  |
| `local_updated_at` | string | Yes |  |
| `name` | string | Yes |  |
| `usage` | any | No |  |
| `vm_host_must_enabled` | boolean | Yes |  |
| `vm_host_must_host_uuids` | NestedHost[] | No |  |
| `vm_host_must_policy` | boolean | Yes |  |
| `vm_host_prefer_enabled` | boolean | Yes |  |
| `vm_host_prefer_host_uuids` | NestedHost[] | No |  |
| `vm_host_prefer_policy` | boolean | Yes |  |
| `vm_vm_policy` | [VmVmPolicy](VmVmPolicy.md) | Yes |  |
| `vm_vm_policy_enabled` | boolean | Yes |  |
| `vms` | NestedVm[] | No |  |

