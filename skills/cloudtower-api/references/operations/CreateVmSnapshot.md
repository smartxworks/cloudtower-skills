# POST /create-vm-snapshot

**Resource:** [VmSnapshot](../resources/VmSnapshot.md)
**Operation ID:** `CreateVmSnapshot`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VmSnapshotCreationParams](../schemas/Vm/VmSnapshotCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VmSnapshot_](../schemas/With/WithTask-VmSnapshot.md)

## Security

- **Authorization**
