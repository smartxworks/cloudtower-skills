# POST /get-host-metrics

**Resource:** [Metrics](../resources/Metrics.md)
**Operation ID:** `GetHostMetrics`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetHostMetricInput](../schemas/Get/GetHostMetricInput.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_Metric_](../schemas/With/WithTask-Metric.md)

## Security

- **Authorization**
