# POST /update-alert-notifier

**Resource:** [AlertNotifier](../resources/AlertNotifier.md)
**Operation ID:** `UpdateAlertNotifier`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [AlertNotifierUpdationParams](../schemas/Alert/AlertNotifierUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[WithTask_AlertNotifier_](../schemas/With/WithTask-AlertNotifier.md)

## Security

- **Authorization**
