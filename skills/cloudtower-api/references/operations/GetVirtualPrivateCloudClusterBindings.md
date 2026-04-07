# POST /get-virtual-private-cloud-cluster-bindings

**Resource:** [VirtualPrivateCloudClusterBinding](../resources/VirtualPrivateCloudClusterBinding.md)
**Operation ID:** `GetVirtualPrivateCloudClusterBindings`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudClusterBindingsRequestBody](../schemas/Get/GetVirtualPrivateCloudClusterBindingsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VirtualPrivateCloudClusterBinding](../schemas/Virtual/VirtualPrivateCloudClusterBinding.md)

## Security

- **Authorization**
