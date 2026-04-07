# AddLabelsToResourcesParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [LabelWhereInput](LabelWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `gpu_devices` | [GpuDeviceWhereInput](GpuDeviceWhereInput.md) | No |  |
| `content_library_vm_templates` | [ContentLibraryVmTemplateWhereInput](ContentLibraryVmTemplateWhereInput.md) | No |  |
| `content_library_images` | [ContentLibraryImageWhereInput](ContentLibraryImageWhereInput.md) | No |  |
| `isolation_policies` | [IsolationPolicyWhereInput](IsolationPolicyWhereInput.md) | No |  |
| `security_policies` | [SecurityPolicyWhereInput](SecurityPolicyWhereInput.md) | No |  |
| `vms` | [VmWhereInput](VmWhereInput.md) | No |  |
| `vm_volume_snapshots` | [VmVolumeSnapshotWhereInput](VmVolumeSnapshotWhereInput.md) | No |  |
| `vm_volumes` | [VmVolumeWhereInput](VmVolumeWhereInput.md) | No |  |
| `vm_templates` | [VmTemplateWhereInput](VmTemplateWhereInput.md) | No |  |
| `vm_snapshots` | [VmSnapshotWhereInput](VmSnapshotWhereInput.md) | No |  |
| `vlans` | [VlanWhereInput](VlanWhereInput.md) | No |  |
| `vdses` | [VdsWhereInput](VdsWhereInput.md) | No |  |
| `nvmf_subsystems` | [NvmfSubsystemWhereInput](NvmfSubsystemWhereInput.md) | No |  |
| `nvmf_namespace_snapshots` | [NvmfNamespaceSnapshotWhereInput](NvmfNamespaceSnapshotWhereInput.md) | No |  |
| `nvmf_namespaces` | [NvmfNamespaceWhereInput](NvmfNamespaceWhereInput.md) | No |  |
| `nics` | [NicWhereInput](NicWhereInput.md) | No |  |
| `nfs_inodes` | [NfsInodeWhereInput](NfsInodeWhereInput.md) | No |  |
| `nfs_exports` | [NfsExportWhereInput](NfsExportWhereInput.md) | No |  |
| `namespace_groups` | [NamespaceGroupWhereInput](NamespaceGroupWhereInput.md) | No |  |
| `iscsi_targets` | [IscsiTargetWhereInput](IscsiTargetWhereInput.md) | No |  |
| `iscsi_lun_snapshots` | [IscsiLunSnapshotWhereInput](IscsiLunSnapshotWhereInput.md) | No |  |
| `iscsi_luns` | [IscsiLunWhereInput](IscsiLunWhereInput.md) | No |  |
| `hosts` | [HostWhereInput](HostWhereInput.md) | No |  |
| `elf_images` | [ElfImageWhereInput](ElfImageWhereInput.md) | No |  |
| `disks` | [DiskWhereInput](DiskWhereInput.md) | No |  |
| `datacenters` | [DatacenterWhereInput](DatacenterWhereInput.md) | No |  |
| `consistency_group_snapshots` | [ConsistencyGroupSnapshotWhereInput](ConsistencyGroupSnapshotWhereInput.md) | No |  |
| `consistency_groups` | [ConsistencyGroupWhereInput](ConsistencyGroupWhereInput.md) | No |  |
| `clusters` | [ClusterWhereInput](ClusterWhereInput.md) | No |  |

