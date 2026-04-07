# POST /get-replication-services-connection

**Resource:** [ReplicationService](../resources/ReplicationService.md)
**Operation ID:** `GetReplicationServicesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetReplicationServicesConnectionRequestBody](../schemas/Get/GetReplicationServicesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ReplicationServiceConnection](../schemas/Replication/ReplicationServiceConnection.md)

## Security

- **Authorization**
