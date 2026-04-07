# TableReporterParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `filter` | object | Yes |  |
| `columns` | ColumnConfig[] | Yes |  |
| `name` | string | Yes |  |

## Nested Fields

### `filter`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `nvmfSubsystems` | [GetNvmfSubsystemsRequestBody](GetNvmfSubsystemsRequestBody.md) | No |  |
| `contentLibraryVmTemplates` | [GetContentLibraryVmTemplatesRequestBody](GetContentLibraryVmTemplatesRequestBody.md) | No |  |
| `nvmfNamespaceSnapshots` | [GetNvmfNamespaceSnapshotsRequestBody](GetNvmfNamespaceSnapshotsRequestBody.md) | No |  |
| `contentLibraryImages` | [GetContentLibraryImagesRequestBody](GetContentLibraryImagesRequestBody.md) | No |  |
| `nvmfNamespaces` | [GetNvmfNamespacesRequestBody](GetNvmfNamespacesRequestBody.md) | No |  |
| `namespaceGroups` | [GetNamespaceGroupsRequestBody](GetNamespaceGroupsRequestBody.md) | No |  |
| `iscsiLuns` | [GetIscsiLunsRequestBody](GetIscsiLunsRequestBody.md) | No |  |
| `tasks` | [GetTasksRequestBody](GetTasksRequestBody.md) | No |  |
| `userAuditLogs` | [GetUserAuditLogsRequestBody](GetUserAuditLogsRequestBody.md) | No |  |
| `systemAuditLogs` | [GetSystemAuditLogsRequestBody](GetSystemAuditLogsRequestBody.md) | No |  |
| `iscsiLunSnapshots` | [GetIscsiLunSnapshotsRequestBody](GetIscsiLunSnapshotsRequestBody.md) | No |  |
| `iscsiConnections` | [GetIscsiConnectionsRequestBody](GetIscsiConnectionsRequestBody.md) | No |  |
| `consistencyGroups` | [GetConsistencyGroupsRequestBody](GetConsistencyGroupsRequestBody.md) | No |  |
| `users` | [GetUsersRequestBody](GetUsersRequestBody.md) | No |  |
| `vmEntityFilters` | [GetEntityFiltersRequestBody](GetEntityFiltersRequestBody.md) | No |  |
| `snapshotPlans` | [GetSnapshotPlansRequestBody](GetSnapshotPlansRequestBody.md) | No |  |
| `globalAlertRules` | [GetGlobalAlertRulesRequestBody](GetGlobalAlertRulesRequestBody.md) | No |  |
| `alerts` | [GetAlertsRequestBody](GetAlertsRequestBody.md) | No |  |
| `vmPlacementGroups` | [GetVmPlacementGroupsRequestBody](GetVmPlacementGroupsRequestBody.md) | No |  |
| `vmTemplates` | [GetVmTemplatesRequestBody](GetVmTemplatesRequestBody.md) | No |  |
| `elfImages` | [GetElfImagesRequestBody](GetElfImagesRequestBody.md) | No |  |
| `vmVolumes` | [GetVmVolumesRequestBody](GetVmVolumesRequestBody.md) | No |  |
| `vlans` | [GetVlansRequestBody](GetVlansRequestBody.md) | No |  |
| `disks` | [GetDisksRequestBody](GetDisksRequestBody.md) | No |  |
| `vdses` | [GetVdsesRequestBody](GetVdsesRequestBody.md) | No |  |
| `elfDataStores` | [GetElfDataStoresRequestBody](GetElfDataStoresRequestBody.md) | No |  |
| `vms` | [GetVmsRequestBody](GetVmsRequestBody.md) | No |  |
| `nfsExports` | [GetNfsExportsRequestBody](GetNfsExportsRequestBody.md) | No |  |
| `iscsiTargets` | [GetIscsiTargetsRequestBody](GetIscsiTargetsRequestBody.md) | No |  |
| `usbDevices` | [GetUsbDevicesRequestBody](GetUsbDevicesRequestBody.md) | No |  |
| `nics` | [GetNicsRequestBody](GetNicsRequestBody.md) | No |  |
| `clusters` | [GetClustersRequestBody](GetClustersRequestBody.md) | No |  |
| `datacenters` | [GetDatacentersRequestBody](GetDatacentersRequestBody.md) | No |  |
| `hosts` | [GetHostsRequestBody](GetHostsRequestBody.md) | No |  |

