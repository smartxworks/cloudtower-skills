# GpuVmDetail

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vgpu_instance_on_vm_num` | integer (int32) | No |  |
| `win_opt` | boolean | Yes |  |
| `vm_usage` | any | No |  |
| `vm_tools_version` | string | No |  |
| `vm_tools_status` | [VmToolsStatus](VmToolsStatus.md) | Yes |  |
| `vm_placement_group` | NestedVmPlacementGroup[] | No |  |
| `vm_nics` | NestedVmNic[] | No |  |
| `vm_disks` | NestedVmDisk[] | No |  |
| `video_type` | any | No |  |
| `vcpu` | integer (int32) | Yes |  |
| `usb_devices` | NestedUsbDevice[] | No |  |
| `unique_size` | integer (int64) | No |  |
| `status` | [VmStatus](VmStatus.md) | Yes |  |
| `snapshots` | NestedVmSnapshot[] | No |  |
| `snapshot_plan` | any | No |  |
| `size` | integer (int64) | No |  |
| `provisioned_size` | integer (int64) | No |  |
| `protected` | boolean | Yes |  |
| `pci_nics` | NestedNic[] | No |  |
| `out_uninstall_usb` | string[] | Yes |  |
| `os` | string | No |  |
| `original_name` | string | No |  |
| `node_ip` | string | Yes |  |
| `nested_virtualization` | boolean | Yes |  |
| `name` | string | Yes |  |
| `memory_usage` | number (double) | No |  |
| `memory` | integer (int64) | Yes |  |
| `max_iops_policy` | any | No |  |
| `max_iops` | integer (int32) | No |  |
| `max_bandwidth_policy` | any | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `logical_size_bytes` | integer (int64) | No |  |
| `local_id` | string | Yes |  |
| `local_created_at` | string | No |  |
| `last_shutdown_time` | string | No |  |
| `labels` | NestedLabel[] | No |  |
| `kernel_info` | string | No |  |
| `isolation_policy` | any | No |  |
| `ips` | string | Yes |  |
| `io_policy` | any | No |  |
| `internal` | boolean | Yes |  |
| `in_recycle_bin` | boolean | Yes |  |
| `id` | string | Yes |  |
| `hostname` | string | No |  |
| `host` | any | No |  |
| `ha` | boolean | Yes |  |
| `guest_used_size` | integer (int64) | No |  |
| `guest_size_usage` | number (double) | No |  |
| `guest_os_type` | any | No |  |
| `guest_cpu_model` | string | No |  |
| `gpu_devices` | NestedGpuDevice[] | No |  |
| `folder` | any | No |  |
| `firmware` | [VmFirmware](VmFirmware.md) | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `entity_filter_results` | NestedVmEntityFilterResult[] | No |  |
| `dns_servers` | string | No |  |
| `description` | string | Yes |  |
| `deleted_at` | string | No |  |
| `cpu_usage` | number (double) | No |  |
| `cpu_model` | string | Yes |  |
| `cpu` | [NestedCpu](NestedCpu.md) | Yes |  |
| `cluster` | any | No |  |
| `cloud_init_supported` | boolean | No |  |
| `clock_offset` | [VmClockOffset](VmClockOffset.md) | Yes |  |

