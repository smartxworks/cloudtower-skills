# POST /get-vm-disks-connection

**Resource:** [VmDisk](../resources/VmDisk.md)
**Operation ID:** `GetVmDisksConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmDisksConnectionRequestBody](../schemas/Get/GetVmDisksConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmDiskConnection](../schemas/Vm/VmDiskConnection.md)

## Security

- **Authorization**
