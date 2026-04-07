# POST /remove-clusters-from-datacenter

**Resource:** [Datacenter](../resources/Datacenter.md)
**Operation ID:** `RemoveClustersFromDatacenter`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [RemoveClustersFromDatacenterParams](../schemas/Remove/RemoveClustersFromDatacenterParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_Datacenter_](../schemas/With/WithTask-Datacenter.md)

## Security

- **Authorization**
