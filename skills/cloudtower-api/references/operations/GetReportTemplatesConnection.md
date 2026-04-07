# POST /get-report-templates-connection

**Resource:** [ReportTemplate](../resources/ReportTemplate.md)
**Operation ID:** `GetReportTemplatesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetReportTemplatesConnectionRequestBody](../schemas/Get/GetReportTemplatesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ReportTemplateConnection](../schemas/Report/ReportTemplateConnection.md)

## Security

- **Authorization**
