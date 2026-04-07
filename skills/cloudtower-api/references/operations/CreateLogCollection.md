# POST /create-log-collection

**Resource:** [LogCollection](../resources/LogCollection.md)
**Operation ID:** `CreateLogCollection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [LogCollectionCreationParams](../schemas/Log/LogCollectionCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_LogCollection_](../schemas/With/WithTask-LogCollection.md)

## Security

- **Authorization**
