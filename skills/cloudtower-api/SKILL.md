---
name: cloudtower-api
description: cloudtower operation API and SDK. Use when working with the cloudtower-api or when the user needs to interact with this API.
metadata:
  api-version: "4.8.0"
  openapi-version: "3.0.0"
---

# cloudtower-api

cloudtower operation API and SDK

## How to Use This Skill

This API documentation is split into multiple files for on-demand loading.

**Directory structure:**
```
references/
├── resources/      # 130 resource index files
├── operations/     # 575 operation detail files
└── schemas/        # 164 schema groups, 1894 schema files
```

**Navigation flow:**
1. Find the resource you need in the list below
2. Read `references/resources/<resource>.md` to see available operations
3. Read `references/operations/<operation>.md` for full details
4. If an operation references a schema, read `references/schemas/<prefix>/<schema>.md`

## Base URL

- `/`
## API Endpoint Prefix

- `/v2/api`
- Operation paths in `references/operations/*.md` should be called as `/v2/api` + operation path.


## Authentication

Supported methods: **Authorization**, **Basic**. See `references/authentication.md` for details.

## Async Operations and Tasks

Most mutation operations are asynchronous. Instead of blocking, the API returns immediately with a placeholder resource and a task reference. As a result, a successful response does **not** guarantee that the operation has finished; the returned `data` (except for the resource `id`) should be treated as temporary.

Mutation responses are typically `WithTask<T>` or `Array<WithTask<T>>`. See the schema index at [With schemas](references/schemas/With/_index.md) for concrete types.

Use the task ID to track completion via the Task resource:

- Resource: [Task](references/resources/Task.md)
- Operation: [GetTasks](references/operations/GetTasks.md)

Poll the task until it finishes (success or failure), then fetch the latest resource state by ID. If `task_id` is `null`, the operation is synchronous and no polling is required.
## Resources

