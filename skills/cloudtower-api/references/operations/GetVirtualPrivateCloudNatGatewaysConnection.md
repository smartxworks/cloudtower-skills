# POST /get-virtual-private-cloud-nat-gateways-connection

**Resource:** [VirtualPrivateCloudNatGateway](../resources/VirtualPrivateCloudNatGateway.md)
**Operation ID:** `GetVirtualPrivateCloudNatGatewaysConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudNatGatewaysConnectionRequestBody](../schemas/Get/GetVirtualPrivateCloudNatGatewaysConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VirtualPrivateCloudNatGatewayConnection](../schemas/Virtual/VirtualPrivateCloudNatGatewayConnection.md)

## Security

- **Authorization**
