# POST /get-virtual-private-cloud-router-gateways

**Resource:** [VirtualPrivateCloudRouterGateway](../resources/VirtualPrivateCloudRouterGateway.md)
**Operation ID:** `GetVirtualPrivateCloudRouterGateways`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudRouterGatewaysRequestBody](../schemas/Get/GetVirtualPrivateCloudRouterGatewaysRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VirtualPrivateCloudRouterGateway](../schemas/Virtual/VirtualPrivateCloudRouterGateway.md)

## Security

- **Authorization**
