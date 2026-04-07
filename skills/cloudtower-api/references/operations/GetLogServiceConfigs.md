# POST /get-log-service-configs

**Resource:** [LogServiceConfig](../resources/LogServiceConfig.md)
**Operation ID:** `GetLogServiceConfigs`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetLogServiceConfigsRequestBody](../schemas/Get/GetLogServiceConfigsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [LogServiceConfig](../schemas/Log/LogServiceConfig.md)

## Security

- **Authorization**
