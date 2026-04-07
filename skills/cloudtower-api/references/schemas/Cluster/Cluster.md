# Cluster

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `access_write_compress_enabled` | boolean | No |  |
| `allocated_prioritized_space` | integer (int64) | No |  |
| `allocated_prioritized_space_usage` | number (double) | No |  |
| `application_highest_version` | string | No |  |
| `applications` | NestedApplication[] | No |  |
| `architecture` | [Architecture](Architecture.md) | Yes |  |
| `auto_converge` | boolean | No |  |
| `commited_memory_bytes` | integer (int64) | No |  |
| `connect_state` | [ConnectState](ConnectState.md) | Yes |  |
| `consistency_groups` | NestedConsistencyGroup[] | No |  |
| `current_cpu_model` | string | No |  |
| `data_reduction_ratio` | number (double) | No |  |
| `data_reduction_saving` | number (double) | No |  |
| `datacenters` | NestedDatacenter[] | No |  |
| `dirty_cache_space` | integer (int64) | No |  |
| `dirty_cache_usage` | number (double) | No |  |
| `disconnected_date` | string | No |  |
| `disconnected_reason` | any | No |  |
| `dns` | string[] | Yes |  |
| `downgraded_prioritized_space` | integer (int64) | No |  |
| `ecp_license` | any | No |  |
| `enable_tiering` | boolean | No |  |
| `entityAsyncStatus` | any | No |  |
| `everoute_cluster` | any | No |  |
| `failure_cache_space` | integer (int64) | No |  |
| `failure_data_space` | integer (int64) | No |  |
| `has_metrox` | boolean | No |  |
| `host_num` | integer (int32) | No |  |
| `hosts` | NestedHost[] | No |  |
| `hypervisor` | any | No |  |
| `id` | string | Yes |  |
| `ip` | string | Yes |  |
| `is_all_flash` | boolean | No |  |
| `iscsi_vip` | string | No |  |
| `labels` | NestedLabel[] | No |  |
| `license_expire_date` | string | No |  |
| `license_serial` | string | No |  |
| `license_sign_date` | string | No |  |
| `license_type` | any | No |  |
| `local_id` | string | No |  |
| `logical_used_data_space` | integer (int64) | No |  |
| `maintenance_end_date` | string | No |  |
| `maintenance_start_date` | string | No |  |
| `management_vip` | string | No |  |
| `max_chunk_num` | integer (int32) | No |  |
| `max_physical_data_capacity` | integer (int64) | No |  |
| `max_physical_data_capacity_per_node` | integer (int64) | No |  |
| `metro_availability_checklist` | any | No |  |
| `mgt_gateway` | string | No |  |
| `mgt_netmask` | string | No |  |
| `migration_data_size` | integer (int64) | No |  |
| `migration_speed` | integer (int64) | No |  |
| `name` | string | Yes |  |
| `no_performance_layer` | boolean | No |  |
| `ntp_mode` | any | No |  |
| `ntp_servers` | string[] | Yes |  |
| `nvme_over_rdma_enabled` | boolean | No |  |
| `nvme_over_tcp_enabled` | boolean | No |  |
| `nvmf_enabled` | boolean | No |  |
| `overall_efficiency` | number (double) | No |  |
| `perf_allocated_data_space` | integer (int64) | No |  |
| `perf_failure_data_space` | integer (int64) | No |  |
| `perf_total_data_capacity` | integer (int64) | No |  |
| `perf_used_data_space` | integer (int64) | No |  |
| `perf_valid_data_space` | integer (int64) | No |  |
| `planned_prioritized_space` | integer (int64) | No |  |
| `pmem_enabled` | boolean | No |  |
| `prio_space_percentage` | number (double) | No |  |
| `provisioned_cpu_cores` | integer (int32) | No |  |
| `provisioned_cpu_cores_for_active_vm` | integer (int32) | No |  |
| `provisioned_for_active_vm_ratio` | number (double) | No |  |
| `provisioned_memory_bytes` | integer (int64) | No |  |
| `provisioned_ratio` | number (double) | No |  |
| `rdma_enabled` | boolean | No |  |
| `recommended_cpu_models` | string[] | Yes |  |
| `recover_data_size` | integer (int64) | No |  |
| `recover_speed` | integer (int64) | No |  |
| `replica_capacity_only` | boolean | No |  |
| `reserved_cpu_cores_for_system_service` | integer (int32) | No |  |
| `running_vm_num` | integer (int32) | No |  |
| `settings` | any | No |  |
| `software_edition` | any | No |  |
| `stopped_vm_num` | integer (int32) | No |  |
| `stretch` | boolean | No |  |
| `suspended_vm_num` | integer (int32) | No |  |
| `total_cache_capacity` | integer (int64) | No |  |
| `total_cpu_cores` | integer (int32) | No |  |
| `total_cpu_hz` | integer (int64) | No |  |
| `total_cpu_models` | string[] | Yes |  |
| `total_cpu_sockets` | integer (int32) | No |  |
| `total_data_capacity` | integer (int64) | No |  |
| `total_memory_bytes` | integer (int64) | No |  |
| `total_prio_volume_size` | integer (int64) | No |  |
| `total_prio_volume_size_usage` | number (double) | No |  |
| `type` | [ClusterType](ClusterType.md) | Yes |  |
| `upgrade_for_tiering` | boolean | No |  |
| `upgrade_tool_version` | string | No |  |
| `used_cache_space` | integer (int64) | No |  |
| `used_cpu_hz` | number (double) | No |  |
| `used_data_space` | integer (int64) | No |  |
| `used_memory_bytes` | number (double) | No |  |
| `valid_cache_space` | integer (int64) | No |  |
| `valid_data_space` | integer (int64) | No |  |
| `vcenterAccount` | any | No |  |
| `vdses` | NestedVds[] | No |  |
| `version` | string | Yes |  |
| `vhost_enabled` | boolean | No |  |
| `vm_folders` | NestedVmFolder[] | No |  |
| `vm_num` | integer (int32) | No |  |
| `vm_templates` | NestedVmTemplate[] | No |  |
| `vms` | NestedVm[] | No |  |
| `witness` | any | No |  |
| `zones` | NestedZone[] | No |  |

