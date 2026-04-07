# 指标索引（前置导航）

加载任意 references 文件前，先读本文件，根据用户查询词选择对应文件。

## 文件导航

### [metrics_zbs_chunk.md](metrics_zbs_chunk.md) — 647 条

**主题**：ZBS（SMTX OS 内置分布式块存储）chunk 层（数据块）的 IO 性能、延迟、带宽、副本、GC、压缩、纠删码、Lease、迁移、恢复

**代表性指标**：
- `zbs_chunk_access_cap_replica_app_readwrite_iops` — Lease Owner 容量层副本数据业务读写 IOPS
- `zbs_chunk_access_cap_replica_app_readwrite_latency` — Lease Owner 容量层副本数据业务读写平均延迟
- `zbs_chunk_access_cap_replica_app_readwrite_speed_bps` — Lease Owner 容量层副本数据业务读写带宽

---

### [metrics_zbs_other.md](metrics_zbs_other.md) — 256 条

**主题**：ZBS（SMTX OS 内置分布式块存储）虚拟卷（volume）、集群（cluster）存储容量、UIO、时间机器（timemachine）、存储池（storage）、机架/区域（rack/zone）的 IO 性能、容量、快照、迁移

**代表性指标**：
- `zbs_volume_read_iops` — 虚拟卷读 IOPS
- `zbs_volume_read_latency_ns` — 虚拟卷读 IO 平均延迟
- `zbs_volume_readwrite_speed_bps` — 虚拟卷读写带宽
- `zbs_cluster_allocated_data_space_bytes` — 集群已分配数据容量
- `zbs_timemachine_in_bandwidth_bps` — 时间机器入带宽

---

### [metrics_host.md](metrics_host.md) — 96 条

**主题**：主机（host）的 CPU、内存（含大页/交换）、磁盘（SSD/HDD）、网络、服务健康状态、网口（bond/OVS）

**代表性指标**：
- `host_memory_usage_percent` — 主机内存使用率
- `host_cpu_overall_usage_percent` — 主机 CPU 整体使用率
- `host_disk_avg_read_latency_ns` — 主机磁盘读平均延迟
- `host_network_nic_bandwidth_usage_percent` — 主机网口带宽使用率
- `host_service_is_running` — 主机服务运行状态

---

### [metrics_elf.md](metrics_elf.md) — 80 条

**主题**：ELF（SmartX 基于 KVM 的原生虚拟化计算平台）虚拟机（VM）和共享存储（shared）的 CPU、内存、磁盘使用、网络、集群资源调度

**代表性指标**：
- `elf_vm_cpu_overall_usage_percent` — VM CPU 使用率
- `elf_vm_memory_usage_percent` — VM 内存使用率
- `elf_vm_logical_disk_used_bytes` — VM 逻辑占用空间
- `elf_shared_vm_disk_avg_read_latency_ns` — 共享存储虚拟机磁盘读平均延迟
- `elf_cluster_vcpus_provisioned` — ELF 集群已分配 vCPU 数

---

### [metrics_misc.md](metrics_misc.md) — 33 条

**主题**：集群级别内存/CPU/磁盘汇总、IPMI 账户、机箱电源、NTP 时间同步、应用状态、网络 ping 探测、NTP 偏差

**代表性指标**：
- `cluster_memory_usage_percent` — 集群已用内存百分比
- `cluster_ssd_overall_size_bytes` — 集群 SSD 磁盘总容量
- `ipmi_account_is_valid` — IPMI 账户有效性
- `brick_power_is_on` — 机箱电源状态
- `access_nic_fail_after_reset` — 接入网口异常重置后未恢复

---

### [metrics_sfs.md](metrics_sfs.md) — 82 条

**主题**：SFS（SMTX File Storage，分布式文件存储产品，用于高效存储和管理非结构化数据）的 NFS 客户端请求、字节数、延迟、导出路径、文件系统健康状态

**代表性指标**：
- `client_requests_total` — 客户端请求总数
- `nfs_bytes_received_by_export_total` — 按导出分类的 NFS 接收总字节数
- `nfs_bytes_sent_by_export_total` — 按导出分类的 NFS 发送总字节数

---

### [metrics_sks.md](metrics_sks.md) — 51 条

**主题**：SKS（Kubernetes 服务）节点系统指标（node_exporter）、K8s 资源状态（kube-state-metrics）、etcd 集群健康、kubelet 存储卷、SKS 集群/许可证

**代表性指标**：
- `node_cpu_seconds_total` — 节点各模式 CPU 占用秒数
- `kube_node_status_condition` — 集群节点的状态条件
- `etcd_server_has_leader` — etcd 是否存在 leader
- `sks_cluster_status_phase` — SKS 集群状态阶段

---

### [metrics_tower.md](metrics_tower.md) — 17 条

**主题**：CloudTower（SmartX 多集群资源集中管理平台）自身的健康告警指标，包含 CPU、磁盘、内存使用过高和服务状态

