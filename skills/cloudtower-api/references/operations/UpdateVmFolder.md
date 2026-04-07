# POST /update-vm-folder

**Resource:** [VmFolder](../resources/VmFolder.md)
**Operation ID:** `UpdateVmFolder`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VmFolderUpdationParams](../schemas/Vm/VmFolderUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VmFolder_](../schemas/With/WithTask-VmFolder.md)

## Security

- **Authorization**
