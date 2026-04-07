# POST /get-smtp-servers

**Resource:** [SmtpServer](../resources/SmtpServer.md)
**Operation ID:** `GetSmtpServers`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSmtpServersRequestBody](../schemas/Get/GetSmtpServersRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [SmtpServer](../schemas/Smtp/SmtpServer.md)

## Security

- **Authorization**
