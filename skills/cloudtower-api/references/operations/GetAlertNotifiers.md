# POST /get-alert-notifiers

**Resource:** [AlertNotifier](../resources/AlertNotifier.md)
**Operation ID:** `GetAlertNotifiers`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetAlertNotifiersRequestBody](../schemas/Get/GetAlertNotifiersRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [AlertNotifier](../schemas/Alert/AlertNotifier.md)

## Security

- **Authorization**
