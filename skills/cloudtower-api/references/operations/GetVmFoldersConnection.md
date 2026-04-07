# POST /get-vm-folders-connection

**Resource:** [VmFolder](../resources/VmFolder.md)
**Operation ID:** `GetVmFoldersConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmFoldersConnectionRequestBody](../schemas/Get/GetVmFoldersConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmFolderConnection](../schemas/Vm/VmFolderConnection.md)

## Security

- **Authorization**
