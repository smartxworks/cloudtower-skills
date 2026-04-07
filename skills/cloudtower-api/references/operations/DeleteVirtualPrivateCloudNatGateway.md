# POST /delete-virtual-private-cloud-nat-gateway

**Resource:** [VirtualPrivateCloudNatGateway](../resources/VirtualPrivateCloudNatGateway.md)
**Operation ID:** `DeleteVirtualPrivateCloudNatGateway`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VirtualPrivateCloudNatGatewayDeletionParams](../schemas/Virtual/VirtualPrivateCloudNatGatewayDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteVirtualPrivateCloudNatGateway_](../schemas/With/WithTask-DeleteVirtualPrivateCloudNatGateway.md)

## Security

- **Authorization**
