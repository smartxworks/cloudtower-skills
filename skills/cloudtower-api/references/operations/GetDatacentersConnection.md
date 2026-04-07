# POST /get-datacenters-connection

**Resource:** [Datacenter](../resources/Datacenter.md)
**Operation ID:** `GetDatacentersConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetDatacentersConnectionRequestBody](../schemas/Get/GetDatacentersConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[DatacenterConnection](../schemas/Datacenter/DatacenterConnection.md)

## Security

- **Authorization**
