# POST /get-nvmf-namespaces

**Resource:** [NvmfNamespace](../resources/NvmfNamespace.md)
**Operation ID:** `GetNvmfNamespaces`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNvmfNamespacesRequestBody](../schemas/Get/GetNvmfNamespacesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [NvmfNamespace](../schemas/Nvmf/NvmfNamespace.md)

## Security

- **Authorization**
