# POST /delete-nvmf-namespace-snapshot

**Resource:** [NvmfNamespaceSnapshot](../resources/NvmfNamespaceSnapshot.md)
**Operation ID:** `DeleteNvmfNamespaceSnapshot`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [NvmfNamespaceSnapshotDeletionParams](../schemas/Nvmf/NvmfNamespaceSnapshotDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteNvmfNamespaceSnapshot_](../schemas/With/WithTask-DeleteNvmfNamespaceSnapshot.md)

## Security

- **Authorization**
