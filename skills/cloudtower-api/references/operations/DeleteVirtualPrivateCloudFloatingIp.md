# POST /delete-virtual-private-cloud-floating-ip

**Resource:** [VirtualPrivateCloudFloatingIp](../resources/VirtualPrivateCloudFloatingIp.md)
**Operation ID:** `DeleteVirtualPrivateCloudFloatingIp`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VirtualPrivateCloudFloatingIpDeletionParams](../schemas/Virtual/VirtualPrivateCloudFloatingIpDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteVirtualPrivateCloudFloatingIp_](../schemas/With/WithTask-DeleteVirtualPrivateCloudFloatingIp.md)

## Security

- **Authorization**
