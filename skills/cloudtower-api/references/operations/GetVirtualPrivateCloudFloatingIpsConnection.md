# POST /get-virtual-private-cloud-floating-ips-connection

**Resource:** [VirtualPrivateCloudFloatingIp](../resources/VirtualPrivateCloudFloatingIp.md)
**Operation ID:** `GetVirtualPrivateCloudFloatingIpsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudFloatingIpsConnectionRequestBody](../schemas/Get/GetVirtualPrivateCloudFloatingIpsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VirtualPrivateCloudFloatingIpConnection](../schemas/Virtual/VirtualPrivateCloudFloatingIpConnection.md)

## Security

- **Authorization**
