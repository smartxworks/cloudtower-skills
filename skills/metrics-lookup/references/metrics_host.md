# host_* 前缀指标

| metric_name | 中文说明 | 适用版本 |
|---|---|---|
| host_access_network_can_ping | 主机接入网络能否 ping 通 |  |
| host_all_service_resident_memory_bytes | 主机所有服务常驻内存占用量 |  |
| host_bond_slave_is_normal | 网口 bonding 状态 |  |
| host_can_connect_with_ntp_server | 主机与外部 NTP 服务器链接状态 |  |
| host_can_sync_time_with_ntp_server | 主机时间与外部 NTP 服务器同步状态 |  |
| host_cpu_fan_is_ok | 主机风扇状态是否正常 |  |
| host_cpu_overall_15m_avg_load | 主机 CPU 15 分钟内的平均负载 |  |
| host_cpu_overall_1m_avg_load | 主机 CPU 1 分钟内的平均负载 |  |
| host_cpu_overall_5m_avg_load | 主机 CPU 5 分钟内的平均负载 |  |
| host_cpu_overall_usage_percent | 主机 CPU 使用率 |  |
| host_cpu_overall_used_hz | 主机 CPU 使用量 |  |
| host_cpu_temperature_celsius | 主机 CPU 温度 |  |
| host_disk_avg_read_latency_ns | 主机磁盘 I/O 平均延时-读 |  |
| host_disk_avg_read_size_bytes | 主机磁盘 I/O 平均块大小-读 |  |
| host_disk_avg_readwrite_latency_ns | 主机磁盘 I/O 平均延时-总 |  |
| host_disk_avg_readwrite_queue_length | 主机磁盘 I/O 等待队列长度 |  |
| host_disk_avg_readwrite_size_bytes | 主机磁盘 I/O 平均块大小-总 |  |
| host_disk_avg_write_latency_ns | 主机磁盘 I/O 平均延时-写 |  |
| host_disk_avg_write_size_bytes | 主机磁盘 I/O 平均块大小-写 |  |
| host_disk_read_iops | 主机磁盘读 IOPS |  |
| host_disk_read_speed_bps | 主机磁盘 I/O 带宽-读 |  |
| host_disk_readwrite_iops | 主机磁盘总 IOPS |  |
| host_disk_readwrite_speed_bps | 主机磁盘 I/O 带宽-总 |  |
| host_disk_remaining_life_percent | 磁盘剩余寿命百分比 |  |
| host_disk_smart_test_failed | 磁盘 S.M.A.R.T. 检测是否正常 |  |
| host_disk_temperature_celsius | 磁盘摄氏温度 |  |
| host_disk_utilization_percent | 主机磁盘活动时间百分比 |  |
| host_disk_write_iops | 主机磁盘写 IOPS |  |
| host_disk_write_speed_bps | 主机磁盘 I/O 带宽-写 |  |
| host_hardware_raid_pd_lifespan | 硬件 RAID 下的物理盘剩余寿命百分比 |  |
| host_hardware_raid_pd_smart_error | 硬件 RAID 下的物理盘 S.M.A.R.T. 自测结果异常 |  |
| host_hardware_raid_vd_num_of_pd | 硬件 RAID 组中的物理盘数量 |  |
| host_hardware_raid_vd_status_error | 硬件 RAID 下的虚拟盘状态是否异常 |  |
| host_hdd_overall_size_bytes | 主机 HDD 磁盘总容量 |  |
| host_hp_memory_usage_percent | 主机大页内存使用百分比 |  |
| host_hp_memory_used_bytes | 主机大页内存使用量 |  |
| host_io_block_disk_offline | 物理盘发生 IO 阻塞，已停止处理 IO |  |
| host_management_network_can_ping | 主机管理网络能否 ping 通 |  |
| host_memory_swap_in_speed_bps | 主机内存换入速度 |  |
| host_memory_swap_out_speed_bps | 主机内存换出速度 |  |
| host_memory_swap_size_bytes | 主机交换内存总量 |  |
| host_memory_swap_usage_percent | 主机交换内存使用百分比 |  |
| host_memory_swap_used_bytes | 主机交换内存使用量 |  |
| host_memory_usage_percent | 主机内存使用率 |  |
| host_memory_used_bytes | 主机内存使用量 |  |
| host_mongo_dir_used_space_bytes | 主机 /var/log/mongodb/ 目录已用量 |  |
| host_network_loss_rate | 主机网口丢包率 |  |
| host_network_nic_bandwidth_usage_percent | 主机网口带宽使用率百分比 |  |
| host_network_ping_packet_loss_percent | 主机之间 ping 丢包率 |  |
| host_network_ping_time_ns | 主机之间 ping 延迟 |  |
| host_network_rdma_receive_bytes | 主机 RDMA 网络接收字节数 |  |
| host_network_rdma_receive_packets | 主机 RDMA 网络接收包数 |  |
| host_network_rdma_receive_speed_bitps | 主机 RDMA 网络接收速度（比特每秒） |  |
| host_network_rdma_transmit_bytes | 主机 RDMA 网络发送字节数 |  |
| host_network_rdma_transmit_packets | 主机 RDMA 网络发送包数 |  |
| host_network_rdma_transmit_speed_bitps | 主机 RDMA 网络发送速度（比特每秒） |  |
| host_network_receive_bytes | 主机网口数据接收总量 |  |
| host_network_receive_dropped_packets | 主机网口接收数据丢包总数 |  |
| host_network_receive_errors | 主机网口接收的错误数据包数 |  |
| host_network_receive_fifo_errors | 主机网口接收 FIFO 错误总数 |  |
| host_network_receive_packets | 主机网口收包量 |  |
| host_network_receive_speed_bitps | 主机网口数据接收速度（比特每秒） |  |
| host_network_receive_speed_bps | 主机网口数据接收速度（字节每秒） |  |
| host_network_transmit_bytes | 主机网口数据发送总量 |  |
| host_network_transmit_dropped_packets | 主机网口发送数据丢包总数 |  |
| host_network_transmit_errors | 主机网口发送的错误数据包数 |  |
| host_network_transmit_fifo_errors | 主机网口发送 FIFO 错误总数 |  |
| host_network_transmit_packets | 主机网口发包量 |  |
| host_network_transmit_speed_bitps | 主机网口数据发送速度（比特每秒） |  |
| host_network_transmit_speed_bps | 主机网口数据发送速度（字节每秒） |  |
| host_non_hp_memory_usage_percent | 主机非大页内存使用百分比 |  |
| host_non_hp_memory_used_bytes | 主机非大页内存使用量 |  |
| host_other_service_resident_memory_bytes | 主机其他服务常驻内存占用量 |  |
| host_power_is_on | 主机电源状态 |  |
| host_service_cpu_usage_percent | 主机服务 CPU 占用百分比 |  |
| host_service_health | 主机服务健康状态 |  |
| host_service_is_running | 主机服务运行状态 |  |
| host_service_resident_memory_bytes | 主机服务常驻内存占用量 |  |
| host_service_shared_memory_bytes | 主机服务共享内存占用量 |  |
| host_service_virtual_memory_bytes | 主机服务虚拟内存占用量 |  |
| host_ssd_overall_size_bytes | 主机 SSD 磁盘总容量 |  |
| host_storage_network_can_ping | 主机存储网络能否 ping 通 |  |
| host_sub_healthy_disk_in_isolate | 磁盘是否处于亚健康状态且隔离中 |  |
| host_sub_healthy_disk_without_isolate | 磁盘是否处于亚健康状态且未隔离 |  |
| host_sys_partition_raid_is_normal | 主机 RAID 状态 |  |
| host_sys_partition_usage_percent | 主机系统分区已使用百分比 |  |
| host_sys_partition_used_space_bytes | 主机 / 目录已用量 |  |
| host_time_offset_with_ntp_leader_seconds | 主机与 NTP Leader 的时钟偏移量，单位 秒 |  |
| host_to_host_max_ping_time_ns_bucket | 主机之间 ping 延迟分布 |  |
| host_unhealthy_disk_in_isolate | 磁盘是否处于不健康状态 |  |
| host_unhealthy_disk_offline | 不健康磁盘是否离线 |  |
| host_unhealthy_disk_with_last_smtx_system | 磁盘是否处于不健康状态，且残留最后一个系统分区或元数据分区 |  |
| host_unhealthy_disk_with_left_partition | 磁盘是否处于不健康状态且残留未卸载分区 |  |
| host_uptime_seconds | 集群 SSD 磁盘总容量 |  |
| host_work_status_is_unknown | 主机工作状态是否未知 |  |
| host_zbs_log_dir_used_space_bytes | 主机 /var/log/zbs/ 目录已用量 |  |
