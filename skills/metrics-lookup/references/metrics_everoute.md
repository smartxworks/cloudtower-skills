# Everoute 网络指标

| metric_name | 中文说明 | 适用版本 |
|---|---|---|
| everoute_pod_restart_count | Everoute 容器重启次数累计 | - |
| everoute_pod_oom_count | Everoute 容器 OOM 次数累计 | - |
| everoute_pod_health_status_abnormal | Everoute 容器健康状态异常（0=正常, 1=异常） | - |
| everoute_pod_cpu_usage_nsec | Everoute 容器 CPU 总用量（纳秒） | - |
| everoute_pod_cpu_user_nsec | Everoute 容器用户态 CPU（纳秒） | - |
| everoute_pod_cpu_kernel_nsec | Everoute 容器内核态 CPU（纳秒） | - |
| everoute_pod_mem_usage | Everoute 容器内存总用量（字节） | - |
| everoute_pod_mem_anon | Everoute 容器匿名内存/RSS（字节） | - |
| everoute_observe_instance_info | Everoute 观测实例信息标签指标（常量值 1） | - |
| everoute_observe_instance_info_with_remote_timestamp | Everoute 观测实例信息标签指标（带远程时间戳，常量值 1） | - |
| everoute_ms_arp_count | 从数据面接收到的 ARP 报文计数 | - |
| everoute_ms_arp_count_reject | 从数据面接收但被限流器拒绝的 ARP 报文计数 | - |
| everoute_ms_rule_entry_num_total | Agent 中数据面策略规则总数 | - |
| everoute_ms_rule_entry_num | 每条安全策略的数据面规则数 | - |
| everoute_ms_rule_entry_num_limit | 每条安全策略当前被限制的规则数 | - |
| everoute_ms_ip_migrate_count | IP 地址所属虚拟网卡变更次数 | - |
| everoute_ms_flowid_used_count | 已分配的 flow sequence ID 数量 | - |
| everoute_ms_flowid_exhaust | flow sequence ID 是否耗尽（0=未耗尽, 1=已耗尽） | - |
| everoute_ms_tr_healthy | 流量重定向健康状态（0=异常, 1=正常） | - |
| everoute_ms_tr_nic_mount | 流量重定向网卡挂载状态 | - |
| everoute_ms_tr_nic_status | 流量重定向网卡链路状态 | - |
| everoute_logging_connection_match_count | Everoute 策略匹配连接计数 | - |
| everoute_lb_active_lbi_health_abnormal | 主 LBI 处于不健康状态 | - |
| everoute_lb_standby_lbi_health_abnormal | 备 LBI 处于不健康状态 | - |
| everoute_lb_lbg_health_abnormal | LBG 所有 LBI 均不健康 | - |
| everoute_lb_lbi_health_abnormal | LBI 所有 LB 虚拟机均不健康 | - |
| everoute_lb_lbi_vm_health_abnormal | LBI 中不健康的 LB 虚拟机数量 | - |
| everoute_lb_vs_health_abnormal | 虚拟服务处于不健康状态 | - |
| everoute_lb_vs_splitbrain | 虚拟服务处于脑裂状态 | - |
| avg_total_rtt | 平均网络往返时间 | - |
| avg_new_established_conns | 平均新建连接数 | - |
| max_open_conns | 最大并发连接数 | - |
| avg_tx_bandwidth | 平均发送网络带宽 | - |
| avg_rx_bandwidth | 平均接收网络带宽 | - |
| avg_rx_pkts | 所有 SE 接口平均接收网络包数 | - |
| avg_tx_pkts | 所有 SE 接口平均发送网络包数 | - |
| vpc_cr_counts | VPC 自定义资源计数 | - |
| vpc_cr_specs | VPC 自定义资源规格容量 | - |
| vpc_controller_operation_count | VPC 控制器操作计数 | - |
| vpc_controller_operation_latency_milliseconds | VPC 控制器操作延迟（毫秒） | - |
| vpc_controller_operation_error | VPC 控制器操作错误计数 | - |
| vpc_dhcp_operation_count | VPC DHCP 操作计数 | - |
| vpc_dhcp_operation_latency_milliseconds | VPC DHCP 操作延迟（毫秒） | - |
| vpc_dhcp_operation_error | VPC DHCP 操作错误计数 | - |
| vpc_gateway_cluster_vm_counts | 边缘网关集群虚拟机数量 | - |
| vpc_agent_status | VPC Agent 状态（0=未知, 1=活跃, 2=错误） | - |
| vpc_agent_operation_count | VPC Agent 操作计数 | - |
| vpc_agent_operation_latency_milliseconds | VPC Agent 操作延迟（毫秒） | - |
| vpc_agent_operation_error | VPC Agent 操作错误计数 | - |
| vpc_ovs_interface_statistics | OVS 接口统计数据 | - |
| vpc_open_flow_table | OpenFlow 表项信息 | - |
| vpc_multicast_group_members_count | 组播组成员数量 | - |
| vpc_tep_ip_ping_probe_avg_latency_us | TEP IP 间 ping 探测平均延迟（微秒） | - |
| vpc_tep_ip_ping_probe_lost_packet | TEP IP 间 ping 探测丢包数 | - |
| vpc_bridge_openflow_flow_count | VPC 网桥 OpenFlow 流表条目数 | - |
| vpc_bridge_openflow_packet_count | VPC 网桥 OpenFlow 包计数 | - |
| vpc_bridge_openflow_byte_count | VPC 网桥 OpenFlow 字节计数 | - |
| vpc_gateway_agent_status | 网关 Agent 状态（0=未知, 1=活跃, 2=错误） | - |
| vpc_gateway_ct_count | 网关连接跟踪条目数 | - |
| vpc_gateway_ct_packet_in | 网关连接跟踪入包计数 | - |
| vpc_gateway_ct_packet_out | 网关连接跟踪出包计数 | - |
| vpc_gateway_ct_byte_in | 网关连接跟踪入字节数 | - |
| vpc_gateway_ct_byte_out | 网关连接跟踪出字节数 | - |
| vpc_gateway_openflow_flow_count | 网关网桥 OpenFlow 流表条目数 | - |
| vpc_gateway_openflow_packet_count | 网关网桥 OpenFlow 包计数 | - |
| vpc_gateway_openflow_byte_count | 网关网桥 OpenFlow 字节计数 | - |
| vpc_gateway_packet_in | 网关资源入包数 | - |
| vpc_gateway_packet_out | 网关资源出包数 | - |
| vpc_gateway_byte_in | 网关资源入字节数 | - |
| vpc_gateway_byte_out | 网关资源出字节数 | - |
| vpc_gateway_peer_heartbeat_count | 网关间心跳计数 | - |
| vpc_gateway_packet_in_count | 网关 OVS 网桥入包计数 | - |
| vpc_gateway_packet_out_count | 网关 OVS 网桥出包计数 | - |
| vpc_gateway_leader_notify_count | Leader 通知事件计数 | - |
