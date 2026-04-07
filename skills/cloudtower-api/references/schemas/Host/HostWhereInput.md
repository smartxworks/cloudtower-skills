# HostWhereInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AND` | HostWhereInput[] | No |  |
| `NOT` | HostWhereInput[] | No |  |
| `OR` | HostWhereInput[] | No |  |
| `access_ip` | string | No |  |
| `access_ip_contains` | string | No |  |
| `access_ip_ends_with` | string | No |  |
| `access_ip_gt` | string | No |  |
| `access_ip_gte` | string | No |  |
| `access_ip_in` | string[] | No |  |
| `access_ip_lt` | string | No |  |
| `access_ip_lte` | string | No |  |
| `access_ip_not` | string | No |  |
| `access_ip_not_contains` | string | No |  |
| `access_ip_not_ends_with` | string | No |  |
| `access_ip_not_in` | string[] | No |  |
| `access_ip_not_starts_with` | string | No |  |
| `access_ip_starts_with` | string | No |  |
| `allocable_cpu_cores_for_vm_exclusive` | integer (int32) | No |  |
| `allocable_cpu_cores_for_vm_exclusive_gt` | integer (int32) | No |  |
| `allocable_cpu_cores_for_vm_exclusive_gte` | integer (int32) | No |  |
| `allocable_cpu_cores_for_vm_exclusive_in` | integer[] | No |  |
| `allocable_cpu_cores_for_vm_exclusive_lt` | integer (int32) | No |  |
| `allocable_cpu_cores_for_vm_exclusive_lte` | integer (int32) | No |  |
| `allocable_cpu_cores_for_vm_exclusive_not` | integer (int32) | No |  |
| `allocable_cpu_cores_for_vm_exclusive_not_in` | integer[] | No |  |
| `allocatable_memory_bytes` | integer (int64) | No |  |
| `allocatable_memory_bytes_gt` | integer (int64) | No |  |
| `allocatable_memory_bytes_gte` | integer (int64) | No |  |
| `allocatable_memory_bytes_in` | integer[] | No |  |
| `allocatable_memory_bytes_lt` | integer (int64) | No |  |
| `allocatable_memory_bytes_lte` | integer (int64) | No |  |
| `allocatable_memory_bytes_not` | integer (int64) | No |  |
| `allocatable_memory_bytes_not_in` | integer[] | No |  |
| `allocated_prioritized_space` | integer (int64) | No |  |
| `allocated_prioritized_space_gt` | integer (int64) | No |  |
| `allocated_prioritized_space_gte` | integer (int64) | No |  |
| `allocated_prioritized_space_in` | integer[] | No |  |
| `allocated_prioritized_space_lt` | integer (int64) | No |  |
| `allocated_prioritized_space_lte` | integer (int64) | No |  |
| `allocated_prioritized_space_not` | integer (int64) | No |  |
| `allocated_prioritized_space_not_in` | integer[] | No |  |
| `allocated_prioritized_space_usage` | number (double) | No |  |
| `allocated_prioritized_space_usage_gt` | number (double) | No |  |
| `allocated_prioritized_space_usage_gte` | number (double) | No |  |
| `allocated_prioritized_space_usage_in` | number[] | No |  |
| `allocated_prioritized_space_usage_lt` | number (double) | No |  |
| `allocated_prioritized_space_usage_lte` | number (double) | No |  |
| `allocated_prioritized_space_usage_not` | number (double) | No |  |
| `allocated_prioritized_space_usage_not_in` | number[] | No |  |
| `chunk_id` | string | No |  |
| `chunk_id_contains` | string | No |  |
| `chunk_id_ends_with` | string | No |  |
| `chunk_id_gt` | string | No |  |
| `chunk_id_gte` | string | No |  |
| `chunk_id_in` | string[] | No |  |
| `chunk_id_lt` | string | No |  |
| `chunk_id_lte` | string | No |  |
| `chunk_id_not` | string | No |  |
| `chunk_id_not_contains` | string | No |  |
| `chunk_id_not_ends_with` | string | No |  |
| `chunk_id_not_in` | string[] | No |  |
| `chunk_id_not_starts_with` | string | No |  |
| `chunk_id_starts_with` | string | No |  |
| `cluster` | any | No |  |
| `commited_memory_bytes` | integer (int64) | No |  |
| `commited_memory_bytes_gt` | integer (int64) | No |  |
| `commited_memory_bytes_gte` | integer (int64) | No |  |
| `commited_memory_bytes_in` | integer[] | No |  |
| `commited_memory_bytes_lt` | integer (int64) | No |  |
| `commited_memory_bytes_lte` | integer (int64) | No |  |
| `commited_memory_bytes_not` | integer (int64) | No |  |
| `commited_memory_bytes_not_in` | integer[] | No |  |
| `connect_status` | any | No |  |
| `connect_status_in` | HostConnectStatus[] | No |  |
| `connect_status_not` | any | No |  |
| `connect_status_not_in` | HostConnectStatus[] | No |  |
| `cpu_brand` | string | No |  |
| `cpu_brand_contains` | string | No |  |
| `cpu_brand_ends_with` | string | No |  |
| `cpu_brand_gt` | string | No |  |
| `cpu_brand_gte` | string | No |  |
| `cpu_brand_in` | string[] | No |  |
| `cpu_brand_lt` | string | No |  |
| `cpu_brand_lte` | string | No |  |
| `cpu_brand_not` | string | No |  |
| `cpu_brand_not_contains` | string | No |  |
| `cpu_brand_not_ends_with` | string | No |  |
| `cpu_brand_not_in` | string[] | No |  |
| `cpu_brand_not_starts_with` | string | No |  |
| `cpu_brand_starts_with` | string | No |  |
| `cpu_fan_speed_unit` | any | No |  |
| `cpu_fan_speed_unit_in` | CpuFanSpeedUnit[] | No |  |
| `cpu_fan_speed_unit_not` | any | No |  |
| `cpu_fan_speed_unit_not_in` | CpuFanSpeedUnit[] | No |  |
| `cpu_hz_per_core` | integer (int64) | No |  |
| `cpu_hz_per_core_gt` | integer (int64) | No |  |
| `cpu_hz_per_core_gte` | integer (int64) | No |  |
| `cpu_hz_per_core_in` | integer[] | No |  |
| `cpu_hz_per_core_lt` | integer (int64) | No |  |
| `cpu_hz_per_core_lte` | integer (int64) | No |  |
| `cpu_hz_per_core_not` | integer (int64) | No |  |
| `cpu_hz_per_core_not_in` | integer[] | No |  |
| `cpu_model` | string | No |  |
| `cpu_model_contains` | string | No |  |
| `cpu_model_ends_with` | string | No |  |
| `cpu_model_gt` | string | No |  |
| `cpu_model_gte` | string | No |  |
| `cpu_model_in` | string[] | No |  |
| `cpu_model_lt` | string | No |  |
| `cpu_model_lte` | string | No |  |
| `cpu_model_not` | string | No |  |
| `cpu_model_not_contains` | string | No |  |
| `cpu_model_not_ends_with` | string | No |  |
| `cpu_model_not_in` | string[] | No |  |
| `cpu_model_not_starts_with` | string | No |  |
| `cpu_model_starts_with` | string | No |  |
| `cpu_vendor` | string | No |  |
| `cpu_vendor_contains` | string | No |  |
| `cpu_vendor_ends_with` | string | No |  |
| `cpu_vendor_gt` | string | No |  |
| `cpu_vendor_gte` | string | No |  |
| `cpu_vendor_in` | string[] | No |  |
| `cpu_vendor_lt` | string | No |  |
| `cpu_vendor_lte` | string | No |  |
| `cpu_vendor_not` | string | No |  |
| `cpu_vendor_not_contains` | string | No |  |
| `cpu_vendor_not_ends_with` | string | No |  |
| `cpu_vendor_not_in` | string[] | No |  |
| `cpu_vendor_not_starts_with` | string | No |  |
| `cpu_vendor_starts_with` | string | No |  |
| `data_ip` | string | No |  |
| `data_ip_contains` | string | No |  |
| `data_ip_ends_with` | string | No |  |
| `data_ip_gt` | string | No |  |
| `data_ip_gte` | string | No |  |
| `data_ip_in` | string[] | No |  |
| `data_ip_lt` | string | No |  |
| `data_ip_lte` | string | No |  |
| `data_ip_not` | string | No |  |
| `data_ip_not_contains` | string | No |  |
| `data_ip_not_ends_with` | string | No |  |
| `data_ip_not_in` | string[] | No |  |
| `data_ip_not_starts_with` | string | No |  |
| `data_ip_starts_with` | string | No |  |
| `dirty_cache_space` | integer (int64) | No |  |
| `dirty_cache_space_gt` | integer (int64) | No |  |
| `dirty_cache_space_gte` | integer (int64) | No |  |
| `dirty_cache_space_in` | integer[] | No |  |
| `dirty_cache_space_lt` | integer (int64) | No |  |
| `dirty_cache_space_lte` | integer (int64) | No |  |
| `dirty_cache_space_not` | integer (int64) | No |  |
| `dirty_cache_space_not_in` | integer[] | No |  |
| `dirty_cache_usage` | number (double) | No |  |
| `dirty_cache_usage_gt` | number (double) | No |  |
| `dirty_cache_usage_gte` | number (double) | No |  |
| `dirty_cache_usage_in` | number[] | No |  |
| `dirty_cache_usage_lt` | number (double) | No |  |
| `dirty_cache_usage_lte` | number (double) | No |  |
| `dirty_cache_usage_not` | number (double) | No |  |
| `dirty_cache_usage_not_in` | number[] | No |  |
| `disk_pools_every` | any | No |  |
| `disk_pools_none` | any | No |  |
| `disk_pools_some` | any | No |  |
| `disks_every` | any | No |  |
| `disks_none` | any | No |  |
| `disks_some` | any | No |  |
| `downgraded_prioritized_space` | integer (int64) | No |  |
| `downgraded_prioritized_space_gt` | integer (int64) | No |  |
| `downgraded_prioritized_space_gte` | integer (int64) | No |  |
| `downgraded_prioritized_space_in` | integer[] | No |  |
| `downgraded_prioritized_space_lt` | integer (int64) | No |  |
| `downgraded_prioritized_space_lte` | integer (int64) | No |  |
| `downgraded_prioritized_space_not` | integer (int64) | No |  |
| `downgraded_prioritized_space_not_in` | integer[] | No |  |
| `entityAsyncStatus` | any | No |  |
| `entityAsyncStatus_in` | EntityAsyncStatus[] | No |  |
| `entityAsyncStatus_not` | any | No |  |
| `entityAsyncStatus_not_in` | EntityAsyncStatus[] | No |  |
| `failure_cache_space` | integer (int64) | No |  |
| `failure_cache_space_gt` | integer (int64) | No |  |
| `failure_cache_space_gte` | integer (int64) | No |  |
| `failure_cache_space_in` | integer[] | No |  |
| `failure_cache_space_lt` | integer (int64) | No |  |
| `failure_cache_space_lte` | integer (int64) | No |  |
| `failure_cache_space_not` | integer (int64) | No |  |
| `failure_cache_space_not_in` | integer[] | No |  |
| `failure_data_space` | integer (int64) | No |  |
| `failure_data_space_gt` | integer (int64) | No |  |
| `failure_data_space_gte` | integer (int64) | No |  |
| `failure_data_space_in` | integer[] | No |  |
| `failure_data_space_lt` | integer (int64) | No |  |
| `failure_data_space_lte` | integer (int64) | No |  |
| `failure_data_space_not` | integer (int64) | No |  |
| `failure_data_space_not_in` | integer[] | No |  |
| `gpu_devices_every` | any | No |  |
| `gpu_devices_none` | any | No |  |
| `gpu_devices_some` | any | No |  |
| `hdd_data_capacity` | integer (int64) | No |  |
| `hdd_data_capacity_gt` | integer (int64) | No |  |
| `hdd_data_capacity_gte` | integer (int64) | No |  |
| `hdd_data_capacity_in` | integer[] | No |  |
| `hdd_data_capacity_lt` | integer (int64) | No |  |
| `hdd_data_capacity_lte` | integer (int64) | No |  |
| `hdd_data_capacity_not` | integer (int64) | No |  |
| `hdd_data_capacity_not_in` | integer[] | No |  |
| `hdd_disk_count` | integer (int32) | No |  |
| `hdd_disk_count_gt` | integer (int32) | No |  |
| `hdd_disk_count_gte` | integer (int32) | No |  |
| `hdd_disk_count_in` | integer[] | No |  |
| `hdd_disk_count_lt` | integer (int32) | No |  |
| `hdd_disk_count_lte` | integer (int32) | No |  |
| `hdd_disk_count_not` | integer (int32) | No |  |
| `hdd_disk_count_not_in` | integer[] | No |  |
| `hypervisor_ip` | string | No |  |
| `hypervisor_ip_contains` | string | No |  |
| `hypervisor_ip_ends_with` | string | No |  |
| `hypervisor_ip_gt` | string | No |  |
| `hypervisor_ip_gte` | string | No |  |
| `hypervisor_ip_in` | string[] | No |  |
| `hypervisor_ip_lt` | string | No |  |
| `hypervisor_ip_lte` | string | No |  |
| `hypervisor_ip_not` | string | No |  |
| `hypervisor_ip_not_contains` | string | No |  |
| `hypervisor_ip_not_ends_with` | string | No |  |
| `hypervisor_ip_not_in` | string[] | No |  |
| `hypervisor_ip_not_starts_with` | string | No |  |
| `hypervisor_ip_starts_with` | string | No |  |
| `id` | string | No |  |
| `id_contains` | string | No |  |
| `id_ends_with` | string | No |  |
| `id_gt` | string | No |  |
| `id_gte` | string | No |  |
| `id_in` | string[] | No |  |
| `id_lt` | string | No |  |
| `id_lte` | string | No |  |
| `id_not` | string | No |  |
| `id_not_contains` | string | No |  |
| `id_not_ends_with` | string | No |  |
| `id_not_in` | string[] | No |  |
| `id_not_starts_with` | string | No |  |
| `id_starts_with` | string | No |  |
| `iommu` | any | No |  |
| `iommu_in` | IommuStatus[] | No |  |
| `iommu_not` | any | No |  |
| `iommu_not_in` | IommuStatus[] | No |  |
| `ipmi` | any | No |  |
| `is_os_in_raid1` | boolean | No |  |
| `is_os_in_raid1_not` | boolean | No |  |
| `labels_every` | any | No |  |
| `labels_none` | any | No |  |
| `labels_some` | any | No |  |
| `local_id` | string | No |  |
| `local_id_contains` | string | No |  |
| `local_id_ends_with` | string | No |  |
| `local_id_gt` | string | No |  |
| `local_id_gte` | string | No |  |
| `local_id_in` | string[] | No |  |
| `local_id_lt` | string | No |  |
| `local_id_lte` | string | No |  |
| `local_id_not` | string | No |  |
| `local_id_not_contains` | string | No |  |
| `local_id_not_ends_with` | string | No |  |
| `local_id_not_in` | string[] | No |  |
| `local_id_not_starts_with` | string | No |  |
| `local_id_starts_with` | string | No |  |
| `lsm_cap_disk_safe_umount` | boolean | No |  |
| `lsm_cap_disk_safe_umount_not` | boolean | No |  |
| `management_ip` | string | No |  |
| `management_ip_contains` | string | No |  |
| `management_ip_ends_with` | string | No |  |
| `management_ip_gt` | string | No |  |
| `management_ip_gte` | string | No |  |
| `management_ip_in` | string[] | No |  |
| `management_ip_lt` | string | No |  |
| `management_ip_lte` | string | No |  |
| `management_ip_not` | string | No |  |
| `management_ip_not_contains` | string | No |  |
| `management_ip_not_ends_with` | string | No |  |
| `management_ip_not_in` | string[] | No |  |
| `management_ip_not_starts_with` | string | No |  |
| `management_ip_starts_with` | string | No |  |
| `merged_status` | any | No |  |
| `merged_status_in` | HostMergedStatus[] | No |  |
| `merged_status_not` | any | No |  |
| `merged_status_not_in` | HostMergedStatus[] | No |  |
| `model` | string | No |  |
| `model_contains` | string | No |  |
| `model_ends_with` | string | No |  |
| `model_gt` | string | No |  |
| `model_gte` | string | No |  |
| `model_in` | string[] | No |  |
| `model_lt` | string | No |  |
| `model_lte` | string | No |  |
| `model_not` | string | No |  |
| `model_not_contains` | string | No |  |
| `model_not_ends_with` | string | No |  |
| `model_not_in` | string[] | No |  |
| `model_not_starts_with` | string | No |  |
| `model_starts_with` | string | No |  |
| `name` | string | No |  |
| `name_contains` | string | No |  |
| `name_ends_with` | string | No |  |
| `name_gt` | string | No |  |
| `name_gte` | string | No |  |
| `name_in` | string[] | No |  |
| `name_lt` | string | No |  |
| `name_lte` | string | No |  |
| `name_not` | string | No |  |
| `name_not_contains` | string | No |  |
| `name_not_ends_with` | string | No |  |
| `name_not_in` | string[] | No |  |
| `name_not_starts_with` | string | No |  |
| `name_starts_with` | string | No |  |
| `nested_virtualization` | boolean | No |  |
| `nested_virtualization_not` | boolean | No |  |
| `nic_count` | integer (int32) | No |  |
| `nic_count_gt` | integer (int32) | No |  |
| `nic_count_gte` | integer (int32) | No |  |
| `nic_count_in` | integer[] | No |  |
| `nic_count_lt` | integer (int32) | No |  |
| `nic_count_lte` | integer (int32) | No |  |
| `nic_count_not` | integer (int32) | No |  |
| `nic_count_not_in` | integer[] | No |  |
| `nics_every` | any | No |  |
| `nics_none` | any | No |  |
| `nics_some` | any | No |  |
| `node_topo_local_id` | string | No |  |
| `node_topo_local_id_contains` | string | No |  |
| `node_topo_local_id_ends_with` | string | No |  |
| `node_topo_local_id_gt` | string | No |  |
| `node_topo_local_id_gte` | string | No |  |
| `node_topo_local_id_in` | string[] | No |  |
| `node_topo_local_id_lt` | string | No |  |
| `node_topo_local_id_lte` | string | No |  |
| `node_topo_local_id_not` | string | No |  |
| `node_topo_local_id_not_contains` | string | No |  |
| `node_topo_local_id_not_ends_with` | string | No |  |
| `node_topo_local_id_not_in` | string[] | No |  |
| `node_topo_local_id_not_starts_with` | string | No |  |
| `node_topo_local_id_starts_with` | string | No |  |
| `os_memory_bytes` | integer (int64) | No |  |
| `os_memory_bytes_gt` | integer (int64) | No |  |
| `os_memory_bytes_gte` | integer (int64) | No |  |
| `os_memory_bytes_in` | integer[] | No |  |
| `os_memory_bytes_lt` | integer (int64) | No |  |
| `os_memory_bytes_lte` | integer (int64) | No |  |
| `os_memory_bytes_not` | integer (int64) | No |  |
| `os_memory_bytes_not_in` | integer[] | No |  |
| `os_version` | string | No |  |
| `os_version_contains` | string | No |  |
| `os_version_ends_with` | string | No |  |
| `os_version_gt` | string | No |  |
| `os_version_gte` | string | No |  |
| `os_version_in` | string[] | No |  |
| `os_version_lt` | string | No |  |
| `os_version_lte` | string | No |  |
| `os_version_not` | string | No |  |
| `os_version_not_contains` | string | No |  |
| `os_version_not_ends_with` | string | No |  |
| `os_version_not_in` | string[] | No |  |
| `os_version_not_starts_with` | string | No |  |
| `os_version_starts_with` | string | No |  |
| `perf_allocated_data_space` | integer (int64) | No |  |
| `perf_allocated_data_space_gt` | integer (int64) | No |  |
| `perf_allocated_data_space_gte` | integer (int64) | No |  |
| `perf_allocated_data_space_in` | integer[] | No |  |
| `perf_allocated_data_space_lt` | integer (int64) | No |  |
| `perf_allocated_data_space_lte` | integer (int64) | No |  |
| `perf_allocated_data_space_not` | integer (int64) | No |  |
| `perf_allocated_data_space_not_in` | integer[] | No |  |
| `perf_failure_data_space` | integer (int64) | No |  |
| `perf_failure_data_space_gt` | integer (int64) | No |  |
| `perf_failure_data_space_gte` | integer (int64) | No |  |
| `perf_failure_data_space_in` | integer[] | No |  |
| `perf_failure_data_space_lt` | integer (int64) | No |  |
| `perf_failure_data_space_lte` | integer (int64) | No |  |
| `perf_failure_data_space_not` | integer (int64) | No |  |
| `perf_failure_data_space_not_in` | integer[] | No |  |
| `perf_total_data_capacity` | integer (int64) | No |  |
| `perf_total_data_capacity_gt` | integer (int64) | No |  |
| `perf_total_data_capacity_gte` | integer (int64) | No |  |
| `perf_total_data_capacity_in` | integer[] | No |  |
| `perf_total_data_capacity_lt` | integer (int64) | No |  |
| `perf_total_data_capacity_lte` | integer (int64) | No |  |
| `perf_total_data_capacity_not` | integer (int64) | No |  |
| `perf_total_data_capacity_not_in` | integer[] | No |  |
| `perf_used_data_space` | integer (int64) | No |  |
| `perf_used_data_space_gt` | integer (int64) | No |  |
| `perf_used_data_space_gte` | integer (int64) | No |  |
| `perf_used_data_space_in` | integer[] | No |  |
| `perf_used_data_space_lt` | integer (int64) | No |  |
| `perf_used_data_space_lte` | integer (int64) | No |  |
| `perf_used_data_space_not` | integer (int64) | No |  |
| `perf_used_data_space_not_in` | integer[] | No |  |
| `perf_valid_data_space` | integer (int64) | No |  |
| `perf_valid_data_space_gt` | integer (int64) | No |  |
| `perf_valid_data_space_gte` | integer (int64) | No |  |
| `perf_valid_data_space_in` | integer[] | No |  |
| `perf_valid_data_space_lt` | integer (int64) | No |  |
| `perf_valid_data_space_lte` | integer (int64) | No |  |
| `perf_valid_data_space_not` | integer (int64) | No |  |
| `perf_valid_data_space_not_in` | integer[] | No |  |
| `planned_prioritized_space` | integer (int64) | No |  |
| `planned_prioritized_space_gt` | integer (int64) | No |  |
| `planned_prioritized_space_gte` | integer (int64) | No |  |
| `planned_prioritized_space_in` | integer[] | No |  |
| `planned_prioritized_space_lt` | integer (int64) | No |  |
| `planned_prioritized_space_lte` | integer (int64) | No |  |
| `planned_prioritized_space_not` | integer (int64) | No |  |
| `planned_prioritized_space_not_in` | integer[] | No |  |
| `pmem_dimm_capacity` | integer (int64) | No |  |
| `pmem_dimm_capacity_gt` | integer (int64) | No |  |
| `pmem_dimm_capacity_gte` | integer (int64) | No |  |
| `pmem_dimm_capacity_in` | integer[] | No |  |
| `pmem_dimm_capacity_lt` | integer (int64) | No |  |
| `pmem_dimm_capacity_lte` | integer (int64) | No |  |
| `pmem_dimm_capacity_not` | integer (int64) | No |  |
| `pmem_dimm_capacity_not_in` | integer[] | No |  |
| `pmem_dimm_count` | integer (int32) | No |  |
| `pmem_dimm_count_gt` | integer (int32) | No |  |
| `pmem_dimm_count_gte` | integer (int32) | No |  |
| `pmem_dimm_count_in` | integer[] | No |  |
| `pmem_dimm_count_lt` | integer (int32) | No |  |
| `pmem_dimm_count_lte` | integer (int32) | No |  |
| `pmem_dimm_count_not` | integer (int32) | No |  |
| `pmem_dimm_count_not_in` | integer[] | No |  |
| `pmem_dimms_every` | any | No |  |
| `pmem_dimms_none` | any | No |  |
| `pmem_dimms_some` | any | No |  |
| `pmem_disk_count` | integer (int32) | No |  |
| `pmem_disk_count_gt` | integer (int32) | No |  |
| `pmem_disk_count_gte` | integer (int32) | No |  |
| `pmem_disk_count_in` | integer[] | No |  |
| `pmem_disk_count_lt` | integer (int32) | No |  |
| `pmem_disk_count_lte` | integer (int32) | No |  |
| `pmem_disk_count_not` | integer (int32) | No |  |
| `pmem_disk_count_not_in` | integer[] | No |  |
| `prio_space_percentage` | number (double) | No |  |
| `prio_space_percentage_gt` | number (double) | No |  |
| `prio_space_percentage_gte` | number (double) | No |  |
| `prio_space_percentage_in` | number[] | No |  |
| `prio_space_percentage_lt` | number (double) | No |  |
| `prio_space_percentage_lte` | number (double) | No |  |
| `prio_space_percentage_not` | number (double) | No |  |
| `prio_space_percentage_not_in` | number[] | No |  |
| `provisioned_cpu_cores` | integer (int32) | No |  |
| `provisioned_cpu_cores_gt` | integer (int32) | No |  |
| `provisioned_cpu_cores_gte` | integer (int32) | No |  |
| `provisioned_cpu_cores_in` | integer[] | No |  |
| `provisioned_cpu_cores_lt` | integer (int32) | No |  |
| `provisioned_cpu_cores_lte` | integer (int32) | No |  |
| `provisioned_cpu_cores_not` | integer (int32) | No |  |
| `provisioned_cpu_cores_not_in` | integer[] | No |  |
| `provisioned_memory_bytes` | integer (int64) | No |  |
| `provisioned_memory_bytes_gt` | integer (int64) | No |  |
| `provisioned_memory_bytes_gte` | integer (int64) | No |  |
| `provisioned_memory_bytes_in` | integer[] | No |  |
| `provisioned_memory_bytes_lt` | integer (int64) | No |  |
| `provisioned_memory_bytes_lte` | integer (int64) | No |  |
| `provisioned_memory_bytes_not` | integer (int64) | No |  |
| `provisioned_memory_bytes_not_in` | integer[] | No |  |
| `running_pause_vm_memory_bytes` | integer (int64) | No |  |
| `running_pause_vm_memory_bytes_gt` | integer (int64) | No |  |
| `running_pause_vm_memory_bytes_gte` | integer (int64) | No |  |
| `running_pause_vm_memory_bytes_in` | integer[] | No |  |
| `running_pause_vm_memory_bytes_lt` | integer (int64) | No |  |
| `running_pause_vm_memory_bytes_lte` | integer (int64) | No |  |
| `running_pause_vm_memory_bytes_not` | integer (int64) | No |  |
| `running_pause_vm_memory_bytes_not_in` | integer[] | No |  |
| `running_vm_num` | integer (int32) | No |  |
| `running_vm_num_gt` | integer (int32) | No |  |
| `running_vm_num_gte` | integer (int32) | No |  |
| `running_vm_num_in` | integer[] | No |  |
| `running_vm_num_lt` | integer (int32) | No |  |
| `running_vm_num_lte` | integer (int32) | No |  |
| `running_vm_num_not` | integer (int32) | No |  |
| `running_vm_num_not_in` | integer[] | No |  |
| `scvm_cpu` | integer (int32) | No |  |
| `scvm_cpu_gt` | integer (int32) | No |  |
| `scvm_cpu_gte` | integer (int32) | No |  |
| `scvm_cpu_in` | integer[] | No |  |
| `scvm_cpu_lt` | integer (int32) | No |  |
| `scvm_cpu_lte` | integer (int32) | No |  |
| `scvm_cpu_not` | integer (int32) | No |  |
| `scvm_cpu_not_in` | integer[] | No |  |
| `scvm_memory` | integer (int64) | No |  |
| `scvm_memory_gt` | integer (int64) | No |  |
| `scvm_memory_gte` | integer (int64) | No |  |
| `scvm_memory_in` | integer[] | No |  |
| `scvm_memory_lt` | integer (int64) | No |  |
| `scvm_memory_lte` | integer (int64) | No |  |
| `scvm_memory_not` | integer (int64) | No |  |
| `scvm_memory_not_in` | integer[] | No |  |
| `scvm_name` | string | No |  |
| `scvm_name_contains` | string | No |  |
| `scvm_name_ends_with` | string | No |  |
| `scvm_name_gt` | string | No |  |
| `scvm_name_gte` | string | No |  |
| `scvm_name_in` | string[] | No |  |
| `scvm_name_lt` | string | No |  |
| `scvm_name_lte` | string | No |  |
| `scvm_name_not` | string | No |  |
| `scvm_name_not_contains` | string | No |  |
| `scvm_name_not_ends_with` | string | No |  |
| `scvm_name_not_in` | string[] | No |  |
| `scvm_name_not_starts_with` | string | No |  |
| `scvm_name_starts_with` | string | No |  |
| `serial` | string | No |  |
| `serial_contains` | string | No |  |
| `serial_ends_with` | string | No |  |
| `serial_gt` | string | No |  |
| `serial_gte` | string | No |  |
| `serial_in` | string[] | No |  |
| `serial_lt` | string | No |  |
| `serial_lte` | string | No |  |
| `serial_not` | string | No |  |
| `serial_not_contains` | string | No |  |
| `serial_not_ends_with` | string | No |  |
| `serial_not_in` | string[] | No |  |
| `serial_not_starts_with` | string | No |  |
| `serial_starts_with` | string | No |  |
| `ssd_data_capacity` | integer (int64) | No |  |
| `ssd_data_capacity_gt` | integer (int64) | No |  |
| `ssd_data_capacity_gte` | integer (int64) | No |  |
| `ssd_data_capacity_in` | integer[] | No |  |
| `ssd_data_capacity_lt` | integer (int64) | No |  |
| `ssd_data_capacity_lte` | integer (int64) | No |  |
| `ssd_data_capacity_not` | integer (int64) | No |  |
| `ssd_data_capacity_not_in` | integer[] | No |  |
| `ssd_disk_count` | integer (int32) | No |  |
| `ssd_disk_count_gt` | integer (int32) | No |  |
| `ssd_disk_count_gte` | integer (int32) | No |  |
| `ssd_disk_count_in` | integer[] | No |  |
| `ssd_disk_count_lt` | integer (int32) | No |  |
| `ssd_disk_count_lte` | integer (int32) | No |  |
| `ssd_disk_count_not` | integer (int32) | No |  |
| `ssd_disk_count_not_in` | integer[] | No |  |
| `state` | any | No |  |
| `state_in` | HostState[] | No |  |
| `state_not` | any | No |  |
| `state_not_in` | HostState[] | No |  |
| `status` | any | No |  |
| `status_in` | HostStatus[] | No |  |
| `status_not` | any | No |  |
| `status_not_in` | HostStatus[] | No |  |
| `stopped_vm_num` | integer (int32) | No |  |
| `stopped_vm_num_gt` | integer (int32) | No |  |
| `stopped_vm_num_gte` | integer (int32) | No |  |
| `stopped_vm_num_in` | integer[] | No |  |
| `stopped_vm_num_lt` | integer (int32) | No |  |
| `stopped_vm_num_lte` | integer (int32) | No |  |
| `stopped_vm_num_not` | integer (int32) | No |  |
| `stopped_vm_num_not_in` | integer[] | No |  |
| `suspended_vm_num` | integer (int32) | No |  |
| `suspended_vm_num_gt` | integer (int32) | No |  |
| `suspended_vm_num_gte` | integer (int32) | No |  |
| `suspended_vm_num_in` | integer[] | No |  |
| `suspended_vm_num_lt` | integer (int32) | No |  |
| `suspended_vm_num_lte` | integer (int32) | No |  |
| `suspended_vm_num_not` | integer (int32) | No |  |
| `suspended_vm_num_not_in` | integer[] | No |  |
| `total_cache_capacity` | integer (int64) | No |  |
| `total_cache_capacity_gt` | integer (int64) | No |  |
| `total_cache_capacity_gte` | integer (int64) | No |  |
| `total_cache_capacity_in` | integer[] | No |  |
| `total_cache_capacity_lt` | integer (int64) | No |  |
| `total_cache_capacity_lte` | integer (int64) | No |  |
| `total_cache_capacity_not` | integer (int64) | No |  |
| `total_cache_capacity_not_in` | integer[] | No |  |
| `total_cpu_cores` | integer (int32) | No |  |
| `total_cpu_cores_gt` | integer (int32) | No |  |
| `total_cpu_cores_gte` | integer (int32) | No |  |
| `total_cpu_cores_in` | integer[] | No |  |
| `total_cpu_cores_lt` | integer (int32) | No |  |
| `total_cpu_cores_lte` | integer (int32) | No |  |
| `total_cpu_cores_not` | integer (int32) | No |  |
| `total_cpu_cores_not_in` | integer[] | No |  |
| `total_cpu_hz` | integer (int64) | No |  |
| `total_cpu_hz_gt` | integer (int64) | No |  |
| `total_cpu_hz_gte` | integer (int64) | No |  |
| `total_cpu_hz_in` | integer[] | No |  |
| `total_cpu_hz_lt` | integer (int64) | No |  |
| `total_cpu_hz_lte` | integer (int64) | No |  |
| `total_cpu_hz_not` | integer (int64) | No |  |
| `total_cpu_hz_not_in` | integer[] | No |  |
| `total_cpu_sockets` | integer (int32) | No |  |
| `total_cpu_sockets_gt` | integer (int32) | No |  |
| `total_cpu_sockets_gte` | integer (int32) | No |  |
| `total_cpu_sockets_in` | integer[] | No |  |
| `total_cpu_sockets_lt` | integer (int32) | No |  |
| `total_cpu_sockets_lte` | integer (int32) | No |  |
| `total_cpu_sockets_not` | integer (int32) | No |  |
| `total_cpu_sockets_not_in` | integer[] | No |  |
| `total_data_capacity` | integer (int64) | No |  |
| `total_data_capacity_gt` | integer (int64) | No |  |
| `total_data_capacity_gte` | integer (int64) | No |  |
| `total_data_capacity_in` | integer[] | No |  |
| `total_data_capacity_lt` | integer (int64) | No |  |
| `total_data_capacity_lte` | integer (int64) | No |  |
| `total_data_capacity_not` | integer (int64) | No |  |
| `total_data_capacity_not_in` | integer[] | No |  |
| `total_memory_bytes` | integer (int64) | No |  |
| `total_memory_bytes_gt` | integer (int64) | No |  |
| `total_memory_bytes_gte` | integer (int64) | No |  |
| `total_memory_bytes_in` | integer[] | No |  |
| `total_memory_bytes_lt` | integer (int64) | No |  |
| `total_memory_bytes_lte` | integer (int64) | No |  |
| `total_memory_bytes_not` | integer (int64) | No |  |
| `total_memory_bytes_not_in` | integer[] | No |  |
| `usb_devices_every` | any | No |  |
| `usb_devices_none` | any | No |  |
| `usb_devices_some` | any | No |  |
| `used_cache_space` | integer (int64) | No |  |
| `used_cache_space_gt` | integer (int64) | No |  |
| `used_cache_space_gte` | integer (int64) | No |  |
| `used_cache_space_in` | integer[] | No |  |
| `used_cache_space_lt` | integer (int64) | No |  |
| `used_cache_space_lte` | integer (int64) | No |  |
| `used_cache_space_not` | integer (int64) | No |  |
| `used_cache_space_not_in` | integer[] | No |  |
| `used_cpu_hz` | number (double) | No |  |
| `used_cpu_hz_gt` | number (double) | No |  |
| `used_cpu_hz_gte` | number (double) | No |  |
| `used_cpu_hz_in` | number[] | No |  |
| `used_cpu_hz_lt` | number (double) | No |  |
| `used_cpu_hz_lte` | number (double) | No |  |
| `used_cpu_hz_not` | number (double) | No |  |
| `used_cpu_hz_not_in` | number[] | No |  |
| `used_data_space` | integer (int64) | No |  |
| `used_data_space_gt` | integer (int64) | No |  |
| `used_data_space_gte` | integer (int64) | No |  |
| `used_data_space_in` | integer[] | No |  |
| `used_data_space_lt` | integer (int64) | No |  |
| `used_data_space_lte` | integer (int64) | No |  |
| `used_data_space_not` | integer (int64) | No |  |
| `used_data_space_not_in` | integer[] | No |  |
| `used_memory_bytes` | number (double) | No |  |
| `used_memory_bytes_gt` | number (double) | No |  |
| `used_memory_bytes_gte` | number (double) | No |  |
| `used_memory_bytes_in` | number[] | No |  |
| `used_memory_bytes_lt` | number (double) | No |  |
| `used_memory_bytes_lte` | number (double) | No |  |
| `used_memory_bytes_not` | number (double) | No |  |
| `used_memory_bytes_not_in` | number[] | No |  |
| `valid_cache_space` | integer (int64) | No |  |
| `valid_cache_space_gt` | integer (int64) | No |  |
| `valid_cache_space_gte` | integer (int64) | No |  |
| `valid_cache_space_in` | integer[] | No |  |
| `valid_cache_space_lt` | integer (int64) | No |  |
| `valid_cache_space_lte` | integer (int64) | No |  |
| `valid_cache_space_not` | integer (int64) | No |  |
| `valid_cache_space_not_in` | integer[] | No |  |
| `valid_free_cache_space` | integer (int64) | No |  |
| `valid_free_cache_space_gt` | integer (int64) | No |  |
| `valid_free_cache_space_gte` | integer (int64) | No |  |
| `valid_free_cache_space_in` | integer[] | No |  |
| `valid_free_cache_space_lt` | integer (int64) | No |  |
| `valid_free_cache_space_lte` | integer (int64) | No |  |
| `valid_free_cache_space_not` | integer (int64) | No |  |
| `valid_free_cache_space_not_in` | integer[] | No |  |
| `vm_num` | integer (int32) | No |  |
| `vm_num_gt` | integer (int32) | No |  |
| `vm_num_gte` | integer (int32) | No |  |
| `vm_num_in` | integer[] | No |  |
| `vm_num_lt` | integer (int32) | No |  |
| `vm_num_lte` | integer (int32) | No |  |
| `vm_num_not` | integer (int32) | No |  |
| `vm_num_not_in` | integer[] | No |  |
| `vmotion_ip` | string | No |  |
| `vmotion_ip_contains` | string | No |  |
| `vmotion_ip_ends_with` | string | No |  |
| `vmotion_ip_gt` | string | No |  |
| `vmotion_ip_gte` | string | No |  |
| `vmotion_ip_in` | string[] | No |  |
| `vmotion_ip_lt` | string | No |  |
| `vmotion_ip_lte` | string | No |  |
| `vmotion_ip_not` | string | No |  |
| `vmotion_ip_not_contains` | string | No |  |
| `vmotion_ip_not_ends_with` | string | No |  |
| `vmotion_ip_not_in` | string[] | No |  |
| `vmotion_ip_not_starts_with` | string | No |  |
| `vmotion_ip_starts_with` | string | No |  |
| `vms_every` | any | No |  |
| `vms_none` | any | No |  |
| `vms_some` | any | No |  |
| `vsphereEsxiAccount` | any | No |  |
| `with_faster_ssd_as_cache` | boolean | No |  |
| `with_faster_ssd_as_cache_not` | boolean | No |  |
| `zone` | any | No |  |

