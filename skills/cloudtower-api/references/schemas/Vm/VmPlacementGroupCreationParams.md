# VmPlacementGroupCreationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vm_vm_policy` | [VmVmPolicy](VmVmPolicy.md) | No |  |
| `vm_host_prefer_enabled` | boolean | No |  |
| `vm_host_must_policy` | boolean | No |  |
| `vm_host_must_enabled` | boolean | No |  |
| `vm_host_prefer_policy` | boolean | No |  |
| `vm_vm_policy_enabled` | boolean | No |  |
| `vms` | [VmWhereInput](VmWhereInput.md) | No |  |
| `prefer_hosts` | [HostWhereInput](HostWhereInput.md) | No |  |
| `must_hosts` | [HostWhereInput](HostWhereInput.md) | No |  |
| `name` | string | Yes |  |
| `description` | string | No |  |
| `enabled` | boolean | Yes |  |
| `cluster_id` | string | Yes |  |

