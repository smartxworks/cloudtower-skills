# zbs_* 其他前缀指标（zbs_cluster/volume/uio/timemachine/storage 等）

| metric_name | 中文说明 | 适用版本 |
|---|---|---|
| zbs_cluster_allocated_data_space_bytes | 集群已分配数据容量 |  |
| zbs_cluster_allocated_prio_space_bytes | 集群已分配常驻缓存容量 |  |
| zbs_cluster_avg_read_latency_ns | 集群读平均 IO 延迟 |  |
| zbs_cluster_avg_read_size_bytes | 集群读平均请求大小 |  |
| zbs_cluster_avg_readwrite_latency_ns | 集群平均 IO 延迟 |  |
| zbs_cluster_avg_readwrite_size_bytes | 集群平均请求大小 |  |
| zbs_cluster_avg_write_latency_ns | 集群写平均 IO 延迟 |  |
| zbs_cluster_avg_write_size_bytes | 集群写平均请求大小 |  |
| zbs_cluster_bricks_without_topo | 没有放入 Rack 的 Brick 列表（0：无，1：有） |  |
| zbs_cluster_cache_capacity_bytes | 集群缓存容量 |  |
| zbs_cluster_cap_shared_logical_size_bytes | 集群容量层共享逻辑空间大小 |  |
| zbs_cluster_cap_unique_logical_size_bytes | 集群容量层独占逻辑空间大小 |  |
| zbs_cluster_chunks_unsafe_failure_space | 超过集群剩余空闲空间容量的 chunk 列表（0：无，1：有） |  |
| zbs_cluster_chunks_without_topo | 没有配置拓扑信息的节点列表（0：无，1：有） |  |
| zbs_cluster_cross_zone_data_speed_bps | 集群跨可用域总带宽（用户 IO + 恢复 + 迁移） |  |
| zbs_cluster_cross_zone_migrate_read_speed_bps | 集群跨可用域迁移读带宽 |  |
| zbs_cluster_cross_zone_migrate_speed_bps | 集群跨可用域迁移带宽 |  |
| zbs_cluster_cross_zone_migrate_write_speed_bps | 集群跨可用域迁移写带宽 |  |
| zbs_cluster_cross_zone_read_iops | 集群跨可用域写 IOPS |  |
| zbs_cluster_cross_zone_read_speed_bps | 集群跨可用域写带宽 |  |
| zbs_cluster_cross_zone_readwrite_iops | 集群跨可用域读写 IOPS |  |
| zbs_cluster_cross_zone_readwrite_speed_bps | 集群跨可用域读写带宽 |  |
| zbs_cluster_cross_zone_recover_migrate_speed_bps | 集群跨可用域恢复 + 迁移带宽 |  |
| zbs_cluster_cross_zone_recover_read_speed_bps | 集群跨可用域恢复读带宽 |  |
| zbs_cluster_cross_zone_recover_speed_bps | 集群跨可用域恢复带宽 |  |
| zbs_cluster_cross_zone_recover_write_speed_bps | 集群跨可用域恢复写带宽 |  |
| zbs_cluster_cross_zone_write_iops | 集群跨可用域读 IOPS |  |
| zbs_cluster_cross_zone_write_speed_bps | 集群跨可用域读带宽 |  |
| zbs_cluster_data_capacity_bytes | 集群数据容量 |  |
| zbs_cluster_data_reduction_overall_efficiency | 集群数据分配空间缩减整体效率 |  |
| zbs_cluster_data_reduction_ratio | 集群数据分配空间缩减率 |  |
| zbs_cluster_data_reduction_saving | 集群数据已节省分配空间 |  |
| zbs_cluster_data_space_use_rate | 集群空间利用率 |  |
| zbs_cluster_dirty_cache_space_bytes | 集群脏缓存容量 |  |
| zbs_cluster_downgraded_prio_space_bytes | 集群尚未提升到性能层的容量 |  |
| zbs_cluster_failure_cache_space_bytes | 集群失效缓存容量 |  |
| zbs_cluster_failure_data_space_bytes | 集群失效数据容量 |  |
| zbs_cluster_license_already_expire | 授权是否已经过期 |  |
| zbs_cluster_license_capacity_rate | 授权容量 |  |
| zbs_cluster_license_expire_day | 授权过期时间 |  |
| zbs_cluster_license_subscription_already_expire | 订阅授权是否已经过期 |  |
| zbs_cluster_license_subscription_expire_day | 订阅授权过期时间 |  |
| zbs_cluster_logical_size_bytes | 集群总空间逻辑大小 |  |
| zbs_cluster_logical_used_size_bytes | 集群已使用逻辑空间大小 |  |
| zbs_cluster_lsm_avg_read_size_bytes | 集群 LSM 读请求平均大小 |  |
| zbs_cluster_lsm_avg_readwrite_size_bytes | 集群 LSM 读写请求平均大小 |  |
| zbs_cluster_lsm_avg_write_size_bytes | 集群 LSM 写请求平均大小 |  |
| zbs_cluster_lsm_failed_io_rate | 集群 LSM 失败 IO 次数 |  |
| zbs_cluster_lsm_hard_io_rate | 集群 LSM 慢盘 IO 次数 |  |
| zbs_cluster_lsm_read_cache_hit_ratio | 集群 LSM 读缓存命中率 |  |
| zbs_cluster_lsm_read_iops | 集群 LSM 读 IOPS |  |
| zbs_cluster_lsm_read_latency_ns | 集群 LSM 读平均延迟 |  |
| zbs_cluster_lsm_read_speed_bps | 集群 LSM 读带宽 |  |
| zbs_cluster_lsm_readwrite_cache_hit_ratio | 集群 LSM 读写缓存命中率 |  |
| zbs_cluster_lsm_readwrite_iops | 集群 LSM 读写 IOPS |  |
| zbs_cluster_lsm_readwrite_latency_ns | 集群 LSM 读写平均延迟 |  |
| zbs_cluster_lsm_readwrite_speed_bps | 集群 LSM 读写带宽 |  |
| zbs_cluster_lsm_slow_io_rate | 集群 LSM 缓慢 IO 次数 |  |
| zbs_cluster_lsm_write_cache_hit_ratio | 集群 LSM 写缓存命中率 |  |
| zbs_cluster_lsm_write_iops | 集群 LSM 写 IOPS |  |
| zbs_cluster_lsm_write_latency_ns | 集群 LSM 写平均延迟 |  |
| zbs_cluster_lsm_write_speed_bps | 集群 LSM 写带宽 |  |
| zbs_cluster_migrate_speed_bps | 集群迁移带宽 |  |
| zbs_cluster_pending_migrate_bytes | 集群待迁移数据 |  |
| zbs_cluster_pending_recover_bytes | 集群待恢复数据 |  |
| zbs_cluster_perf_allocated_data_space_bytes | 集群性能层已分配数据容量 |  |
| zbs_cluster_perf_data_capacity_bytes | 集群性能层数据容量 |  |
| zbs_cluster_perf_failure_data_space_bytes | 集群性能层失效数据容量 |  |
| zbs_cluster_perf_planned_space_bytes | 集群性能层计划容量 |  |
| zbs_cluster_perf_shared_logical_size_bytes | 集群性能层共享逻辑空间大小 |  |
| zbs_cluster_perf_unique_logical_size_bytes | 集群性能层独占逻辑空间大小 |  |
| zbs_cluster_perf_used_data_space_bytes | 集群性能层已使用数据容量 |  |
| zbs_cluster_perf_valid_data_space_bytes | 集群性能层有效数据容量 |  |
| zbs_cluster_planned_prio_space_bytes | 集群预留常驻缓存容量 |  |
| zbs_cluster_prio_space_used_ratio | 集群常驻缓存空间使用率 |  |
| zbs_cluster_provisioned_data_space_bytes | 集群已预留数据容量 |  |
| zbs_cluster_read_cache_hit_ratio | 集群读缓存命中率 |  |
| zbs_cluster_read_iops | 集群读 IOPS |  |
| zbs_cluster_read_speed_bps | 集群读带宽 |  |
| zbs_cluster_readwrite_cache_hit_ratio | 集群读写缓存命中率 |  |
| zbs_cluster_readwrite_iops | 集群读写 IOPS |  |
| zbs_cluster_readwrite_speed_bps | 集群读写带宽 |  |
| zbs_cluster_recover_migrate_speed_bps | 集群恢复和迁移总带宽 |  |
| zbs_cluster_recover_speed_bps | 集群恢复带宽 |  |
| zbs_cluster_temporary_replica_num | 集群临时副本数量 |  |
| zbs_cluster_temporary_replica_space_bytes | 集群临时副本容量 |  |
| zbs_cluster_used_cache_space_bytes | 集群已使用缓存容量 |  |
| zbs_cluster_used_data_space_bytes | 集群已使用数据容量 |  |
| zbs_cluster_used_logical_data_space_bytes | 集群已使用逻辑数据容量 |  |
| zbs_cluster_valid_cache_space_bytes | 集群有效缓存容量 |  |
| zbs_cluster_valid_data_space_bytes | 集群有效数据容量 |  |
| zbs_cluster_write_cache_hit_ratio | 集群写缓存命中率 |  |
| zbs_cluster_write_iops | 集群写 IOPS |  |
| zbs_cluster_write_speed_bps | 集群写带宽 |  |
| zbs_rack_maximum_proportion_of_brick_space | Brick 的数据容量在 Rack 内的比例 |  |
| zbs_storage_pool_allocated_data_space_bytes | 存储池已分配数据容量 |  |
| zbs_storage_pool_avg_read_latency_ns | 存储池读平均 IO 延迟 |  |
| zbs_storage_pool_avg_read_size_bytes | 存储池读平均请求大小 |  |
| zbs_storage_pool_avg_readwrite_latency_ns | 存储池平均 IO 延迟 |  |
| zbs_storage_pool_avg_readwrite_size_bytes | 存储池平均请求大小 |  |
| zbs_storage_pool_avg_write_latency_ns | 存储池写平均 IO 延迟 |  |
| zbs_storage_pool_avg_write_size_bytes | 存储池写平均请求大小 |  |
| zbs_storage_pool_cache_capacity_bytes | 存储池缓存容量 |  |
| zbs_storage_pool_cross_zone_data_speed_bps | 存储池跨可用域总带宽（用户 IO + 恢复 + 迁移） |  |
| zbs_storage_pool_cross_zone_migrate_read_speed_bps | 存储池跨可用域迁移读带宽 |  |
| zbs_storage_pool_cross_zone_migrate_speed_bps | 存储池跨可用域迁移带宽 |  |
| zbs_storage_pool_cross_zone_migrate_write_speed_bps | 存储池跨可用域迁移写带宽 |  |
| zbs_storage_pool_cross_zone_read_iops | 存储池跨可用域写 IOPS |  |
| zbs_storage_pool_cross_zone_read_speed_bps | 存储池跨可用域写带宽 |  |
| zbs_storage_pool_cross_zone_readwrite_iops | 存储池跨可用域读写 IOPS |  |
| zbs_storage_pool_cross_zone_readwrite_speed_bps | 存储池跨可用域读写带宽 |  |
| zbs_storage_pool_cross_zone_recover_migrate_speed_bps | 存储池跨可用域恢复 + 迁移带宽 |  |
| zbs_storage_pool_cross_zone_recover_read_speed_bps | 存储池跨可用域恢复读带宽 |  |
| zbs_storage_pool_cross_zone_recover_speed_bps | 存储池跨可用域恢复带宽 |  |
| zbs_storage_pool_cross_zone_recover_write_speed_bps | 存储池跨可用域恢复写带宽 |  |
| zbs_storage_pool_cross_zone_write_iops | 存储池跨可用域读 IOPS |  |
| zbs_storage_pool_cross_zone_write_speed_bps | 存储池跨可用域读带宽 |  |
| zbs_storage_pool_data_capacity_bytes | 存储池数据容量 |  |
| zbs_storage_pool_data_space_use_rate | 存储池空间利用率 |  |
| zbs_storage_pool_dirty_cache_space_bytes | 存储池脏缓存容量 |  |
| zbs_storage_pool_failure_cache_space_bytes | 存储池失效缓存容量 |  |
| zbs_storage_pool_failure_data_space_bytes | 存储池失效数据容量 |  |
| zbs_storage_pool_lsm_avg_read_size_bytes | 存储池 LSM 读请求平均大小 |  |
| zbs_storage_pool_lsm_avg_readwrite_size_bytes | 存储池 LSM 读写请求平均大小 |  |
| zbs_storage_pool_lsm_avg_write_size_bytes | 存储池 LSM 写请求平均大小 |  |
| zbs_storage_pool_lsm_failed_io_rate | 存储池 LSM 失败 IO 次数 |  |
| zbs_storage_pool_lsm_hard_io_rate | 存储池 LSM 慢盘 IO 次数 |  |
| zbs_storage_pool_lsm_read_cache_hit_ratio | 存储池 LSM 读缓存命中率 |  |
| zbs_storage_pool_lsm_read_iops | 存储池 LSM 读 IOPS |  |
| zbs_storage_pool_lsm_read_latency_ns | 存储池 LSM 读平均延迟 |  |
| zbs_storage_pool_lsm_read_speed_bps | 存储池 LSM 读带宽 |  |
| zbs_storage_pool_lsm_readwrite_cache_hit_ratio | 存储池 LSM 读写缓存命中率 |  |
| zbs_storage_pool_lsm_readwrite_iops | 存储池 LSM 读写 IOPS |  |
| zbs_storage_pool_lsm_readwrite_latency_ns | 存储池 LSM 读写平均延迟 |  |
| zbs_storage_pool_lsm_readwrite_speed_bps | 存储池 LSM 读写带宽 |  |
| zbs_storage_pool_lsm_slow_io_rate | 存储池 LSM 缓慢 IO 次数 |  |
| zbs_storage_pool_lsm_write_cache_hit_ratio | 存储池 LSM 写缓存命中率 |  |
| zbs_storage_pool_lsm_write_iops | 存储池 LSM 写 IOPS |  |
| zbs_storage_pool_lsm_write_latency_ns | 存储池 LSM 写平均延迟 |  |
| zbs_storage_pool_lsm_write_speed_bps | 存储池 LSM 写带宽 |  |
| zbs_storage_pool_migrate_speed_bps | 存储池迁移带宽 |  |
| zbs_storage_pool_pending_migrate_bytes | 存储池待迁移数据 |  |
| zbs_storage_pool_pending_recover_bytes | 存储池待恢复数据 |  |
| zbs_storage_pool_perf_allocated_data_space_bytes | 存储池性能层已分配数据容量 |  |
| zbs_storage_pool_perf_data_capacity_bytes | 存储池性能层数据容量 |  |
| zbs_storage_pool_perf_failure_data_space_bytes | 存储池性能层失效数据容量 |  |
| zbs_storage_pool_perf_planned_space_bytes | 存储池性能层预留容量 |  |
| zbs_storage_pool_perf_used_data_space_bytes | 存储池性能层已使用数据容量 |  |
| zbs_storage_pool_perf_valid_data_space_bytes | 存储池性能层有效数据容量 |  |
| zbs_storage_pool_provisioned_data_space_bytes | 存储池已预留数据容量 |  |
| zbs_storage_pool_read_cache_hit_ratio | 存储池读缓存命中率 |  |
| zbs_storage_pool_read_iops | 存储池读 IOPS |  |
| zbs_storage_pool_read_speed_bps | 存储池读带宽 |  |
| zbs_storage_pool_readwrite_cache_hit_ratio | 存储池读写缓存命中率 |  |
| zbs_storage_pool_readwrite_iops | 存储池读写 IOPS |  |
| zbs_storage_pool_readwrite_speed_bps | 存储池读写带宽 |  |
| zbs_storage_pool_recover_migrate_speed_bps | 存储池恢复和迁移总带宽 |  |
| zbs_storage_pool_recover_speed_bps | 存储池恢复带宽 |  |
| zbs_storage_pool_temporary_replica_num | 存储池临时副本数量 |  |
| zbs_storage_pool_temporary_replica_space_bytes | 存储池临时副本容量 |  |
| zbs_storage_pool_used_cache_space_bytes | 存储池已使用缓存容量 |  |
| zbs_storage_pool_used_data_space_bytes | 存储池已使用数据容量 |  |
| zbs_storage_pool_valid_cache_space_bytes | 存储池有效缓存容量 |  |
| zbs_storage_pool_valid_data_space_bytes | 存储池有效数据容量 |  |
| zbs_storage_pool_write_cache_hit_ratio | 存储池写缓存命中率 |  |
| zbs_storage_pool_write_iops | 存储池写 IOPS |  |
| zbs_storage_pool_write_speed_bps | 存储池写带宽 |  |
| zbs_timemachine_as_mirror_logical_size_bytes | 作为某个保护计划的镜像计划消耗的逻辑空间大小 |  |
| zbs_timemachine_as_mirror_physical_size_bytes | 作为某个保护计划的镜像计划消耗的物理空间大小 |  |
| zbs_timemachine_continuous_protect_task_failure_count | 集群保护计划连续失败次数 |  |
| zbs_timemachine_in_bandwidth_bps | 某个站点的传入备份带宽 |  |
| zbs_timemachine_mirror_logical_size_bytes | 某个站点的保护计划消耗的逻辑空间大小 |  |
| zbs_timemachine_mirror_physical_size_bytes | 某个站点的保护计划消耗的物理空间大小 |  |
| zbs_timemachine_out_bandwidth_bps | 某个站点的传出备份带宽 |  |
| zbs_timemachine_plan_continuous_protect_task_failure_count | 某个保护计划的连续失败次数 |  |
| zbs_timemachine_protect_plan_logical_size_bytes | 某个保护计划占用逻辑空间大小 |  |
| zbs_timemachine_protect_plan_physical_size_bytes | 某个保护计划占用物理空间大小 |  |
| zbs_timemachine_total_as_mirror_logical_size_bytes | 集群作为备份站点的镜像计划占用逻辑空间大小 |  |
| zbs_timemachine_total_as_mirror_physical_size_bytes | 集群作为备份站点的镜像计划占用物理空间大小 |  |
| zbs_timemachine_total_in_bandwidth_bps | 集群传入备份带宽 |  |
| zbs_timemachine_total_logical_size_bytes | 集群的保护与镜像计划占用的逻辑空间大小 |  |
| zbs_timemachine_total_mirror_logical_size_bytes | 集群的镜像计划占用逻辑空间大小 |  |
| zbs_timemachine_total_mirror_physical_size_bytes | 集群的镜像计划占用物理空间大小 |  |
| zbs_timemachine_total_out_bandwidth_bps | 集群传出备份带宽 |  |
| zbs_timemachine_total_physical_size_bytes | 集群的保护与镜像计划占用的物理空间大小 |  |
| zbs_timemachine_total_protect_logical_size_bytes | 集群的保护计划占用逻辑空间大小 |  |
| zbs_timemachine_total_protect_physical_size_bytes | 集群的保护计划占用物理空间大小 |  |
| zbs_uio_active_extents_size | 用户活跃 Extent 数量 |  |
| zbs_uio_active_volumes_size | 用户活跃 Volume 数量 |  |
| zbs_uio_failed_read_iops | 用户 IOCtx 失败读 IOPS |  |
| zbs_uio_failed_readwrite_iops | 用户 IOCtx 失败读写 IOPS |  |
| zbs_uio_failed_write_iops | 用户 IOCtx 失败写 IOPS |  |
| zbs_uio_local_read_iops | 用户本地 IOCtx 读 IOPS |  |
| zbs_uio_local_read_latency_ns | 用户本地 IOCtx 读平均延迟 |  |
| zbs_uio_local_read_speed_bps | 用户本地 IOCtx 读带宽 |  |
| zbs_uio_local_readwrite_iops | 用户本地 IOCtx 读写 IOPS |  |
| zbs_uio_local_readwrite_latency_ns | 用户本地 IOCtx 读写平均延迟 |  |
| zbs_uio_local_readwrite_speed_bps | 用户本地 IOCtx 读写带宽 |  |
| zbs_uio_local_write_iops | 用户本地 IOCtx 写 IOPS |  |
| zbs_uio_local_write_latency_ns | 用户本地 IOCtx 写平均延迟 |  |
| zbs_uio_local_write_speed_bps | 用户本地 IOCtx 写带宽 |  |
| zbs_uio_read_iops | 用户 IOCtx 读 IOPS |  |
| zbs_uio_read_latency_ns | 用户 IOCtx 读平均延迟 |  |
| zbs_uio_read_speed_bps | 用户 IOCtx 读带宽 |  |
| zbs_uio_readwrite_iops | 用户 IOCtx 读写 IOPS |  |
| zbs_uio_readwrite_latency_ns | 用户 IOCtx 读写平均延迟 |  |
| zbs_uio_readwrite_speed_bps | 用户 IOCtx 读写带宽 |  |
| zbs_uio_retry_queue_read_size | 用户 IOCtx 读重试队列大小 |  |
| zbs_uio_retry_queue_readwrite_size | 用户 IOCtx 读写重试队列大小 |  |
| zbs_uio_retry_queue_write_size | 用户 IOCtx 写重试队列大小 |  |
| zbs_uio_retry_read_iops | 用户 IOCtx 重试读 IOPS |  |
| zbs_uio_retry_readwrite_iops | 用户 IOCtx 重试读写 IOPS |  |
| zbs_uio_retry_write_iops | 用户 IOCtx 重试写 IOPS |  |
| zbs_uio_waiting_queue_size | 用户 IOCtx 等待队列大小 |  |
| zbs_uio_write_iops | 用户 IOCtx 写 IOPS |  |
| zbs_uio_write_latency_ns | 用户 IOCtx 写平均延迟 |  |
| zbs_uio_write_speed_bps | 用户 IOCtx 写带宽 |  |
| zbs_volume_avg_iodepth | 虚拟卷 IODepth |  |
| zbs_volume_cap_shared_logical_size_bytes | 虚拟卷容量层共享逻辑空间大小 |  |
| zbs_volume_cap_unique_logical_size_bytes | 虚拟卷容量层独占逻辑空间大小 |  |
| zbs_volume_ioctx_local_read_iops | 虚拟卷本地 IOCtx 读 IOPS |  |
| zbs_volume_ioctx_local_read_latency_ns | 虚拟卷本地 IOCtx 读平均延迟 |  |
| zbs_volume_ioctx_local_read_speed_bps | 虚拟卷本地 IOCtx 读带宽 |  |
| zbs_volume_ioctx_local_readwrite_iops | 虚拟卷本地 IOCtx 读写 IOPS |  |
| zbs_volume_ioctx_local_readwrite_latency_ns | 虚拟卷本地 IOCtx 平均延迟 |  |
| zbs_volume_ioctx_local_readwrite_speed_bps | 虚拟卷本地 IOCtx 读写带宽 |  |
| zbs_volume_ioctx_local_write_iops | 虚拟卷本地 IOCtx 写 IOPS |  |
| zbs_volume_ioctx_local_write_latency_ns | 虚拟卷本地 IOCtx 写平均延迟 |  |
| zbs_volume_ioctx_local_write_speed_bps | 虚拟卷本地 IOCtx 写带宽 |  |
| zbs_volume_ioctx_read_iops | 虚拟卷 IOCtx 读 IOPS |  |
| zbs_volume_ioctx_read_latency_ns | 虚拟卷 IOCtx 读平均延迟 |  |
| zbs_volume_ioctx_read_speed_bps | 虚拟卷 IOCtx 读带宽 |  |
| zbs_volume_ioctx_readwrite_iops | 虚拟卷 IOCtx 读写 IOPS |  |
| zbs_volume_ioctx_readwrite_latency_ns | 虚拟卷 IOCtx 平均延迟 |  |
| zbs_volume_ioctx_readwrite_speed_bps | 虚拟卷 IOCtx 读写带宽 |  |
| zbs_volume_ioctx_write_iops | 虚拟卷 IOCtx 写 IOPS |  |
| zbs_volume_ioctx_write_latency_ns | 虚拟卷 IOCtx 写平均延迟 |  |
| zbs_volume_ioctx_write_speed_bps | 虚拟卷 IOCtx 写带宽 |  |
| zbs_volume_logical_size_bytes | 虚拟卷总逻辑大小 |  |
| zbs_volume_logical_used_size_bytes | 虚拟卷已使用逻辑空间大小 |  |
| zbs_volume_perf_shared_logical_size_bytes | 虚拟卷性能层共享逻辑空间大小 |  |
| zbs_volume_perf_unique_logical_size_bytes | 虚拟卷性能层独占逻辑空间大小 |  |
| zbs_volume_read_iops | 虚拟卷读 IOPS |  |
| zbs_volume_read_latency_ns | 虚拟卷读 IO 平均延迟 |  |
| zbs_volume_read_size_bytes | 虚拟卷读请求平均大小 |  |
| zbs_volume_read_speed_bps | 虚拟卷读带宽 |  |
| zbs_volume_readwrite_iop30s | 虚拟卷过去 30s 的 IO 总数 |  |
| zbs_volume_readwrite_iops | 虚拟卷的读写 IOPS |  |
| zbs_volume_readwrite_latency_ns | 虚拟卷平均 IO 延迟 |  |
| zbs_volume_readwrite_size_bytes | 虚拟卷平均请求大小 |  |
| zbs_volume_readwrite_speed_bps | 虚拟卷读写带宽 |  |
| zbs_volume_write_iops | 虚拟卷写 IOPS |  |
| zbs_volume_write_latency_ns | 虚拟卷写 IO 平均延迟 |  |
| zbs_volume_write_size_bytes | 虚拟卷写请求平均大小 |  |
| zbs_volume_write_speed_bps | 虚拟卷写带宽 |  |
| zbs_zone_maximum_proportion_of_rack_space | Rack 的数据容量在 Zone 内的比例 |  |
