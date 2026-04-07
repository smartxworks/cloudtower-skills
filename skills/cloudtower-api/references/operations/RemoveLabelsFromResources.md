# POST /remove-labels-from-resources

**Resource:** [Label](../resources/Label.md)
**Operation ID:** `RemoveLabelsFromResources`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [RemoveLabelsFromResourcesParams](../schemas/Remove/RemoveLabelsFromResourcesParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 304 | Not modified |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_Label_](../schemas/With/WithTask-Label.md)

## Security

- **Authorization**
