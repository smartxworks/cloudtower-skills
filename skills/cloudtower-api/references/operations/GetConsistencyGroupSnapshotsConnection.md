# POST /get-consistency-group-snapshots-connection

**Resource:** [ConsistencyGroupSnapshot](../resources/ConsistencyGroupSnapshot.md)
**Operation ID:** `GetConsistencyGroupSnapshotsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetConsistencyGroupSnapshotsConnectionRequestBody](../schemas/Get/GetConsistencyGroupSnapshotsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ConsistencyGroupSnapshotConnection](../schemas/Consistency/ConsistencyGroupSnapshotConnection.md)

## Security

- **Authorization**
