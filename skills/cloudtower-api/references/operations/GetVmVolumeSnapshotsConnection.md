# POST /get-vm-volume-snapshots-connection

**Resource:** [VmVolumeSnapshot](../resources/VmVolumeSnapshot.md)
**Operation ID:** `GetVmVolumeSnapshotsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmVolumeSnapshotsConnectionRequestBody](../schemas/Get/GetVmVolumeSnapshotsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmVolumeSnapshotConnection](../schemas/Vm/VmVolumeSnapshotConnection.md)

## Security

- **Authorization**
