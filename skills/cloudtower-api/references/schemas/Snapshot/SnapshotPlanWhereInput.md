# SnapshotPlanWhereInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AND` | SnapshotPlanWhereInput[] | No |  |
| `NOT` | SnapshotPlanWhereInput[] | No |  |
| `OR` | SnapshotPlanWhereInput[] | No |  |
| `auto_delete_num` | integer (int32) | No |  |
| `auto_delete_num_gt` | integer (int32) | No |  |
| `auto_delete_num_gte` | integer (int32) | No |  |
| `auto_delete_num_in` | integer[] | No |  |
| `auto_delete_num_lt` | integer (int32) | No |  |
| `auto_delete_num_lte` | integer (int32) | No |  |
| `auto_delete_num_not` | integer (int32) | No |  |
| `auto_delete_num_not_in` | integer[] | No |  |
| `auto_execute_num` | integer (int32) | No |  |
| `auto_execute_num_gt` | integer (int32) | No |  |
| `auto_execute_num_gte` | integer (int32) | No |  |
| `auto_execute_num_in` | integer[] | No |  |
| `auto_execute_num_lt` | integer (int32) | No |  |
| `auto_execute_num_lte` | integer (int32) | No |  |
| `auto_execute_num_not` | integer (int32) | No |  |
| `auto_execute_num_not_in` | integer[] | No |  |
| `cluster` | any | No |  |
| `description` | string | No |  |
| `description_contains` | string | No |  |
| `description_ends_with` | string | No |  |
| `description_gt` | string | No |  |
| `description_gte` | string | No |  |
| `description_in` | string[] | No |  |
| `description_lt` | string | No |  |
| `description_lte` | string | No |  |
| `description_not` | string | No |  |
| `description_not_contains` | string | No |  |
| `description_not_ends_with` | string | No |  |
| `description_not_in` | string[] | No |  |
| `description_not_starts_with` | string | No |  |
| `description_starts_with` | string | No |  |
| `end_time` | string | No |  |
| `end_time_gt` | string | No |  |
| `end_time_gte` | string | No |  |
| `end_time_in` | string[] | No |  |
| `end_time_lt` | string | No |  |
| `end_time_lte` | string | No |  |
| `end_time_not` | string | No |  |
| `end_time_not_in` | string[] | No |  |
| `entityAsyncStatus` | any | No |  |
| `entityAsyncStatus_in` | EntityAsyncStatus[] | No |  |
| `entityAsyncStatus_not` | any | No |  |
| `entityAsyncStatus_not_in` | EntityAsyncStatus[] | No |  |
| `execute_plan_type` | any | No |  |
| `execute_plan_type_in` | SnapshotPlanExecuteType[] | No |  |
| `execute_plan_type_not` | any | No |  |
| `execute_plan_type_not_in` | SnapshotPlanExecuteType[] | No |  |
| `execution_tasks_every` | any | No |  |
| `execution_tasks_none` | any | No |  |
| `execution_tasks_some` | any | No |  |
| `healthy` | boolean | No |  |
| `healthy_not` | boolean | No |  |
| `id` | string | No |  |
| `id_contains` | string | No |  |
| `id_ends_with` | string | No |  |
| `id_gt` | string | No |  |
| `id_gte` | string | No |  |
| `id_in` | string[] | No |  |
| `id_lt` | string | No |  |
| `id_lte` | string | No |  |
| `id_not` | string | No |  |
| `id_not_contains` | string | No |  |
| `id_not_ends_with` | string | No |  |
| `id_not_in` | string[] | No |  |
| `id_not_starts_with` | string | No |  |
| `id_starts_with` | string | No |  |
| `last_execute_end_time` | string | No |  |
| `last_execute_end_time_gt` | string | No |  |
| `last_execute_end_time_gte` | string | No |  |
| `last_execute_end_time_in` | string[] | No |  |
| `last_execute_end_time_lt` | string | No |  |
| `last_execute_end_time_lte` | string | No |  |
| `last_execute_end_time_not` | string | No |  |
| `last_execute_end_time_not_in` | string[] | No |  |
| `last_execute_status` | any | No |  |
| `last_execute_status_in` | SnapshotPlanExecuteStatus[] | No |  |
| `last_execute_status_not` | any | No |  |
| `last_execute_status_not_in` | SnapshotPlanExecuteStatus[] | No |  |
| `last_execute_time` | string | No |  |
| `last_execute_time_gt` | string | No |  |
| `last_execute_time_gte` | string | No |  |
| `last_execute_time_in` | string[] | No |  |
| `last_execute_time_lt` | string | No |  |
| `last_execute_time_lte` | string | No |  |
| `last_execute_time_not` | string | No |  |
| `last_execute_time_not_in` | string[] | No |  |
| `local_id` | string | No |  |
| `local_id_contains` | string | No |  |
| `local_id_ends_with` | string | No |  |
| `local_id_gt` | string | No |  |
| `local_id_gte` | string | No |  |
| `local_id_in` | string[] | No |  |
| `local_id_lt` | string | No |  |
| `local_id_lte` | string | No |  |
| `local_id_not` | string | No |  |
| `local_id_not_contains` | string | No |  |
| `local_id_not_ends_with` | string | No |  |
| `local_id_not_in` | string[] | No |  |
| `local_id_not_starts_with` | string | No |  |
| `local_id_starts_with` | string | No |  |
| `logical_size_bytes` | integer (int64) | No |  |
| `logical_size_bytes_gt` | integer (int64) | No |  |
| `logical_size_bytes_gte` | integer (int64) | No |  |
| `logical_size_bytes_in` | integer[] | No |  |
| `logical_size_bytes_lt` | integer (int64) | No |  |
| `logical_size_bytes_lte` | integer (int64) | No |  |
| `logical_size_bytes_not` | integer (int64) | No |  |
| `logical_size_bytes_not_in` | integer[] | No |  |
| `manual_delete_num` | integer (int32) | No |  |
| `manual_delete_num_gt` | integer (int32) | No |  |
| `manual_delete_num_gte` | integer (int32) | No |  |
| `manual_delete_num_in` | integer[] | No |  |
| `manual_delete_num_lt` | integer (int32) | No |  |
| `manual_delete_num_lte` | integer (int32) | No |  |
| `manual_delete_num_not` | integer (int32) | No |  |
| `manual_delete_num_not_in` | integer[] | No |  |
| `manual_execute_num` | integer (int32) | No |  |
| `manual_execute_num_gt` | integer (int32) | No |  |
| `manual_execute_num_gte` | integer (int32) | No |  |
| `manual_execute_num_in` | integer[] | No |  |
| `manual_execute_num_lt` | integer (int32) | No |  |
| `manual_execute_num_lte` | integer (int32) | No |  |
| `manual_execute_num_not` | integer (int32) | No |  |
| `manual_execute_num_not_in` | integer[] | No |  |
| `mirror` | boolean | No |  |
| `mirror_not` | boolean | No |  |
| `name` | string | No |  |
| `name_contains` | string | No |  |
| `name_ends_with` | string | No |  |
| `name_gt` | string | No |  |
| `name_gte` | string | No |  |
| `name_in` | string[] | No |  |
| `name_lt` | string | No |  |
| `name_lte` | string | No |  |
| `name_not` | string | No |  |
| `name_not_contains` | string | No |  |
| `name_not_ends_with` | string | No |  |
| `name_not_in` | string[] | No |  |
| `name_not_starts_with` | string | No |  |
| `name_starts_with` | string | No |  |
| `next_execute_time` | string | No |  |
| `next_execute_time_gt` | string | No |  |
| `next_execute_time_gte` | string | No |  |
| `next_execute_time_in` | string[] | No |  |
| `next_execute_time_lt` | string | No |  |
| `next_execute_time_lte` | string | No |  |
| `next_execute_time_not` | string | No |  |
| `next_execute_time_not_in` | string[] | No |  |
| `object_num` | integer (int32) | No |  |
| `object_num_gt` | integer (int32) | No |  |
| `object_num_gte` | integer (int32) | No |  |
| `object_num_in` | integer[] | No |  |
| `object_num_lt` | integer (int32) | No |  |
| `object_num_lte` | integer (int32) | No |  |
| `object_num_not` | integer (int32) | No |  |
| `object_num_not_in` | integer[] | No |  |
| `physical_size_bytes` | integer (int64) | No |  |
| `physical_size_bytes_gt` | integer (int64) | No |  |
| `physical_size_bytes_gte` | integer (int64) | No |  |
| `physical_size_bytes_in` | integer[] | No |  |
| `physical_size_bytes_lt` | integer (int64) | No |  |
| `physical_size_bytes_lte` | integer (int64) | No |  |
| `physical_size_bytes_not` | integer (int64) | No |  |
| `physical_size_bytes_not_in` | integer[] | No |  |
| `remain_snapshot_num` | integer (int32) | No |  |
| `remain_snapshot_num_gt` | integer (int32) | No |  |
| `remain_snapshot_num_gte` | integer (int32) | No |  |
| `remain_snapshot_num_in` | integer[] | No |  |
| `remain_snapshot_num_lt` | integer (int32) | No |  |
| `remain_snapshot_num_lte` | integer (int32) | No |  |
| `remain_snapshot_num_not` | integer (int32) | No |  |
| `remain_snapshot_num_not_in` | integer[] | No |  |
| `snapshot_group_num` | integer (int32) | No |  |
| `snapshot_group_num_gt` | integer (int32) | No |  |
| `snapshot_group_num_gte` | integer (int32) | No |  |
| `snapshot_group_num_in` | integer[] | No |  |
| `snapshot_group_num_lt` | integer (int32) | No |  |
| `snapshot_group_num_lte` | integer (int32) | No |  |
| `snapshot_group_num_not` | integer (int32) | No |  |
| `snapshot_group_num_not_in` | integer[] | No |  |
| `start_time` | string | No |  |
| `start_time_gt` | string | No |  |
| `start_time_gte` | string | No |  |
| `start_time_in` | string[] | No |  |
| `start_time_lt` | string | No |  |
| `start_time_lte` | string | No |  |
| `start_time_not` | string | No |  |
| `start_time_not_in` | string[] | No |  |
| `status` | any | No |  |
| `status_in` | SnapshotPlanStatus[] | No |  |
| `status_not` | any | No |  |
| `status_not_in` | SnapshotPlanStatus[] | No |  |
| `vms_every` | any | No |  |
| `vms_none` | any | No |  |
| `vms_some` | any | No |  |

