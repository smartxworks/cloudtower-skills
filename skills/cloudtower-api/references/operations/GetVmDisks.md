# POST /get-vm-disks

**Resource:** [VmDisk](../resources/VmDisk.md)
**Operation ID:** `GetVmDisks`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmDisksRequestBody](../schemas/Get/GetVmDisksRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VmDisk](../schemas/Vm/VmDisk.md)

## Security

- **Authorization**
