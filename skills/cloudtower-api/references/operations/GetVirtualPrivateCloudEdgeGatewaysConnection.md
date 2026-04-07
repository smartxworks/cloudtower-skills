# POST /get-virtual-private-cloud-edge-gateways-connection

**Resource:** [VirtualPrivateCloudEdgeGateway](../resources/VirtualPrivateCloudEdgeGateway.md)
**Operation ID:** `GetVirtualPrivateCloudEdgeGatewaysConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudEdgeGatewaysConnectionRequestBody](../schemas/Get/GetVirtualPrivateCloudEdgeGatewaysConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VirtualPrivateCloudEdgeGatewayConnection](../schemas/Virtual/VirtualPrivateCloudEdgeGatewayConnection.md)

## Security

- **Authorization**
