# POST /create-snapshot-plan

**Resource:** [SnapshotPlan](../resources/SnapshotPlan.md)
**Operation ID:** `CreateSnapshotPlan`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [SnapshotPlanCreationParams](../schemas/Snapshot/SnapshotPlanCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_SnapshotPlan_](../schemas/With/WithTask-SnapshotPlan.md)

## Security

- **Authorization**
