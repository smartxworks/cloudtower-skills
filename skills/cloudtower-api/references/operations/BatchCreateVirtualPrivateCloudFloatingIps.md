# POST /batch-create-virtual-private-cloud-floating-ips

**Resource:** [VirtualPrivateCloudFloatingIp](../resources/VirtualPrivateCloudFloatingIp.md)
**Operation ID:** `BatchCreateVirtualPrivateCloudFloatingIps`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [BatchCreateVirtualPrivateCloudFloatingIpsParams](../schemas/Batch/BatchCreateVirtualPrivateCloudFloatingIpsParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_BatchCreateVirtualPrivateCloudFloatingIp_](../schemas/With/WithTask-BatchCreateVirtualPrivateCloudFloatingIp.md)

## Security

- **Authorization**
