# POST /get-alert-notifiers-connection

**Resource:** [AlertNotifier](../resources/AlertNotifier.md)
**Operation ID:** `GetAlertNotifiersConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetAlertNotifiersConnectionRequestBody](../schemas/Get/GetAlertNotifiersConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[AlertNotifierConnection](../schemas/Alert/AlertNotifierConnection.md)

## Security

- **Authorization**
