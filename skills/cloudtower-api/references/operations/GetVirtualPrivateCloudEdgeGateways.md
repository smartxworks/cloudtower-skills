# POST /get-virtual-private-cloud-edge-gateways

**Resource:** [VirtualPrivateCloudEdgeGateway](../resources/VirtualPrivateCloudEdgeGateway.md)
**Operation ID:** `GetVirtualPrivateCloudEdgeGateways`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudEdgeGatewaysRequestBody](../schemas/Get/GetVirtualPrivateCloudEdgeGatewaysRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VirtualPrivateCloudEdgeGateway](../schemas/Virtual/VirtualPrivateCloudEdgeGateway.md)

## Security

- **Authorization**
