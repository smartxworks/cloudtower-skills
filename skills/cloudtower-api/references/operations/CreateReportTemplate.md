# POST /create-report-template

**Resource:** [ReportTemplate](../resources/ReportTemplate.md)
**Operation ID:** `CreateReportTemplate`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [ReportTemplateCreationParams](../schemas/Report/ReportTemplateCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_ReportTemplate_](../schemas/With/WithTask-ReportTemplate.md)

## Security

- **Authorization**
