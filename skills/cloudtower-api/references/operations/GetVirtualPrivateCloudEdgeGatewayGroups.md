# POST /get-virtual-private-cloud-edge-gateway-groups

**Resource:** [VirtualPrivateCloudEdgeGatewayGroup](../resources/VirtualPrivateCloudEdgeGatewayGroup.md)
**Operation ID:** `GetVirtualPrivateCloudEdgeGatewayGroups`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudEdgeGatewayGroupsRequestBody](../schemas/Get/GetVirtualPrivateCloudEdgeGatewayGroupsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VirtualPrivateCloudEdgeGatewayGroup](../schemas/Virtual/VirtualPrivateCloudEdgeGatewayGroup.md)

## Security

- **Authorization**
