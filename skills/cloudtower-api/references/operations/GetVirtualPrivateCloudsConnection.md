# POST /get-virtual-private-clouds-connection

**Resource:** [VirtualPrivateCloud](../resources/VirtualPrivateCloud.md)
**Operation ID:** `GetVirtualPrivateCloudsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudsConnectionRequestBody](../schemas/Get/GetVirtualPrivateCloudsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VirtualPrivateCloudConnection](../schemas/Virtual/VirtualPrivateCloudConnection.md)

## Security

- **Authorization**
