# SFS（SMTX File Storage，分布式文件存储）指标

| metric_name | 中文说明 | 适用版本 |
|---|---|---|
| client_requests_total | 客户端请求总数 | v1.0.0 及以上 |
| last_client_update | 客户端最后更新时间 | v1.0.0 及以上 |
| nfs_bytes_received_by_export_total | 按导出分类的 NFS 接收总字节数 | v1.0.0 及以上 |
| nfs_bytes_received_total | NFS 接收的总字节数 | v1.0.0 及以上 |
| nfs_bytes_sent_by_export_total | 按导出分类的 NFS 发送总字节数 | v1.0.0 及以上 |
| nfs_bytes_sent_total | NFS 发送的总字节数 | v1.0.0 及以上 |
| nfs_errors_total | NFS 错误总数 | v1.0.0 及以上 |
| nfs_latency_ms | NFS 请求延迟（毫秒） | v1.0.0 及以上 |
| nfs_latency_ms_by_export | 按导出分类的 NFS 请求延迟（毫秒） | v1.0.0 及以上 |
| nfs_request_size_by_export_bytes | 按导出分类的 NFS 请求大小（字节） | v1.0.0 及以上 |
| nfs_request_size_bytes | NFS 请求大小（字节） | v1.0.0 及以上 |
| nfs_requests_by_export_total | 按导出分类的 NFS 请求总数 | v1.0.0 及以上 |
| nfs_requests_total | NFS 请求总数 | v1.0.0 及以上 |
| nfs_response_size_by_export_bytes | 按导出分类的 NFS 响应大小（字节） | v1.0.0 及以上 |
| nfs_response_size_bytes | NFS 响应大小（字节） | v1.0.0 及以上 |
| rpcs_completed_total | 已完成的 RPC 总数 | v1.0.0 及以上 |
| rpcs_in_flight | 正在处理的 RPC 数 | v1.0.0 及以上 |
| rpcs_received_total | 接收的 RPC 总数 | v1.0.0 及以上 |
| request_concurrency | 正在处理的并发请求数 | v1.0.0–v1.1.2 |
| request_latency_ms | 请求延迟（毫秒） | v1.0.0–v1.1.2 |
| request_latency_ns | 请求延迟（纳秒） | v1.0.0–v1.1.2 |
| request_size_bytes | 请求大小（字节） | v1.0.0–v1.1.2 |
| sfs_active_stats | 应用程序分配的活跃页面总字节数 | v1.3.0 及以上 |
| sfs_allocated_stats | 应用程序分配的总字节数 | v1.3.0 及以上 |
| sfs_buffer_pool_count | 缓冲池数量 | v1.3.0 及以上 |
| sfs_buffer_pool_mbytes | 缓冲池大小（MB） | v1.3.0 及以上 |
| sfs_dirty_stats | 非活跃且非元数据的物理内存总字节数 | v1.3.0 及以上 |
| sfs_extent_avail_stats | 竞技场中已分配但未使用的区段结构数量 | v1.3.0 及以上 |
| sfs_fragmentation_ratio | 小 bin 浪费内存占总分配内存的比例 | v1.3.0 及以上 |
| sfs_internal_fragmentation_stats | 活跃空间与分配空间之间浪费的虚拟内存总字节数 | v1.3.0 及以上 |
| sfs_large_allocated_stats | 大对象（>16KB）当前分配的字节数 | v1.3.0 及以上 |
| sfs_mapped_stats | 分配器映射的活跃区段总字节数 | v1.3.0 及以上 |
| sfs_metadata_stats | jemalloc 元数据占用的总字节数 | v1.3.0 及以上 |
| sfs_muzzy_stats | 标记为 MADV_FREE 的内存总字节数 | v1.3.0 及以上 |
| sfs_prefetch_dir_failure_count | 目录预取失败计数 | v1.3.0 及以上 |
| sfs_prefetch_dir_size | 预取目录大小 | v1.3.0 及以上 |
| sfs_prefetch_file_failure_count | 文件预取失败计数 | v1.3.0 及以上 |
| sfs_prefetch_file_size_kbytes | 预取文件大小（KB） | v1.3.0 及以上 |
| sfs_prefetch_flow_control_duration | 预取流控耗时 | v1.3.0 及以上 |
| sfs_prefetch_flow_control_inflight_count | 预取流控正在处理的请求数 | v1.3.0 及以上 |
| sfs_process_cpu_seconds_total | 用户和系统 CPU 总耗时（秒） | v1.3.0 及以上 |
| sfs_process_max_fds | 最大文件描述符数量 | v1.3.0 及以上 |
| sfs_process_open_fds | 打开的文件描述符数量 | v1.3.0 及以上 |
| sfs_process_resident_memory_bytes | 进程常驻内存大小（字节） | v1.3.0 及以上 |
| sfs_process_start_time_seconds | 进程启动时间（Unix 纪元秒） | v1.3.0 及以上 |
| sfs_process_threads | 进程中的操作系统线程数 | v1.3.0 及以上 |
| sfs_process_virtual_memory_bytes | 进程虚拟内存大小（字节） | v1.3.0 及以上 |
| sfs_process_virtual_memory_mapping_size | 进程虚拟内存映射大小 | v1.3.0 及以上 |
| sfs_read_full_count | 完整读取计数 | v1.3.0 及以上 |
| sfs_read_hit_count | 读取缓存命中计数 | v1.3.0 及以上 |
| sfs_read_interference_count | 读取干扰计数 | v1.3.0 及以上 |
| sfs_read_miss_count | 读取缓存未命中计数 | v1.3.0 及以上 |
| sfs_resident_stats | 物理常驻数据页面的总字节数 | v1.3.0 及以上 |
| sfs_retained_stats | 保留的虚拟内存映射总字节数 | v1.3.0 及以上 |
| sfs_rpc_inflight_count | RPC 正在处理的请求数 | v1.2.0 及以上 |
| sfs_rpc_request_size_bytes | RPC 请求大小（字节） | v1.2.0 及以上 |
| sfs_rpc_requests_count | RPC 请求计数 | v1.2.0 及以上 |
| sfs_rpc_response_duration | RPC 响应耗时 | v1.2.0 及以上 |
| sfs_rss_ratio | 常驻集大小占分配内存的百分比 | v1.3.0 及以上 |
| sfs_small_allocated_stats | 小对象（<=16KB）当前分配的字节数 | v1.3.0 及以上 |
| sfs_table_cache_dir_count | 表缓存目录数量 | v1.3.0 及以上 |
| sfs_table_cache_file_count | 表缓存文件数量 | v1.3.0 及以上 |
| sfs_commit_handle_duration | 提交处理耗时 | v1.3.0 及以上 |
| sfs_commit_vec_size | 提交向量大小 | v1.3.0 及以上 |
| sfs_journal_apply_tx_duration | 日志应用事务耗时 | v1.3.0 及以上 |
| sfs_journal_super_block_duration | 日志超级块耗时 | v1.3.0 及以上 |
| sfs_journal_write_log_duration | 日志写入耗时 | v1.3.0 及以上 |
| sfs_revoke_delegation_duration | 委托撤销耗时 | v1.3.0 及以上 |
| sfs_revoke_failure_count | 撤销失败计数 | v1.3.0 及以上 |
| sfs_revoke_inflight_count | 正在处理的撤销请求数 | v1.3.0 及以上 |
| sfs_tx_handle_duration | 事务处理耗时 | v1.3.0 及以上 |
| sfs_txs_inflight_count | 正在处理的事务数 | v1.3.0 及以上 |
| sfs_uzfs_read_delays | uZFS 读取延迟（纳秒） | v1.2.0 及以上 |
| sfs_uzfs_request_concurrency | uZFS 正在处理的并发请求数 | v1.2.0 及以上 |
| sfs_uzfs_request_latency_ns | uZFS 请求延迟（纳秒） | v1.2.0 及以上 |
| sfs_uzfs_txg_delays | uZFS TXG 延迟（纳秒） | v1.2.0 及以上 |
| sfs_uzfs_write_delays | uZFS 写入延迟（纳秒） | v1.2.0 及以上 |
| uzfs_request_concurrency | uZFS 正在处理的并发请求数 | v1.0.0–v1.1.2 |
| uzfs_request_latency_ns | uZFS 请求延迟（纳秒） | v1.0.0–v1.1.2 |
| sfs_hdfs_rpc_inflight_count | HDFS RPC 正在处理的请求数 | v1.3.0 及以上 |
| sfs_hdfs_rpc_request_size_bytes | HDFS RPC 请求大小（字节） | v1.3.0 及以上 |
| sfs_hdfs_rpc_response_duration | HDFS RPC 响应耗时 | v1.3.0 及以上 |
