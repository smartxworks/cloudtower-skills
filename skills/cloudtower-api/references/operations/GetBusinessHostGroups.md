# POST /get-business-host-groups

**Resource:** [BusinessHostGroup](../resources/BusinessHostGroup.md)
**Operation ID:** `GetBusinessHostGroups`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBusinessHostGroupsRequestBody](../schemas/Get/GetBusinessHostGroupsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [BusinessHostGroup](../schemas/Business/BusinessHostGroup.md)

## Security

- **Authorization**
