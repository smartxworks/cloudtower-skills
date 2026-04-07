# elf_* 前缀指标

| metric_name | 中文说明 | 适用版本 |
|---|---|---|
| elf_cluster_cpu_model_compatibility | 集群虚拟机 CPU 模型兼容性是否兼容于所有主机 | v5.1.0 及以上 |
| elf_cluster_memory_provisioned_bytes | 集群上的 VM 分配的内存大小 | v5.1.0 及以上 |
| elf_cluster_memory_provisioned_running_bytes | 集群上开启电源的 VM 分配的内存大小 | v5.1.0 及以上 |
| elf_cluster_vcpus_provisioned | 集群上的 VM 分配的 vCPU 数量 | v5.1.0 及以上 |
| elf_cluster_vcpus_provisioned_running | 集群上开启电源的 VM 分配的 vCPU 数量 | v5.1.0 及以上 |
| elf_host_memory_ha_status | 当主机离线时，表示主机上所有 VM 的 HA 是否可以重建（0=可以，1=不可以） | v6.0.0 及以上 |
| elf_host_memory_provisioned_bytes | 主机上的 VM 分配的内存大小 | v5.1.0 及以上 |
| elf_host_memory_provisioned_running_bytes | 主机上开启电源的 VM 分配的内存大小 | v5.1.0 及以上 |
| elf_host_vcpu_and_cpu_ratio | 主机上的 VM 分配的 vCPU 数量与物理 CPU 数量的比例 | v5.1.0 及以上 |
| elf_host_vcpus_provisioned | 主机上的 VM 分配的 vCPU 数量 | v5.1.0 及以上 |
| elf_host_vcpus_provisioned_running | 主机上开启电源的 VM 分配的 vCPU 数量 | v5.1.0 及以上 |
| elf_shared_vm_disk_avg_read_latency_ns | VM 所有共享 volume 的平均读延迟 | v5.1.0 及以上 |
| elf_shared_vm_disk_avg_read_size_bytes | VM 所有共享 volume 的平均读块大小 | v5.1.0 及以上 |
| elf_shared_vm_disk_avg_readwrite_latency_ns | VM 所有共享 volume 的平均读写延迟 | v5.1.0 及以上 |
| elf_shared_vm_disk_avg_readwrite_size_bytes | VM 所有共享 volume 的平均读写块大小 | v5.1.0 及以上 |
| elf_shared_vm_disk_avg_write_latency_ns | VM 所有共享 volume 的平均写延迟 | v5.1.0 及以上 |
| elf_shared_vm_disk_avg_write_size_bytes | VM 所有共享 volume 的平均写块大小 | v5.1.0 及以上 |
| elf_shared_vm_disk_read_iops | VM 所有共享 volume 的读 IOPS | v5.1.0 及以上 |
| elf_shared_vm_disk_read_speed_bps | VM 所有共享 volume 的读带宽 | v5.1.0 及以上 |
| elf_shared_vm_disk_readwrite_iops | VM 所有共享 volume 的读写 IOPS | v5.1.0 及以上 |
| elf_shared_vm_disk_readwrite_speed_bps | VM 所有共享 volume 的读写带宽 | v5.1.0 及以上 |
| elf_shared_vm_disk_write_iops | VM 所有共享 volume 的写 IOPS | v5.1.0 及以上 |
| elf_shared_vm_disk_write_speed_bps | VM 所有共享 volume 的写带宽 | v5.1.0 及以上 |
| elf_vm_consumed_host_memory_bytes | 此 VM 已从主机分配的内存字节数 | v5.1.0 及以上 |
| elf_vm_cpu_exclusive | 表示 VM 的 CPU 独占是否得到保证（1 = 是，0 = 否） | v5.1.0 及以上 |
| elf_vm_cpu_overall_steal_time_percent | VM CPU 被抢占时间的百分比 | v5.1.0 及以上 |
| elf_vm_cpu_overall_usage_percent | VM CPU 使用率 | v5.1.0 及以上 |
| elf_vm_cpu_overall_used_hz | VM CPU 使用量 | v5.1.0 及以上 |
| elf_vm_cpu_total_steal_time | VM CPU 总被抢占时间 | v5.1.0 及以上 |
| elf_vm_cpu_total_used_time | VM CPU 总使用时间 | v5.1.0 及以上 |
| elf_vm_disk_avg_read_latency_ns | VM 某块 volume 的平均读延迟 | v5.1.0 及以上 |
| elf_vm_disk_avg_read_size_bytes | VM 某块 volume 的平均读块大小 | v5.1.0 及以上 |
| elf_vm_disk_avg_readwrite_latency_ns | VM 某块 volume 的平均读写延迟 | v5.1.0 及以上 |
| elf_vm_disk_avg_readwrite_size_bytes | VM 某块 volume 的平均读写块大小 | v5.1.0 及以上 |
| elf_vm_disk_avg_write_latency_ns | VM 某块 volume 的平均写延迟 | v5.1.0 及以上 |
| elf_vm_disk_avg_write_size_bytes | VM 某块 volume 的平均写块大小 | v5.1.0 及以上 |
| elf_vm_disk_logical_size_bytes | VM 某块 volume 的逻辑占用空间 | v5.1.0 及以上 |
| elf_vm_disk_overall_avg_read_latency_ns | VM 所有 volume 的平均读延迟 | v5.1.0 及以上 |
| elf_vm_disk_overall_avg_read_size_bytes | VM 所有 volume 的平均读块大小 | v5.1.0 及以上 |
| elf_vm_disk_overall_avg_readwrite_latency_ns | VM 所有 volume 的平均读写延迟 | v5.1.0 及以上 |
| elf_vm_disk_overall_avg_readwrite_size_bytes | VM 所有 volume 的平均读写块大小 | v5.1.0 及以上 |
| elf_vm_disk_overall_avg_write_latency_ns | VM 所有 volume 的平均写延迟 | v5.1.0 及以上 |
| elf_vm_disk_overall_avg_write_size_bytes | VM 所有 volume 的平均写块大小 | v5.1.0 及以上 |
| elf_vm_disk_overall_iop30s | VM 所有 volume 过去 30 秒的 IOPS | v5.1.0 及以上 |
| elf_vm_disk_overall_logical_size_bytes | VM 所有 volume 的逻辑占用空间 | v5.1.0 及以上 |
| elf_vm_disk_overall_read_iops | VM 所有 volume 的读 IOPS | v5.1.0 及以上 |
| elf_vm_disk_overall_read_speed_bps | VM 所有 volume 的读带宽 | v5.1.0 及以上 |
| elf_vm_disk_overall_readwrite_iops | VM 所有 volume 的读写 IOPS | v5.1.0 及以上 |
| elf_vm_disk_overall_readwrite_speed_bps | VM 所有 volume 的读写带宽 | v5.1.0 及以上 |
| elf_vm_disk_overall_write_iops | VM 所有 volume 的写 IOPS | v5.1.0 及以上 |
| elf_vm_disk_overall_write_speed_bps | VM 所有 volume 的写带宽 | v5.1.0 及以上 |
| elf_vm_disk_read_iops | VM 某块 volume 的读 IOPS | v5.1.0 及以上 |
| elf_vm_disk_read_speed_bps | VM 某块 volume 的读带宽 | v5.1.0 及以上 |
| elf_vm_disk_readwrite_iops | VM 某块 volume 的读写 IOPS | v5.1.0 及以上 |
| elf_vm_disk_readwrite_speed_bps | VM 某块 volume 的读写带宽 | v5.1.0 及以上 |
| elf_vm_disk_write_iops | VM 某块 volume 的写 IOPS | v5.1.0 及以上 |
| elf_vm_disk_write_speed_bps | VM 某块 volume 的写带宽 | v5.1.0 及以上 |
| elf_vm_logical_disk_used_bytes | VM 逻辑占用空间 | v5.1.0 及以上 |
| elf_vm_memory_usage_percent | VM 内存使用率 | v5.1.0 及以上 |
| elf_vm_memory_used_bytes | VM 内存使用量 | v5.1.0 及以上 |
| elf_vm_network_receive_bytes | VM 网口数据接收总量 | v5.1.0 及以上 |
| elf_vm_network_receive_drop | VM 网口收包中丢包数量 | v5.1.0 及以上 |
| elf_vm_network_receive_errors | VM 网口收包中错误包数量 | v5.1.0 及以上 |
| elf_vm_network_receive_packets | VM 网口收包总量 | v5.1.0 及以上 |
| elf_vm_network_receive_speed_bitps | VM 网口接收速率，单位为每秒比特数(bit/s) | v5.1.0 及以上 |
| elf_vm_network_receive_speed_bps | VM 网口数据接收带宽 | v5.1.0 及以上 |
| elf_vm_network_transmit_bytes | VM 网口数据发送总量 | v5.1.0 及以上 |
| elf_vm_network_transmit_drop | VM 网口发包中丢包数量 | v5.1.0 及以上 |
| elf_vm_network_transmit_errors | VM 网口发包中错误包数量 | v5.1.0 及以上 |
| elf_vm_network_transmit_packets | VM 网口发包总量 | v5.1.0 及以上 |
| elf_vm_network_transmit_speed_bitps | VM 网口发送速率，单位为每秒比特数(bit/s) | v5.1.0 及以上 |
| elf_vm_network_transmit_speed_bps | VM 网口数据发送带宽 | v5.1.0 及以上 |
| elf_vm_os_failure_with_ha | 在 'os_duration' 时间内，启用了HA的VM触发了OS HA  'os_ha_count' 次，但仍未恢复。 | v6.1.0 及以上 |
| elf_vm_os_failure_with_noha | 检测到未启用HA的VM操作系统无响应 | v6.1.0 及以上 |
| elf_vm_physical_disk_used_bytes | VM 物理占用空间 | v5.1.0 及以上 |
| elf_vm_placement_expire | 是否存在一个 VM 不满足其放置组策略 | v5.1.0 及以上 |
| elf_vm_placement_status | 是否 VM 的放置组存在冲突 | v5.1.0 及以上 |
| elf_vm_total_zbs_alive_pextent_number | 虚拟机存活的 pextent 总数 | v5.1.0 及以上 |
| elf_vm_zbs_pextent_replica_number_on_node | 虚拟机 pextent 副本分布情况 | v5.1.0 及以上 |
| elf_volume_resident_in_cache | 表示常驻缓存的卷是否处于活动状态 | v6.0.0 及以上 |
