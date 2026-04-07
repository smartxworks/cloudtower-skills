# POST /get-vm-snapshots-connection

**Resource:** [VmSnapshot](../resources/VmSnapshot.md)
**Operation ID:** `GetVmSnapshotsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmSnapshotsConnectionRequestBody](../schemas/Get/GetVmSnapshotsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmSnapshotConnection](../schemas/Vm/VmSnapshotConnection.md)

## Security

- **Authorization**
