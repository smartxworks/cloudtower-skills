# GraphUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | No |  |
| `where` | [GraphWhereInput](GraphWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `instance_ids` | string[] | No |  |
| `luns` | [IscsiLunWhereInput](IscsiLunWhereInput.md) | No |  |
| `vmNics` | [VmNicWhereInput](VmNicWhereInput.md) | No |  |
| `nics` | [NicWhereInput](NicWhereInput.md) | No |  |
| `disks` | [DiskWhereInput](DiskWhereInput.md) | No |  |
| `vmVolumes` | [VmVolumeWhereInput](VmVolumeWhereInput.md) | No |  |
| `vms` | [VmWhereInput](VmWhereInput.md) | No |  |
| `hosts` | [HostWhereInput](HostWhereInput.md) | No |  |
| `network` | [NetworkType](NetworkType.md) | No |  |
| `cluster` | [ClusterWhereInput](ClusterWhereInput.md) | No |  |
| `service` | string | No |  |
| `metric_type` | [MetricType](MetricType.md) | No |  |
| `metric_count` | integer (int32) | No |  |
| `type` | [GraphType](GraphType.md) | No |  |
| `resource_type` | string | No |  |
| `title` | string | No |  |
| `metric_name` | string | No |  |
| `connect_id` | string[] | No |  |

