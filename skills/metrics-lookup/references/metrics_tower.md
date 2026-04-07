# CloudTower 指标

| metric_name | 中文说明 | 适用版本 |
|---|---|---|
| service_cpu_usage_overload | 运行 CloudTower 的虚拟机的 CPU 占用过高。 |  |
| cloudtower_cpu_usage_overload | 运行 CloudTower 高可用节点的虚拟机的 CPU 占用过高。 |  |
| service_disk_usage_overload | 运行 CloudTower 的虚拟机的存储空间不足。 |  |
| cloudtower_disk_usage_overload | 运行 CloudTower 高可用节点的虚拟机的存储空间不足。 |  |
| service_memory_usage_overload | 运行 CloudTower 的虚拟机的内存使用率过高。 |  |
| cloudtower_memory_usage_overload | 运行 CloudTower 高可用节点的虚拟机的内存使用率过高。 |  |
| ha_pg_replication_slot_inactive | CloudTower 高可用数据同步中断。 |  |
| ha_pg_replication_lag_seconds | CloudTower 高可用主动节点与被动节点数据同步差异过大。 |  |
| ha_node_net_rtt_milliseconds | CloudTower 高可用节点间的平均往返延迟异常。 |  |
| ha_node_net_status | CloudTower 高可用节点间的网络连接异常。 |  |
| ha_node_status_passive_unhealthy | CloudTower 高可用被动节点异常。 |  |
| ha_node_status_witness_unhealthy | CloudTower 高可用仲裁节点异常。 |  |
| ha_nodes_time_offset_seconds | CloudTower 高可用节点间时间不同步。 |  |
| ha_failover_completed | CloudTower 高可用故障转移完成。 |  |
| ha_fileserver_files_need_reupload | 存在文件丢失。 |  |
| service_vm_has_no_ntp_server | CloudTower 未配置 NTP 服务器。 |  |
| cloudtower_vm_has_no_ntp_server | CloudTower 未配置 NTP 服务器。 |  |
