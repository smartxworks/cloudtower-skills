# Host

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `access_ip` | string | No |  |
| `allocable_cpu_cores_for_vm_exclusive` | integer (int32) | No |  |
| `allocatable_memory_bytes` | integer (int64) | Yes |  |
| `allocated_prioritized_space` | integer (int64) | No |  |
| `allocated_prioritized_space_usage` | number (double) | No |  |
| `chunk_id` | string | Yes |  |
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `commited_memory_bytes` | integer (int64) | No |  |
| `compatible_cpu_models` | string[] | Yes |  |
| `connect_status` | any | No |  |
| `cpu_brand` | string | Yes |  |
| `cpu_fan_speed` | number[] | Yes |  |
| `cpu_fan_speed_unit` | any | No |  |
| `cpu_hz_per_core` | integer (int64) | Yes |  |
| `cpu_model` | string | Yes |  |
| `cpu_temperature_celsius` | integer[] | Yes |  |
| `cpu_vendor` | string | No |  |
| `data_ip` | string | No |  |
| `dirty_cache_space` | integer (int64) | No |  |
| `dirty_cache_usage` | number (double) | No |  |
| `disk_pools` | NestedDiskPool[] | No |  |
| `disks` | NestedDisk[] | No |  |
| `downgraded_prioritized_space` | integer (int64) | No |  |
| `entityAsyncStatus` | any | No |  |
| `failure_cache_space` | integer (int64) | No |  |
| `failure_data_space` | integer (int64) | Yes |  |
| `gpu_devices` | NestedGpuDevice[] | No |  |
| `hdd_data_capacity` | integer (int64) | Yes |  |
| `hdd_disk_count` | integer (int32) | Yes |  |
| `host_state` | any | No |  |
| `hypervisor_ip` | string | No |  |
| `id` | string | Yes |  |
| `iommu` | any | No |  |
| `ipmi` | any | No |  |
| `is_os_in_raid1` | boolean | No |  |
| `labels` | NestedLabel[] | No |  |
| `local_id` | string | Yes |  |
| `lsm_cap_disk_safe_umount` | boolean | Yes |  |
| `management_ip` | string | Yes |  |
| `merged_status` | any | No |  |
| `model` | string | Yes |  |
| `name` | string | Yes |  |
| `nested_virtualization` | boolean | Yes |  |
| `nic_count` | integer (int32) | Yes |  |
| `nics` | NestedNic[] | No |  |
| `node_topo_local_id` | string | No |  |
| `os_memory_bytes` | integer (int64) | Yes |  |
| `os_version` | string | No |  |
| `perf_allocated_data_space` | integer (int64) | No |  |
| `perf_failure_data_space` | integer (int64) | No |  |
| `perf_total_data_capacity` | integer (int64) | No |  |
| `perf_used_data_space` | integer (int64) | No |  |
| `perf_valid_data_space` | integer (int64) | No |  |
| `planned_prioritized_space` | integer (int64) | No |  |
| `pmem_dimm_capacity` | integer (int64) | Yes |  |
| `pmem_dimm_count` | integer (int32) | Yes |  |
| `pmem_dimms` | NestedPmemDimm[] | No |  |
| `pmem_disk_count` | integer (int32) | Yes |  |
| `prio_space_percentage` | number (double) | No |  |
| `provisioned_cpu_cores` | integer (int32) | Yes |  |
| `provisioned_memory_bytes` | integer (int64) | Yes |  |
| `running_pause_vm_memory_bytes` | integer (int64) | Yes |  |
| `running_vm_num` | integer (int32) | No |  |
| `scvm_cpu` | integer (int32) | No |  |
| `scvm_memory` | integer (int64) | No |  |
| `scvm_name` | string | No |  |
| `serial` | string | No |  |
| `ssd_data_capacity` | integer (int64) | Yes |  |
| `ssd_disk_count` | integer (int32) | Yes |  |
| `state` | [HostState](HostState.md) | Yes |  |
| `status` | [HostStatus](HostStatus.md) | Yes |  |
| `stopped_vm_num` | integer (int32) | No |  |
| `suspended_vm_num` | integer (int32) | No |  |
| `total_cache_capacity` | integer (int64) | No |  |
| `total_cpu_cores` | integer (int32) | Yes |  |
| `total_cpu_hz` | integer (int64) | Yes |  |
| `total_cpu_sockets` | integer (int32) | No |  |
| `total_data_capacity` | integer (int64) | Yes |  |
| `total_memory_bytes` | integer (int64) | Yes |  |
| `usb_devices` | NestedUsbDevice[] | No |  |
| `used_cache_space` | integer (int64) | No |  |
| `used_cpu_hz` | number (double) | No |  |
| `used_data_space` | integer (int64) | Yes |  |
| `used_memory_bytes` | number (double) | No |  |
| `valid_cache_space` | integer (int64) | No |  |
| `valid_free_cache_space` | integer (int64) | No |  |
| `vm_num` | integer (int32) | No |  |
| `vmotion_ip` | string | No |  |
| `vms` | NestedVm[] | No |  |
| `vsphereEsxiAccount` | any | No |  |
| `with_faster_ssd_as_cache` | boolean | No |  |
| `zone` | any | No |  |

