# POST /get-replica-vms-connection

**Resource:** [ReplicaVm](../resources/ReplicaVm.md)
**Operation ID:** `GetReplicaVmsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetReplicaVmsConnectionRequestBody](../schemas/Get/GetReplicaVmsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ReplicaVmConnection](../schemas/Replica/ReplicaVmConnection.md)

## Security

- **Authorization**
