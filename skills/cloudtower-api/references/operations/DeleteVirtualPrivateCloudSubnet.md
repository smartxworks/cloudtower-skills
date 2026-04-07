# POST /delete-virtual-private-cloud-subnet

**Resource:** [VirtualPrivateCloudSubnet](../resources/VirtualPrivateCloudSubnet.md)
**Operation ID:** `DeleteVirtualPrivateCloudSubnet`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VirtualPrivateCloudSubnetDeletionParams](../schemas/Virtual/VirtualPrivateCloudSubnetDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteVirtualPrivateCloudSubnet_](../schemas/With/WithTask-DeleteVirtualPrivateCloudSubnet.md)

## Security

- **Authorization**
