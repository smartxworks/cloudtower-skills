# POST /delete-vm-volume-snapshot

**Resource:** [VmVolumeSnapshot](../resources/VmVolumeSnapshot.md)
**Operation ID:** `DeleteVmVolumeSnapshot`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VmVolumeSnapshotDeletionParams](../schemas/Vm/VmVolumeSnapshotDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteVmVolumeSnapshot_](../schemas/With/WithTask-DeleteVmVolumeSnapshot.md)

## Security

- **Authorization**
