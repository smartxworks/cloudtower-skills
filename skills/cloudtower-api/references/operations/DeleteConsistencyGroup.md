# POST /delete-consistency-group

**Resource:** [ConsistencyGroup](../resources/ConsistencyGroup.md)
**Operation ID:** `DeleteConsistencyGroup`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ConsistencyGroupDeletionParams](../schemas/Consistency/ConsistencyGroupDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteConsistencyGroup_](../schemas/With/WithTask-DeleteConsistencyGroup.md)

## Security

- **Authorization**
