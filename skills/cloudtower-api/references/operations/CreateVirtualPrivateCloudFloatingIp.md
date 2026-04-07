# POST /create-virtual-private-cloud-floating-ip

**Resource:** [VirtualPrivateCloudFloatingIp](../resources/VirtualPrivateCloudFloatingIp.md)
**Operation ID:** `CreateVirtualPrivateCloudFloatingIp`
⚠️ **Deprecated**

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [VirtualPrivateCloudFloatingIpCreationParams](../schemas/Virtual/VirtualPrivateCloudFloatingIpCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VirtualPrivateCloudFloatingIp_](../schemas/With/WithTask-VirtualPrivateCloudFloatingIp.md)

## Security

- **Authorization**
