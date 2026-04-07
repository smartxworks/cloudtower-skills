# POST /delete-log-collection

**Resource:** [LogCollection](../resources/LogCollection.md)
**Operation ID:** `DeleteLogCollection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [LogCollectionDeletionParams](../schemas/Log/LogCollectionDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteLogCollection_](../schemas/With/WithTask-DeleteLogCollection.md)

## Security

- **Authorization**
