# POST /add-clusters-to-datacenter

**Resource:** [Datacenter](../resources/Datacenter.md)
**Operation ID:** `AddClustersToDatacenter`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [AddClustersToDatacenterParams](../schemas/Add/AddClustersToDatacenterParams.md)

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
