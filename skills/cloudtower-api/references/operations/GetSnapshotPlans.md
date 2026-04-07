# POST /get-snapshot-plans

**Resource:** [SnapshotPlan](../resources/SnapshotPlan.md)
**Operation ID:** `GetSnapshotPlans`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSnapshotPlansRequestBody](../schemas/Get/GetSnapshotPlansRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [SnapshotPlan](../schemas/Snapshot/SnapshotPlan.md)

## Security

- **Authorization**
