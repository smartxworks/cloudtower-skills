# POST /get-vm-volume-snapshots

**Resource:** [VmVolumeSnapshot](../resources/VmVolumeSnapshot.md)
**Operation ID:** `GetVmVolumeSnapshots`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmVolumeSnapshotsRequestBody](../schemas/Get/GetVmVolumeSnapshotsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VmVolumeSnapshot](../schemas/Vm/VmVolumeSnapshot.md)

## Security

- **Authorization**