**代表性指标**：
- `service_cpu_usage_overload` — 运行 CloudTower 的虚拟机 CPU 占用过高
- `cloudtower_cpu_usage_overload` — CloudTower 高可用节点 CPU 过高
- `service_disk_usage_overload` — CloudTower 虚拟机存储空间不足

---

### [metrics_everoute.md](metrics_everoute.md) — 74 条

**主题**：Everoute（企业云平台软件定义网络与安全方案，提供分布式防火墙、负载均衡、VPC 网络、容器网络等）的控制面指标，包含容器（pod）重启/OOM/健康状态、网关带宽、隧道状态、流表同步

**代表性指标**：
- `everoute_pod_restart_count` — Everoute 容器重启次数累计
- `everoute_pod_oom_count` — Everoute 容器 OOM 次数累计
- `vpc_gateway_byte_in` — VPC 网关入站字节数

---

### [metrics_backup.md](metrics_backup.md) — 30 条

**主题**：备份服务（负责管理备份计划并执行虚拟机备份与恢复的系统组件）的缓存、服务健康、仓库状态、文件读写字节数/请求数/延迟

**代表性指标**：
- `read_ahead_cache_size_bytes` — 预读缓存的大小
- `repo_stat_used_size_bytes` — 仓库已用容量
- `file_write_bytes_total` — 文件写入总字节数

---

### [metrics_replica.md](metrics_replica.md) — 20 条

**主题**：复制服务（负责管理复制计划并执行复制与故障处理任务的系统组件）的缓存、服务健康、ping 探测，是备份指标的子集（仅包含通用部分）

**代表性指标**：
- `read_ahead_cache_size_bytes` — 预读缓存的大小
- `server_health_results_total` — 服务健康状况累计量
- `ping_results_total` — 客户端 ping 结果的累计数量

---

## 选文件策略

用户给出具体指标名时按前缀匹配；用中文描述或模糊查询时按语义路由；前缀表未命中时走兜底规则。

### 前缀匹配表

| 指标名前缀 | 加载文件 |
|---|---|
| `zbs_chunk_` | `metrics_zbs_chunk.md` |
| `zbs_volume_` / `zbs_cluster_` / `zbs_uio_` / `zbs_timemachine_` / `zbs_storage_` / `zbs_rack_` / `zbs_zone_` | `metrics_zbs_other.md` |
| `host_` | `metrics_host.md` + `metrics_sks.md`（SKS 含 `host_time_offset_with_ntp_leader_seconds`） |
| `elf_` | `metrics_elf.md` |
| `cluster_` / `ipmi_` / `brick_` / `access_nic_` / `application_` / `event_` / `storage_` / `dolphin_` / `node_isolate_` / `os_` / `smtp_` | `metrics_misc.md` |
| `sfs_` / `nfs_` / `client_requests_` / `request_` / `rpcs_` / `uzfs_` / `last_client_` | `metrics_sfs.md` |
| `node_` / `kube_` / `kubelet_` / `etcd_` / `sks_` / `kubesmart_` / `harbor_` / `kubernetes_` / `up` | `metrics_sks.md` |
| `service_` / `cloudtower_` / `ha_` | `metrics_tower.md` |
| `everoute_` / `vpc_` / `avg_` / `max_open_conns` | `metrics_everoute.md` |
| `repo_` / `file_read_` / `file_write_` | `metrics_backup.md` |
| `sparse_` / `zbs_` (非 `zbs_chunk_`/`zbs_volume_` 等) / `fp_` / `offset_` / `read_ahead_` / `server_health_` / `ping_` | `metrics_backup.md` + `metrics_replica.md` |

**兜底**：若指标名不匹配以上任何前缀，回到上方"文件导航"部分，根据指标名中的关键词（如 `gateway`→Everoute、`snapshot`→ZBS）选择最相关的 1-2 个文件加载并搜索。

### 语义关键词路由表

| 查询关键词特征 | 加载文件 |
|---|---|
| chunk / 副本 / Lease / GC / 纠删码 | `metrics_zbs_chunk.md` |
| 虚拟卷 / 存储池 / 时间机器 / UIO | `metrics_zbs_other.md` |
| 主机 / 磁盘 / 网口 / 服务状态 | `metrics_host.md` |
| VM / 虚拟机 / 共享存储 | `metrics_elf.md` |
| 集群汇总 / IPMI / 机箱电源 / 应用状态 | `metrics_misc.md` |
| 文件存储 / NFS / 导出路径 | `metrics_sfs.md` |
| Kubernetes / K8s / Pod / Deployment / DaemonSet / PV / etcd | `metrics_sks.md` |
| CloudTower / Tower / 管理平台 / 高可用 | `metrics_tower.md` |
| Everoute / 分布式防火墙 / 负载均衡 / VPC / 隧道 / 流表 / 网关 | `metrics_everoute.md` |
| 备份 / 恢复 / 仓库 | `metrics_backup.md` |
| 复制 / 复制计划 / 故障处理 | `metrics_replica.md` |
| 模糊无法判断 | 先读本索引全文，再按关键词匹配加载 1-2 个最相关文件 |