- **Vm** → `references/resources/Vm.md` (58 ops)
- **Metrics** → `references/resources/Metrics.md` (17 ops)
- **Cluster** → `references/resources/Cluster.md` (15 ops)
- **BackupPlan** → `references/resources/BackupPlan.md` (13 ops)
- **Host** → `references/resources/Host.md` (11 ops)
- **ContentLibraryVmTemplate** → `references/resources/ContentLibraryVmTemplate.md` (10 ops)
- **VmVolume** → `references/resources/VmVolume.md` (10 ops)
- **GlobalSettings** → `references/resources/GlobalSettings.md` (9 ops)
- **ContentLibraryImage** → `references/resources/ContentLibraryImage.md` (8 ops)
- **IscsiLun** → `references/resources/IscsiLun.md` (8 ops)
- **SnapshotPlan** → `references/resources/SnapshotPlan.md` (8 ops)
- **User** → `references/resources/User.md` (8 ops)
- **CloudTowerApplication** → `references/resources/CloudTowerApplication.md` (7 ops)
- **Datacenter** → `references/resources/Datacenter.md` (7 ops)
- **Label** → `references/resources/Label.md` (7 ops)
- **NvmfNamespace** → `references/resources/NvmfNamespace.md` (7 ops)
- **Vds** → `references/resources/Vds.md` (7 ops)
- **Vlan** → `references/resources/Vlan.md` (7 ops)
- **BrickTopo** → `references/resources/BrickTopo.md` (6 ops)
- **GpuDevice** → `references/resources/GpuDevice.md` (6 ops)
- **ReportTemplate** → `references/resources/ReportTemplate.md` (6 ops)
- **SnapshotGroup** → `references/resources/SnapshotGroup.md` (6 ops)
- **VmTemplate** → `references/resources/VmTemplate.md` (6 ops)
- **AlertNotifier** → `references/resources/AlertNotifier.md` (6 ops)
- **ConsistencyGroupSnapshot** → `references/resources/ConsistencyGroupSnapshot.md` (5 ops)
- **ConsistencyGroup** → `references/resources/ConsistencyGroup.md` (5 ops)
- **EntityFilter** → `references/resources/EntityFilter.md` (5 ops)
- **Graph** → `references/resources/Graph.md` (5 ops)
- **IscsiTarget** → `references/resources/IscsiTarget.md` (5 ops)
- **ElfImage** → `references/resources/ElfImage.md` (5 ops)
- **IsolationPolicy** → `references/resources/IsolationPolicy.md` (5 ops)
- **LogCollection** → `references/resources/LogCollection.md` (5 ops)
- **NamespaceGroup** → `references/resources/NamespaceGroup.md` (5 ops)
- **NetworkPolicyRuleService** → `references/resources/NetworkPolicyRuleService.md` (5 ops)
- **NfsExport** → `references/resources/NfsExport.md` (5 ops)
- **NvmfSubsystem** → `references/resources/NvmfSubsystem.md` (5 ops)
- **Organization** → `references/resources/Organization.md` (5 ops)
- **RackTopo** → `references/resources/RackTopo.md` (5 ops)
- **UserRoleNext** → `references/resources/UserRoleNext.md` (5 ops)
- **SecurityGroup** → `references/resources/SecurityGroup.md` (5 ops)
- **SecurityPolicy** → `references/resources/SecurityPolicy.md` (5 ops)
- **SnmpTransport** → `references/resources/SnmpTransport.md` (5 ops)
- **SnmpTrapReceiver** → `references/resources/SnmpTrapReceiver.md` (5 ops)
- **UsbDevice** → `references/resources/UsbDevice.md` (5 ops)
- **View** → `references/resources/View.md` (5 ops)
- **VirtualPrivateCloudFloatingIp** → `references/resources/VirtualPrivateCloudFloatingIp.md` (5 ops)
- **VirtualPrivateCloudNatGateway** → `references/resources/VirtualPrivateCloudNatGateway.md` (5 ops)
- **VirtualPrivateCloudRouteTable** → `references/resources/VirtualPrivateCloudRouteTable.md` (5 ops)
- **VirtualPrivateCloudRouterGateway** → `references/resources/VirtualPrivateCloudRouterGateway.md` (5 ops)
- **VirtualPrivateCloudSecurityGroup** → `references/resources/VirtualPrivateCloudSecurityGroup.md` (5 ops)
- **VirtualPrivateCloudSecurityPolicy** → `references/resources/VirtualPrivateCloudSecurityPolicy.md` (5 ops)
- **VirtualPrivateCloudSubnet** → `references/resources/VirtualPrivateCloudSubnet.md` (5 ops)
- **VirtualPrivateCloud** → `references/resources/VirtualPrivateCloud.md` (5 ops)
- **VmFolder** → `references/resources/VmFolder.md` (5 ops)
- **VmPlacementGroup** → `references/resources/VmPlacementGroup.md` (5 ops)
- **GlobalAlertRule** → `references/resources/GlobalAlertRule.md` (4 ops)
- **Disk** → `references/resources/Disk.md` (4 ops)
- **IscsiLunSnapshot** → `references/resources/IscsiLunSnapshot.md` (4 ops)
- **NvmfNamespaceSnapshot** → `references/resources/NvmfNamespaceSnapshot.md` (4 ops)
- **Task** → `references/resources/Task.md` (4 ops)
- **VcenterAccount** → `references/resources/VcenterAccount.md` (4 ops)
- **VmSnapshot** → `references/resources/VmSnapshot.md` (4 ops)
- **VmVolumeSnapshot** → `references/resources/VmVolumeSnapshot.md` (4 ops)
- **Alert** → `references/resources/Alert.md` (3 ops)
- **UserAuditLog** → `references/resources/UserAuditLog.md` (3 ops)
- **Ovf** → `references/resources/Ovf.md` (3 ops)
- **License** → `references/resources/License.md` (3 ops)
- **NfsInode** → `references/resources/NfsInode.md` (3 ops)
- **Nic** → `references/resources/Nic.md` (3 ops)
- **NodeTopo** → `references/resources/NodeTopo.md` (3 ops)
- **ReplicationPlan** → `references/resources/ReplicationPlan.md` (3 ops)
- **SvtImage** → `references/resources/SvtImage.md` (3 ops)
- **UploadTask** → `references/resources/UploadTask.md` (3 ops)
- **VsphereEsxiAccount** → `references/resources/VsphereEsxiAccount.md` (3 ops)
- **Observability** → `references/resources/Observability.md` (2 ops)
- **AlertRule** → `references/resources/AlertRule.md` (2 ops)
- **Application** → `references/resources/Application.md` (2 ops)
- **BackupPlanExecution** → `references/resources/BackupPlanExecution.md` (2 ops)
- **BackupRestoreExecution** → `references/resources/BackupRestoreExecution.md` (2 ops)
- **BackupRestorePoint** → `references/resources/BackupRestorePoint.md` (2 ops)
- **BackupService** → `references/resources/BackupService.md` (2 ops)
- **BackupStoreRepository** → `references/resources/BackupStoreRepository.md` (2 ops)
- **BackupTargetExecution** → `references/resources/BackupTargetExecution.md` (2 ops)
- **BusinessHostGroup** → `references/resources/BusinessHostGroup.md` (2 ops)
- **BusinessHost** → `references/resources/BusinessHost.md` (2 ops)
- **CloudTowerApplicationPackage** → `references/resources/CloudTowerApplicationPackage.md` (2 ops)
- **ClusterImage** → `references/resources/ClusterImage.md` (2 ops)
- **ClusterSettings** → `references/resources/ClusterSettings.md` (2 ops)
- **ClusterTopo** → `references/resources/ClusterTopo.md` (2 ops)
- **ClusterUpgradeHistory** → `references/resources/ClusterUpgradeHistory.md` (2 ops)
- **Deploy** → `references/resources/Deploy.md` (2 ops)
- **DiskPool** → `references/resources/DiskPool.md` (2 ops)
- **EcpLicense** → `references/resources/EcpLicense.md` (2 ops)
- **ElfDataStore** → `references/resources/ElfDataStore.md` (2 ops)
- **ElfStoragePolicy** → `references/resources/ElfStoragePolicy.md` (2 ops)
- **EverouteCluster** → `references/resources/EverouteCluster.md` (2 ops)
- **EverouteLicense** → `references/resources/EverouteLicense.md` (2 ops)
- **EveroutePackage** → `references/resources/EveroutePackage.md` (2 ops)
- **IscsiConnection** → `references/resources/IscsiConnection.md` (2 ops)
- **PmemDimm** → `references/resources/PmemDimm.md` (2 ops)
- **RegistryService** → `references/resources/RegistryService.md` (2 ops)
- **ReplicaVm** → `references/resources/ReplicaVm.md` (2 ops)
- **ReplicationService** → `references/resources/ReplicationService.md` (2 ops)
- **ReportTask** → `references/resources/ReportTask.md` (2 ops)
- **SmtpServer** → `references/resources/SmtpServer.md` (2 ops)
- **SnapshotPlanTask** → `references/resources/SnapshotPlanTask.md` (2 ops)
- **SystemAuditLog** → `references/resources/SystemAuditLog.md` (2 ops)
- **V2EverouteLicense** → `references/resources/V2EverouteLicense.md` (2 ops)
- **VirtualPrivateCloudClusterBinding** → `references/resources/VirtualPrivateCloudClusterBinding.md` (2 ops)
- **VirtualPrivateCloudEdgeGatewayGroup** → `references/resources/VirtualPrivateCloudEdgeGatewayGroup.md` (2 ops)
- **VirtualPrivateCloudEdgeGateway** → `references/resources/VirtualPrivateCloudEdgeGateway.md` (2 ops)
- **VirtualPrivateCloudExternalSubnetGroup** → `references/resources/VirtualPrivateCloudExternalSubnetGroup.md` (2 ops)
- **VirtualPrivateCloudExternalSubnet** → `references/resources/VirtualPrivateCloudExternalSubnet.md` (2 ops)
- **VmDisk** → `references/resources/VmDisk.md` (2 ops)
- **VmEntityFilterResult** → `references/resources/VmEntityFilterResult.md` (2 ops)
- **VmExportFile** → `references/resources/VmExportFile.md` (2 ops)
- **VmNic** → `references/resources/VmNic.md` (2 ops)
- **Witness** → `references/resources/Witness.md` (2 ops)
- **ZoneTopo** → `references/resources/ZoneTopo.md` (2 ops)
- **Zone** → `references/resources/Zone.md` (2 ops)
- **Ntp** → `references/resources/Ntp.md` (1 ops)
- **ResourceChange** → `references/resources/ResourceChange.md` (1 ops)
- **Internal** → `references/resources/Internal.md` (1 ops)
- **TableReporter** → `references/resources/TableReporter.md` (1 ops)
- **ApiInfo** → `references/resources/ApiInfo.md` (1 ops)
- **DiscoveredHost** → `references/resources/DiscoveredHost.md` (1 ops)
- **Ipmi** → `references/resources/Ipmi.md` (1 ops)
- **LogServiceConfig** → `references/resources/LogServiceConfig.md` (1 ops)
- **PciDevice** → `references/resources/PciDevice.md` (1 ops)
- **WitnessService** → `references/resources/WitnessService.md` (1 ops)
