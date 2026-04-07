# POST /delete-namespace-group

**Resource:** [NamespaceGroup](../resources/NamespaceGroup.md)
**Operation ID:** `DeleteNamespaceGroup`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [NamespaceGroupDeletionParams](../schemas/Namespace/NamespaceGroupDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteNamespaceGroup_](../schemas/With/WithTask-DeleteNamespaceGroup.md)

## Security

- **Authorization**
