# 备份（Backup）指标

| metric_name | 中文说明 | 适用版本 |
|---|---|---|
| read_ahead_cache_size_bytes | 预读缓存的大小 |  |
| server_health_results_total | 服务健康状况累计量 |  |
| ping_results_total | 客户端 ping 结果的累计数量 |  |
| ping_duration_nanoseconds | ping 响应持续时间 |  |
| fp_worker_pool_submit_jobs_total | 已提交的 fp 计算任务累计数量 |  |
| fp_worker_pool_batch_call_total | BatchGetByWorkerpool 调用的累计次数 |  |
| repo_probe_results_total | 存储库探测累计结果 |  |
| repo_info | 本 metric 通过 label 提供了仓库信息，用于渲染告警信息 |  |
| repo_stat_used_size_bytes | 仓库已用大小（以字节为单位） |  |
| repo_stat_total_size_bytes | 仓库总大小（以字节为单位） |  |
| file_read_time_nanoseconds_total | 按仓库 UUID 统计文件读取 I/O 所花费的时间 |  |
| file_write_time_nanoseconds_total | 按仓库 UUID 统计的文件写入 IO 耗时 |  |
| file_read_requests_total | 按仓库 UUID 处理的文件读取 I/O 请求 |  |
| file_write_requests_total | 按仓库 UUID 处理的文件写入 I/O 请求 |  |
| file_read_bytes_total | 按仓库 UUID 处理的文件读取 I/O 字节数 |  |
| file_write_bytes_total | 按仓库 UUID 处理的文件写入 I/O 字节数 |  |
| sparse_read_time_nanoseconds_total | 按任务 UUID 统计稀疏读取 I/O 所花费的时间 |  |
| sparse_write_time_nanoseconds_total | 按任务 UUID 统计稀疏写入 I/O 所花费的时间 |  |
| sparse_read_requests_total | 按任务 UUID 处理的稀疏读取 I/O 请求 |  |
| sparse_write_requests_total | 按任务 UUID 处理的稀疏写入 I/O 请求 |  |
| sparse_read_bytes_total | 按任务 UUID 处理的稀疏读取 I/O 字节数 |  |
| sparse_write_bytes_total | 按任务 UUID 处理的稀疏写入 I/O 字节数 |  |
| zbs_read_time_nanoseconds_total | ZBS 读取 I/O 所花费的时间，按 ZBS 主机和任务 UID 分类 |  |
| zbs_read_requests_total | ZBS 读取 I/O 请求已处理，由 ZBS 主机和任务 UID 处理。 |  |
| zbs_read_bytes_total | ZBS 读取 IO 已处理字节数（按 ZBS 主机及任务 UID 划分） |  |
| zbs_write_time_nanoseconds_total | ZBS 写入 IO 所花费的时间，按 ZBS 主机和任务 UID 统计 |  |
| zbs_write_requests_total | ZBS 已处理写入 I/O 请求，由 ZBS 主机和任务 UID 处理 |  |
| zbs_write_bytes_total | ZBS 主机和任务 UID 处理的 ZBS 写入 I/O 字节数 |  |
| offset_iterator_total_bytes | 按 volume_id 统计 ValidOffsetIter.NextValidOffsetRange 返回的累计字节数 |  |
| offset_iterator_total_requests | 按 volume_id 统计 ValidOffsetIter.NextValidOffsetRange 的累计调用次数 |  |
