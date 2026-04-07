# POST /get-virtual-private-cloud-router-gateways-connection

**Resource:** [VirtualPrivateCloudRouterGateway](../resources/VirtualPrivateCloudRouterGateway.md)
**Operation ID:** `GetVirtualPrivateCloudRouterGatewaysConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudRouterGatewaysConnectionRequestBody](../schemas/Get/GetVirtualPrivateCloudRouterGatewaysConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VirtualPrivateCloudRouterGatewayConnection](../schemas/Virtual/VirtualPrivateCloudRouterGatewayConnection.md)

## Security

- **Authorization**
