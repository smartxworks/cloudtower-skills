# POST /update-many-alert-notifiers

**Resource:** [AlertNotifier](../resources/AlertNotifier.md)
**Operation ID:** `UpdateManyAlertNotifiers`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [AlertNotifierManyUpdationParams](../schemas/Alert/AlertNotifierManyUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_AlertNotifier_](../schemas/With/WithTask-AlertNotifier.md)

## Security

- **Authorization**
