# POST /get-vm-folders

**Resource:** [VmFolder](../resources/VmFolder.md)
**Operation ID:** `GetVmFolders`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmFoldersRequestBody](../schemas/Get/GetVmFoldersRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VmFolder](../schemas/Vm/VmFolder.md)

## Security

- **Authorization**
