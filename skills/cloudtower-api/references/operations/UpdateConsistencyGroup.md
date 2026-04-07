# POST /update-consistency-group

**Resource:** [ConsistencyGroup](../resources/ConsistencyGroup.md)
**Operation ID:** `UpdateConsistencyGroup`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ConsistencyGroupUpdationParams](../schemas/Consistency/ConsistencyGroupUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_ConsistencyGroup_](../schemas/With/WithTask-ConsistencyGroup.md)

## Security

- **Authorization**
