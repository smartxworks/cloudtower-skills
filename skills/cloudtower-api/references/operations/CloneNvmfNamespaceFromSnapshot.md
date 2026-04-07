# POST /clone-nvmf-namespace-from-snapshot

**Resource:** [NvmfNamespace](../resources/NvmfNamespace.md)
**Operation ID:** `CloneNvmfNamespaceFromSnapshot`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [NvmfNamespaceCloneParams](../schemas/Nvmf/NvmfNamespaceCloneParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_NvmfNamespace_](../schemas/With/WithTask-NvmfNamespace.md)

## Security

- **Authorization**
