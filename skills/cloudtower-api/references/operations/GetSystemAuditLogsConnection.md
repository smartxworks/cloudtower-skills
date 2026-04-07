# POST /get-system-audit-logs-connection

**Resource:** [SystemAuditLog](../resources/SystemAuditLog.md)
**Operation ID:** `GetSystemAuditLogsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSystemAuditLogsConnectionRequestBody](../schemas/Get/GetSystemAuditLogsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[SystemAuditLogConnection](../schemas/System/SystemAuditLogConnection.md)

## Security

- **Authorization**
