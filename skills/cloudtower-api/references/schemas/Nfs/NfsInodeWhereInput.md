# NfsInodeWhereInput

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AND` | NfsInodeWhereInput[] | No |  |
| `NOT` | NfsInodeWhereInput[] | No |  |
| `OR` | NfsInodeWhereInput[] | No |  |
| `assigned_size` | integer (int64) | No |  |
| `assigned_size_gt` | integer (int64) | No |  |
| `assigned_size_gte` | integer (int64) | No |  |
| `assigned_size_in` | integer[] | No |  |
| `assigned_size_lt` | integer (int64) | No |  |
| `assigned_size_lte` | integer (int64) | No |  |
| `assigned_size_not` | integer (int64) | No |  |
| `assigned_size_not_in` | integer[] | No |  |
| `downgraded_prioritized_space` | integer (int64) | No |  |
| `downgraded_prioritized_space_gt` | integer (int64) | No |  |
| `downgraded_prioritized_space_gte` | integer (int64) | No |  |
| `downgraded_prioritized_space_in` | integer[] | No |  |
| `downgraded_prioritized_space_lt` | integer (int64) | No |  |
| `downgraded_prioritized_space_lte` | integer (int64) | No |  |
| `downgraded_prioritized_space_not` | integer (int64) | No |  |
| `downgraded_prioritized_space_not_in` | integer[] | No |  |
| `ec_k` | integer (int32) | No |  |
| `ec_k_gt` | integer (int32) | No |  |
| `ec_k_gte` | integer (int32) | No |  |
| `ec_k_in` | integer[] | No |  |
| `ec_k_lt` | integer (int32) | No |  |
| `ec_k_lte` | integer (int32) | No |  |
| `ec_k_not` | integer (int32) | No |  |
| `ec_k_not_in` | integer[] | No |  |
| `ec_m` | integer (int32) | No |  |
| `ec_m_gt` | integer (int32) | No |  |
| `ec_m_gte` | integer (int32) | No |  |
| `ec_m_in` | integer[] | No |  |
| `ec_m_lt` | integer (int32) | No |  |
| `ec_m_lte` | integer (int32) | No |  |
| `ec_m_not` | integer (int32) | No |  |
| `ec_m_not_in` | integer[] | No |  |
| `encrypt_method` | any | No |  |
| `encrypt_method_in` | EncryptMethod[] | No |  |
| `encrypt_method_not` | any | No |  |
| `encrypt_method_not_in` | EncryptMethod[] | No |  |
| `entityAsyncStatus` | any | No |  |
| `entityAsyncStatus_in` | EntityAsyncStatus[] | No |  |
| `entityAsyncStatus_not` | any | No |  |
| `entityAsyncStatus_not_in` | EntityAsyncStatus[] | No |  |
| `file` | boolean | No |  |
| `file_not` | boolean | No |  |
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
| `labels_every` | any | No |  |
| `labels_none` | any | No |  |
| `labels_some` | any | No |  |
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
| `local_updated_at` | string | No |  |
| `local_updated_at_gt` | string | No |  |
| `local_updated_at_gte` | string | No |  |
| `local_updated_at_in` | string[] | No |  |
| `local_updated_at_lt` | string | No |  |
| `local_updated_at_lte` | string | No |  |
| `local_updated_at_not` | string | No |  |
| `local_updated_at_not_in` | string[] | No |  |
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
| `nfs_export` | any | No |  |
| `parent_id` | string | No |  |
| `parent_id_contains` | string | No |  |
| `parent_id_ends_with` | string | No |  |
| `parent_id_gt` | string | No |  |
| `parent_id_gte` | string | No |  |
| `parent_id_in` | string[] | No |  |
| `parent_id_lt` | string | No |  |
| `parent_id_lte` | string | No |  |
| `parent_id_not` | string | No |  |
| `parent_id_not_contains` | string | No |  |
| `parent_id_not_ends_with` | string | No |  |
| `parent_id_not_in` | string[] | No |  |
| `parent_id_not_starts_with` | string | No |  |
| `parent_id_starts_with` | string | No |  |
| `prioritized` | boolean | No |  |
| `prioritized_not` | boolean | No |  |
| `resiliency_type` | any | No |  |
| `resiliency_type_in` | ResiliencyType[] | No |  |
| `resiliency_type_not` | any | No |  |
| `resiliency_type_not_in` | ResiliencyType[] | No |  |
| `shared_size` | integer (int64) | No |  |
| `shared_size_gt` | integer (int64) | No |  |
| `shared_size_gte` | integer (int64) | No |  |
| `shared_size_in` | integer[] | No |  |
| `shared_size_lt` | integer (int64) | No |  |
| `shared_size_lte` | integer (int64) | No |  |
| `shared_size_not` | integer (int64) | No |  |
| `shared_size_not_in` | integer[] | No |  |
| `snapshot_num` | integer (int32) | No |  |
| `snapshot_num_gt` | integer (int32) | No |  |
| `snapshot_num_gte` | integer (int32) | No |  |
| `snapshot_num_in` | integer[] | No |  |
| `snapshot_num_lt` | integer (int32) | No |  |
| `snapshot_num_lte` | integer (int32) | No |  |
| `snapshot_num_not` | integer (int32) | No |  |
| `snapshot_num_not_in` | integer[] | No |  |
| `unique_logical_size` | number (double) | No |  |
| `unique_logical_size_gt` | number (double) | No |  |
| `unique_logical_size_gte` | number (double) | No |  |
| `unique_logical_size_in` | number[] | No |  |
| `unique_logical_size_lt` | number (double) | No |  |
| `unique_logical_size_lte` | number (double) | No |  |
| `unique_logical_size_not` | number (double) | No |  |
| `unique_logical_size_not_in` | number[] | No |  |
| `unique_size` | integer (int64) | No |  |
| `unique_size_gt` | integer (int64) | No |  |
| `unique_size_gte` | integer (int64) | No |  |
| `unique_size_in` | integer[] | No |  |
| `unique_size_lt` | integer (int64) | No |  |
| `unique_size_lte` | integer (int64) | No |  |
| `unique_size_not` | integer (int64) | No |  |
| `unique_size_not_in` | integer[] | No |  |

