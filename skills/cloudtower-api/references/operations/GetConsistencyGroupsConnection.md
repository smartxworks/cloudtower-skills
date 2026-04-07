# POST /get-consistency-groups-connection

**Resource:** [ConsistencyGroup](../resources/ConsistencyGroup.md)
**Operation ID:** `GetConsistencyGroupsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetConsistencyGroupsConnectionRequestBody](../schemas/Get/GetConsistencyGroupsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ConsistencyGroupConnection](../schemas/Consistency/ConsistencyGroupConnection.md)

## Security

- **Authorization**
