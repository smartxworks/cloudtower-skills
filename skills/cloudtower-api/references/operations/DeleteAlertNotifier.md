# POST /delete-alert-notifier

**Resource:** [AlertNotifier](../resources/AlertNotifier.md)
**Operation ID:** `DeleteAlertNotifier`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [DeleteAlertNotifierParams](../schemas/Delete/DeleteAlertNotifierParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteAlertNotifier_](../schemas/With/WithTask-DeleteAlertNotifier.md)

## Security

- **Authorization**
