# POST /get-smtp-servers-connection

**Resource:** [SmtpServer](../resources/SmtpServer.md)
**Operation ID:** `GetSmtpServersConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSmtpServersConnectionRequestBody](../schemas/Get/GetSmtpServersConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[SmtpServerConnection](../schemas/Smtp/SmtpServerConnection.md)

## Security

- **Authorization**
