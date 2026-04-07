# POST /get-log-collections-connection

**Resource:** [LogCollection](../resources/LogCollection.md)
**Operation ID:** `GetLogCollectionsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetLogCollectionsConnectionRequestBody](../schemas/Get/GetLogCollectionsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[LogCollectionConnection](../schemas/Log/LogCollectionConnection.md)

## Security

- **Authorization**
