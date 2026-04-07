---
name: metrics-lookup
description: 查询 ZBS/ELF/SFS/SKS/CloudTower/Everoute/备份/复制等产品的监控指标信息，覆盖约 1400 个指标。只要用户涉及指标含义、指标名查找、告警规则解读、Grafana/Prometheus 指标说明，都应使用本 skill。典型触发场景：询问某个指标名（如 zbs_volume_read_iops、everoute_pod_restart_count）的含义或中文说明；用关键词（如"读延迟"、"GC"、"IOPS"、"NFS"、"备份仓库"）反查有哪些对应指标；看到告警或监控面板中的指标名不理解其含义；想了解某个子系统（如 chunk、volume、host、ELF VM、SFS、Everoute）有哪些相关监控指标。
---

# Metrics Lookup

## 概述

本 skill 提供对 ZBS/ELF/SFS/SKS/CloudTower/Everoute/备份/复制等产品监控指标的查询能力，覆盖约 1400 个指标。每个指标包含：指标名（`metric_name`）、中文说明（`metric_help_message_cn`）、适用版本。

## 查询步骤

1. 读取 [references/index.md](references/index.md)
2. 若用户给出了具体指标名，按"前缀匹配表"选文件；否则按"语义关键词表"选文件
3. 加载选定的 references 文件（可能 1-2 个，同一指标可能跨产品存在）
4. 在表格中做子串匹配（大小写不敏感）；多个关键词时，任一词命中即算匹配
5. 返回所有匹配行，格式为：指标名 + 中文说明 + 适用版本

`index.md` 包含前缀匹配表和语义路由表，是选文件的唯一参考。

## 结果处理

- 匹配结果超过 20 条时，只展示前 20 条，并提示用户"结果较多，建议缩小关键词范围"
- 若所有文件均无匹配，告知用户未找到相关指标，并建议尝试更换关键词（例如用英文前缀、子系统名称等）
