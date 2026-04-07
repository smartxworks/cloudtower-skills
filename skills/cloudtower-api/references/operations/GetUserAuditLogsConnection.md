# POST /get-user-audit-logs-connection

**Resource:** [UserAuditLog](../resources/UserAuditLog.md)
**Operation ID:** `GetUserAuditLogsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetUserAuditLogsConnectionRequestBody](../schemas/Get/GetUserAuditLogsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[UserAuditLogConnection](../schemas/User/UserAuditLogConnection.md)

## Security

- **Authorization**
