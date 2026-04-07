# POST /get-report-tasks

**Resource:** [ReportTask](../resources/ReportTask.md)
**Operation ID:** `GetReportTasks`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetReportTasksRequestBody](../schemas/Get/GetReportTasksRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ReportTask](../schemas/Report/ReportTask.md)

## Security

- **Authorization**
