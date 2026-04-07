# POST /get-snapshot-plan-tasks-connection

**Resource:** [SnapshotPlanTask](../resources/SnapshotPlanTask.md)
**Operation ID:** `GetSnapshotPlanTasksConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSnapshotPlanTasksConnectionRequestBody](../schemas/Get/GetSnapshotPlanTasksConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[SnapshotPlanTaskConnection](../schemas/Snapshot/SnapshotPlanTaskConnection.md)

## Security

- **Authorization**
