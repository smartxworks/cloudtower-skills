# POST /get-system-audit-logs

**Resource:** [SystemAuditLog](../resources/SystemAuditLog.md)
**Operation ID:** `GetSystemAuditLogs`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSystemAuditLogsRequestBody](../schemas/Get/GetSystemAuditLogsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [SystemAuditLog](../schemas/System/SystemAuditLog.md)

## Security

- **Authorization**
