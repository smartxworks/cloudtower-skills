# SKS（Kubernetes 服务）指标

| metric_name | 中文说明 | 适用版本 |
|---|---|---|
| node_cpu_seconds_total | 节点各模式 CPU 占用秒数 | v1.4.0 及以上 |
| node_memory_MemAvailable_bytes | 节点可用内存字节数 | v1.4.0 及以上 |
| node_memory_MemTotal_bytes | 节点总内存字节数 | v1.4.0 及以上 |
| node_filesystem_files_free | 文件系统空闲 inode 数 | v1.4.0 及以上 |
| node_filesystem_files | 文件系统总 inode 数 | v1.4.0 及以上 |
| node_filesystem_readonly | 文件系统只读状态 | v1.4.0 及以上 |
| node_filesystem_avail_bytes | 文件系统可用空间（非 root 用户） | v1.4.0 及以上 |
| node_filesystem_size_bytes | 文件系统总容量 | v1.4.0 及以上 |
| node_network_receive_errs_total | 网络设备接收错误总数 | v1.4.0 及以上 |
| node_network_receive_packets_total | 网络设备接收包总数 | v1.4.0 及以上 |
| node_network_transmit_errs_total | 网络设备发送错误总数 | v1.4.0 及以上 |
| node_network_transmit_packets_total | 网络设备发送包总数 | v1.4.0 及以上 |
| node_timex_sync_status | 时钟是否已同步到可靠服务器（1=是, 0=否） | v1.4.0 及以上 |
| node_timex_maxerror_seconds | 时钟最大误差（秒） | v1.4.0 及以上 |
| node_network_up | 网络接口操作状态（1=up, 0=down） | v1.4.0 及以上 |
| host_time_offset_with_ntp_leader_seconds | 主机与 NTP 服务器的时间偏移量（秒） | v1.4.0 及以上 |
| up | Prometheus 采集目标存活状态 | v1.4.0 及以上 |
| kube_node_status_condition | 集群节点的状态条件 | v1.4.0 及以上 |
| kube_node_spec_taint | 集群节点的污点（taint）信息 | v1.4.0 及以上 |
| kube_pod_status_phase | Pod 当前所处阶段 | v1.4.0 及以上 |
| kube_pod_info | Pod 基本信息 | v1.4.0 及以上 |
| kube_node_status_capacity | 节点各类资源的容量 | v1.4.0 及以上 |
| kube_persistentvolume_status_phase | PersistentVolume 当前阶段 | v1.4.0 及以上 |
| kubelet_volume_stats_available_bytes | 卷可用空间字节数 | v1.4.0 及以上 |
| kubelet_volume_stats_capacity_bytes | 卷总容量字节数 | v1.4.0 及以上 |
| kubelet_volume_stats_used_bytes | 卷已用空间字节数 | v1.4.0 及以上 |
| kube_persistentvolumeclaim_access_mode | PVC 访问模式 | v1.4.0 及以上 |
| kube_persistentvolumeclaim_labels | PVC 的 Kubernetes 标签 | v1.4.0 及以上 |
| kubelet_volume_stats_inodes_free | 卷空闲 inode 数 | v1.4.0 及以上 |
| kubelet_volume_stats_inodes | 卷最大 inode 数 | v1.4.0 及以上 |
| kubelet_volume_stats_inodes_used | 卷已用 inode 数 | v1.4.0 及以上 |
| kubernetes_build_info | Kubernetes 构建版本信息 | v1.4.0 及以上 |
| kube_resourcequota | 资源配额（ResourceQuota）信息 | v1.4.0 及以上 |
| harbor_up | Harbor 镜像仓库存活状态 | v1.4.0 及以上 |
| kube_deployment_spec_replicas | Deployment 期望副本数 | v1.4.0 及以上 |
| kube_deployment_status_replicas_available | Deployment 可用副本数 | v1.4.0 及以上 |
| kube_deployment_status_replicas_updated | Deployment 已更新副本数 | v1.4.0 及以上 |
| kube_daemonset_status_current_number_scheduled | DaemonSet 当前已调度节点数 | v1.4.0 及以上 |
| kube_daemonset_status_number_ready | DaemonSet 就绪节点数 | v1.4.0 及以上 |
| kube_daemonset_status_updated_number_scheduled | DaemonSet 已更新调度节点数 | v1.4.0 及以上 |
| sks_cluster_kube_apiserver_certificate_expiry_date | kubeSmartCluster 集kube-apiserver证书过期时间 | v1.4.0 及以上 |
| sks_cluster_status_phase | kubeSmartCluster 集群状态 | v1.4.0 及以上 |
| etcd_network_peer_sent_failures_total | etcd 节点间发送失败总数 | v1.4.0 及以上 |
| etcd_server_has_leader | etcd 是否存在 leader（1=存在, 0=不存在） | v1.4.0 及以上 |
| etcd_server_leader_changes_seen_total | etcd leader 变更次数 | v1.4.0 及以上 |
| etcd_disk_wal_fsync_duration_seconds_bucket | etcd WAL fsync 延迟分布（直方图） | v1.4.0 及以上 |
| etcd_disk_backend_commit_duration_seconds_bucket | etcd 后端存储 commit 延迟分布（直方图） | v1.4.0 及以上 |
| sks_license_status_expiry_date | SKS 许可证过期时间 | v1.4.0 及以上 |
| kubesmart_clusterresourcequota | SKS 项目配额状态 | v1.6.0 及以上 |
| sks_multus_ipam_allocated_count | multus cni插件已分配的IP地址数量 | v1.6.0 及以上 |
| sks_multus_ipam_total_count | multus cni插件可分配的IP地址总量，包含已分配和未分配 | v1.6.0 及以上 |
