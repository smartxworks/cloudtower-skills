# BusinessHost

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `business_host_group` | any | No |  |
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `description` | string | No |  |
| `entityAsyncStatus` | any | No |  |
| `id` | string | Yes |  |
| `initiators` | NestedInitiator[] | Yes |  |
| `iscsi_luns` | NestedIscsiLun[] | No |  |
| `iscsi_targets` | NestedIscsiTarget[] | No |  |
| `labels` | NestedLabel[] | No |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `nvmf_namespaces` | NestedNvmfNamespace[] | No |  |
| `nvmf_subsystems` | NestedNvmfSubsystem[] | No |  |

