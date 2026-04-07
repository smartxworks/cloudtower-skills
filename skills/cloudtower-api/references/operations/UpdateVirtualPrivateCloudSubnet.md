# POST /update-virtual-private-cloud-subnet

**Resource:** [VirtualPrivateCloudSubnet](../resources/VirtualPrivateCloudSubnet.md)
**Operation ID:** `UpdateVirtualPrivateCloudSubnet`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VirtualPrivateCloudSubnetUpdationParams](../schemas/Virtual/VirtualPrivateCloudSubnetUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VirtualPrivateCloudSubnet_](../schemas/With/WithTask-VirtualPrivateCloudSubnet.md)

## Security

- **Authorization**
