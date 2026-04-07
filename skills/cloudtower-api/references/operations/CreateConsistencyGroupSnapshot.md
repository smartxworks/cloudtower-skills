# POST /create-consistency-snapshot-group

**Resource:** [ConsistencyGroupSnapshot](../resources/ConsistencyGroupSnapshot.md)
**Operation ID:** `CreateConsistencyGroupSnapshot`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [ConsistencyGroupSnapshotCreationParams](../schemas/Consistency/ConsistencyGroupSnapshotCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_ConsistencyGroupSnapshot_](../schemas/With/WithTask-ConsistencyGroupSnapshot.md)

## Security

- **Authorization**
