# POST /get-consistency-group-snapshots

**Resource:** [ConsistencyGroupSnapshot](../resources/ConsistencyGroupSnapshot.md)
**Operation ID:** `GetConsistencyGroupSnapshots`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetConsistencyGroupSnapshotsRequestBody](../schemas/Get/GetConsistencyGroupSnapshotsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ConsistencyGroupSnapshot](../schemas/Consistency/ConsistencyGroupSnapshot.md)

## Security

- **Authorization**
