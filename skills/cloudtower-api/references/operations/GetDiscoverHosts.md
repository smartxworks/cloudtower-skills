# POST /get-discover-hosts

**Resource:** [DiscoveredHost](../resources/DiscoveredHost.md)
**Operation ID:** `GetDiscoverHosts`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetDiscoverHostsRequestBody](../schemas/Get/GetDiscoverHostsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [DiscoveredHost](../schemas/Discovered/DiscoveredHost.md)

## Security

- **Authorization**
