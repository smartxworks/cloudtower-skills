# Graph

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | any | No |  |
| `disks` | NestedDisk[] | No |  |
| `entityAsyncStatus` | any | No |  |
| `hosts` | NestedHost[] | No |  |
| `id` | string | Yes |  |
| `instance_ids` | string[] | Yes |  |
| `local_id` | string | Yes |  |
| `luns` | NestedIscsiLun[] | No |  |
| `metric_count` | integer (int32) | Yes |  |
| `metric_name` | string | Yes |  |
| `metric_type` | [MetricType](MetricType.md) | Yes |  |
| `namespaces` | NestedNvmfNamespace[] | No |  |
| `network` | any | No |  |
| `nics` | NestedNic[] | No |  |
| `resource_type` | string | Yes |  |
| `service` | string | No |  |
| `targets` | object | Yes |  |
| `title` | string | Yes |  |
| `type` | [GraphType](GraphType.md) | Yes |  |
| `view` | [NestedView](NestedView.md) | Yes |  |
| `vmNics` | NestedVmNic[] | No |  |
| `vmVolumes` | NestedVmVolume[] | No |  |
| `vms` | NestedVm[] | No |  |
| `witnesses` | NestedWitness[] | No |  |
| `zones` | NestedZone[] | No |  |

## Nested Fields

### `targets`

| Field | Type | Required | Description |
|-------|------|----------|-------------|

