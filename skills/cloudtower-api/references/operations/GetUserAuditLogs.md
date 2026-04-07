# POST /get-user-audit-logs

**Resource:** [UserAuditLog](../resources/UserAuditLog.md)
**Operation ID:** `GetUserAuditLogs`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetUserAuditLogsRequestBody](../schemas/Get/GetUserAuditLogsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [UserAuditLog](../schemas/User/UserAuditLog.md)

## Security

- **Authorization**
