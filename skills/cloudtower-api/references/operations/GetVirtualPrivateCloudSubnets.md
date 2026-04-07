# POST /get-virtual-private-cloud-subnets

**Resource:** [VirtualPrivateCloudSubnet](../resources/VirtualPrivateCloudSubnet.md)
**Operation ID:** `GetVirtualPrivateCloudSubnets`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudSubnetsRequestBody](../schemas/Get/GetVirtualPrivateCloudSubnetsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VirtualPrivateCloudSubnet](../schemas/Virtual/VirtualPrivateCloudSubnet.md)

## Security

- **Authorization**
