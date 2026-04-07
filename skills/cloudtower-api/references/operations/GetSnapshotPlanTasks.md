# POST /get-snapshot-plan-tasks

**Resource:** [SnapshotPlanTask](../resources/SnapshotPlanTask.md)
**Operation ID:** `GetSnapshotPlanTasks`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSnapshotPlanTasksRequestBody](../schemas/Get/GetSnapshotPlanTasksRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [SnapshotPlanTask](../schemas/Snapshot/SnapshotPlanTask.md)

## Security

- **Authorization**
