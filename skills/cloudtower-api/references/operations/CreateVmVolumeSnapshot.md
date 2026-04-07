# POST /create-vm-volume-snapshot

**Resource:** [VmVolumeSnapshot](../resources/VmVolumeSnapshot.md)
**Operation ID:** `CreateVmVolumeSnapshot`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [VmVolumeSnapshotCreationParams](../schemas/Vm/VmVolumeSnapshotCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VmVolumeSnapshot_](../schemas/With/WithTask-VmVolumeSnapshot.md)

## Security

- **Authorization**
