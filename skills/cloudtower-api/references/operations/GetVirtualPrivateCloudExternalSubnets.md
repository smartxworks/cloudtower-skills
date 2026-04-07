# POST /get-virtual-private-cloud-external-subnets

**Resource:** [VirtualPrivateCloudExternalSubnet](../resources/VirtualPrivateCloudExternalSubnet.md)
**Operation ID:** `GetVirtualPrivateCloudExternalSubnets`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudExternalSubnetsRequestBody](../schemas/Get/GetVirtualPrivateCloudExternalSubnetsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VirtualPrivateCloudExternalSubnet](../schemas/Virtual/VirtualPrivateCloudExternalSubnet.md)

## Security

- **Authorization**
