# POST /get-replication-plans-connection

**Resource:** [ReplicationPlan](../resources/ReplicationPlan.md)
**Operation ID:** `GetReplicationPlansConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetReplicationPlansConnectionRequestBody](../schemas/Get/GetReplicationPlansConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ReplicationPlanConnection](../schemas/Replication/ReplicationPlanConnection.md)

## Security

- **Authorization**
