# POST /get-nvmf-namespaces-connection

**Resource:** [NvmfNamespace](../resources/NvmfNamespace.md)
**Operation ID:** `GetNvmfNamespacesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNvmfNamespacesConnectionRequestBody](../schemas/Get/GetNvmfNamespacesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[NvmfNamespaceConnection](../schemas/Nvmf/NvmfNamespaceConnection.md)

## Security

- **Authorization**
