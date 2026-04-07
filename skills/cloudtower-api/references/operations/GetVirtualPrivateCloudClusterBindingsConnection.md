# POST /get-virtual-private-cloud-cluster-bindings-connection

**Resource:** [VirtualPrivateCloudClusterBinding](../resources/VirtualPrivateCloudClusterBinding.md)
**Operation ID:** `GetVirtualPrivateCloudClusterBindingsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudClusterBindingsConnectionRequestBody](../schemas/Get/GetVirtualPrivateCloudClusterBindingsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VirtualPrivateCloudClusterBindingConnection](../schemas/Virtual/VirtualPrivateCloudClusterBindingConnection.md)

## Security

- **Authorization**
