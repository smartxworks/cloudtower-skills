# POST /get-alerts-connection

**Resource:** [Alert](../resources/Alert.md)
**Operation ID:** `GetAlertsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetAlertsConnectionRequestBody](../schemas/Get/GetAlertsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[AlertConnection](../schemas/Alert/AlertConnection.md)

## Security

- **Authorization**
