# POST /get-vm-entity-filter-results

**Resource:** [VmEntityFilterResult](../resources/VmEntityFilterResult.md)
**Operation ID:** `GetVmEntityFilterResults`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmEntityFilterResultsRequestBody](../schemas/Get/GetVmEntityFilterResultsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VmEntityFilterResult](../schemas/Vm/VmEntityFilterResult.md)

## Security

- **Authorization**
