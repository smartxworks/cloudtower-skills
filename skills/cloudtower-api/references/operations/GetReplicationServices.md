# POST /get-replication-services

**Resource:** [ReplicationService](../resources/ReplicationService.md)
**Operation ID:** `GetReplicationServices`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetReplicationServicesRequestBody](../schemas/Get/GetReplicationServicesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ReplicationService](../schemas/Replication/ReplicationService.md)

## Security

- **Authorization**
