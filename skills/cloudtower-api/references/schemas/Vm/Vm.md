# Vm

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `anti_malware_enabled` | boolean | No |  |
| `backup_plans` | NestedBackupPlan[] | No |  |
| `bios_uuid` | string | No |  |
| `clock_offset` | [VmClockOffset](VmClockOffset.md) | Yes |  |
| `cloud_init_supported` | boolean | No |  |
| `cluster` | any | No |  |
| `cpu` | [NestedCpu](NestedCpu.md) | Yes |  |
| `cpu_model` | string | Yes |  |
| `cpu_usage` | number (double) | No |  |
| `deleted_at` | string | No |  |
| `description` | string | Yes |  |
| `dns_servers` | string | No |  |
| `dpi_enabled` | boolean | No |  |
| `entityAsyncStatus` | any | No |  |
| `entity_filter_results` | NestedVmEntityFilterResult[] | No |  |
| `firmware` | [VmFirmware](VmFirmware.md) | Yes |  |
| `folder` | any | No |  |
| `gpu_devices` | NestedGpuDevice[] | No |  |
| `guest_cpu_model` | string | No |  |
| `guest_os_type` | any | No |  |
| `guest_size_usage` | number (double) | No |  |
| `guest_used_size` | integer (int64) | No |  |
| `ha` | boolean | Yes |  |
| `ha_priority` | any | No |  |
| `host` | any | No |  |
| `hostname` | string | No |  |
| `id` | string | Yes |  |
| `in_recycle_bin` | boolean | Yes |  |
| `internal` | boolean | Yes |  |
| `internal_product` | string | No |  |
| `internal_product_name` | string | No |  |
| `io_policy` | any | No |  |
| `ips` | string | Yes |  |
| `isolation_policy` | any | No |  |
| `kernel_info` | string | No |  |
| `labels` | NestedLabel[] | No |  |
| `last_shutdown_time` | string | No |  |
| `local_created_at` | string | No |  |
| `local_id` | string | Yes |  |
| `logical_size_bytes` | integer (int64) | No |  |
| `max_bandwidth` | integer (int64) | No |  |
| `max_bandwidth_policy` | any | No |  |
| `max_iops` | integer (int32) | No |  |
| `max_iops_policy` | any | No |  |
| `memory` | integer (int64) | Yes |  |
| `memory_usage` | number (double) | No |  |
| `name` | string | Yes |  |
| `nested_virtualization` | boolean | Yes |  |
| `node_ip` | string | Yes |  |
| `original_name` | string | No |  |
| `os` | string | No |  |
| `out_uninstall_usb` | string[] | Yes |  |
| `pci_nics` | NestedNic[] | No |  |
| `protected` | boolean | Yes |  |
| `provisioned_size` | integer (int64) | No |  |
| `size` | integer (int64) | No |  |
| `snapshot_plan` | any | No |  |
| `snapshots` | NestedVmSnapshot[] | No |  |
| `status` | [VmStatus](VmStatus.md) | Yes |  |
| `unique_logical_size` | number (double) | No |  |
| `unique_size` | integer (int64) | No |  |
| `usb_devices` | NestedUsbDevice[] | No |  |
| `used_size` | integer (int64) | No |  |
| `used_size_usage` | number (double) | No |  |
| `vcpu` | integer (int32) | Yes |  |
| `video_type` | any | No |  |
| `vm_disks` | NestedVmDisk[] | No |  |
| `vm_nics` | NestedVmNic[] | No |  |
| `vm_placement_group` | NestedVmPlacementGroup[] | No |  |
| `vm_tools_status` | [VmToolsStatus](VmToolsStatus.md) | Yes |  |
| `vm_tools_version` | string | No |  |
| `vm_usage` | any | No |  |
| `win_opt` | boolean | Yes |  |

