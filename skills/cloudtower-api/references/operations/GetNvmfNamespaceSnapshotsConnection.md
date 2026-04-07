# POST /get-nvmf-namespace-snapshots-connection

**Resource:** [NvmfNamespaceSnapshot](../resources/NvmfNamespaceSnapshot.md)
**Operation ID:** `GetNvmfNamespaceSnapshotsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNvmfNamespaceSnapshotsConnectionRequestBody](../schemas/Get/GetNvmfNamespaceSnapshotsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[NvmfNamespaceSnapshotConnection](../schemas/Nvmf/NvmfNamespaceSnapshotConnection.md)

## Security

- **Authorization**
