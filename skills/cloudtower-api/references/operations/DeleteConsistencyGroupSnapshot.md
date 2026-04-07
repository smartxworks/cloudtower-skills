# POST /delete-consistency-snapshot-group

**Resource:** [ConsistencyGroupSnapshot](../resources/ConsistencyGroupSnapshot.md)
**Operation ID:** `DeleteConsistencyGroupSnapshot`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ConsistencyGroupSnapshotDeletionParams](../schemas/Consistency/ConsistencyGroupSnapshotDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteConsistencyGroupSnapshot_](../schemas/With/WithTask-DeleteConsistencyGroupSnapshot.md)

## Security

- **Authorization**
