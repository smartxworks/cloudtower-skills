# POST /get-virtual-private-cloud-nat-gateways

**Resource:** [VirtualPrivateCloudNatGateway](../resources/VirtualPrivateCloudNatGateway.md)
**Operation ID:** `GetVirtualPrivateCloudNatGateways`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudNatGatewaysRequestBody](../schemas/Get/GetVirtualPrivateCloudNatGatewaysRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VirtualPrivateCloudNatGateway](../schemas/Virtual/VirtualPrivateCloudNatGateway.md)

## Security

- **Authorization**
