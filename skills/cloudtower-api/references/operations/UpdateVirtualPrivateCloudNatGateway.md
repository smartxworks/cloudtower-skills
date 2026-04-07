# POST /update-virtual-private-cloud-nat-gateway

**Resource:** [VirtualPrivateCloudNatGateway](../resources/VirtualPrivateCloudNatGateway.md)
**Operation ID:** `UpdateVirtualPrivateCloudNatGateway`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VirtualPrivateCloudNatGatewayUpdationParams](../schemas/Virtual/VirtualPrivateCloudNatGatewayUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VirtualPrivateCloudNatGateway_](../schemas/With/WithTask-VirtualPrivateCloudNatGateway.md)

## Security

- **Authorization**
