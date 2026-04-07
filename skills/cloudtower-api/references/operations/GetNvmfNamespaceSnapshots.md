# POST /get-nvmf-namespace-snapshots

**Resource:** [NvmfNamespaceSnapshot](../resources/NvmfNamespaceSnapshot.md)
**Operation ID:** `GetNvmfNamespaceSnapshots`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNvmfNamespaceSnapshotsRequestBody](../schemas/Get/GetNvmfNamespaceSnapshotsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [NvmfNamespaceSnapshot](../schemas/Nvmf/NvmfNamespaceSnapshot.md)

## Security

- **Authorization**
