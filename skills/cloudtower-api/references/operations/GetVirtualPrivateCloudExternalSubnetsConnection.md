# POST /get-virtual-private-cloud-external-subnets-connection

**Resource:** [VirtualPrivateCloudExternalSubnet](../resources/VirtualPrivateCloudExternalSubnet.md)
**Operation ID:** `GetVirtualPrivateCloudExternalSubnetsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudExternalSubnetsConnectionRequestBody](../schemas/Get/GetVirtualPrivateCloudExternalSubnetsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VirtualPrivateCloudExternalSubnetConnection](../schemas/Virtual/VirtualPrivateCloudExternalSubnetConnection.md)

## Security

- **Authorization**
