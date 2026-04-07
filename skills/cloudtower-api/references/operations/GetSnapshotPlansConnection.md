# POST /get-snapshot-plans-connection

**Resource:** [SnapshotPlan](../resources/SnapshotPlan.md)
**Operation ID:** `GetSnapshotPlansConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSnapshotPlansConnectionRequestBody](../schemas/Get/GetSnapshotPlansConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[SnapshotPlanConnection](../schemas/Snapshot/SnapshotPlanConnection.md)

## Security

- **Authorization**
