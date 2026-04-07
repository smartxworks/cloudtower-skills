# POST /create-virtual-private-cloud-router-gateway

**Resource:** [VirtualPrivateCloudRouterGateway](../resources/VirtualPrivateCloudRouterGateway.md)
**Operation ID:** `CreateVirtualPrivateCloudRouterGateway`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [VirtualPrivateCloudRouterGatewayCreationParams](../schemas/Virtual/VirtualPrivateCloudRouterGatewayCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VirtualPrivateCloudRouterGateway_](../schemas/With/WithTask-VirtualPrivateCloudRouterGateway.md)

## Security

- **Authorization**
