# POST /get-vm-snapshots

**Resource:** [VmSnapshot](../resources/VmSnapshot.md)
**Operation ID:** `GetVmSnapshots`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmSnapshotsRequestBody](../schemas/Get/GetVmSnapshotsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VmSnapshot](../schemas/Vm/VmSnapshot.md)

## Security

- **Authorization**
