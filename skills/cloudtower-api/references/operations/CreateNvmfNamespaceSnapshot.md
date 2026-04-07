# POST /create-nvmf-namespace-snapshot

**Resource:** [NvmfNamespaceSnapshot](../resources/NvmfNamespaceSnapshot.md)
**Operation ID:** `CreateNvmfNamespaceSnapshot`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [NvmfNamespaceSnapshotCreationParams](../schemas/Nvmf/NvmfNamespaceSnapshotCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_NvmfNamespaceSnapshot_](../schemas/With/WithTask-NvmfNamespaceSnapshot.md)

## Security

- **Authorization**
