# POST /get-replica-vms

**Resource:** [ReplicaVm](../resources/ReplicaVm.md)
**Operation ID:** `GetReplicaVms`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetReplicaVmsRequestBody](../schemas/Get/GetReplicaVmsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ReplicaVm](../schemas/Replica/ReplicaVm.md)

## Security

- **Authorization**
