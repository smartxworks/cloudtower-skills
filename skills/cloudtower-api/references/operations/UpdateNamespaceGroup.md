# POST /update-namespace-group

**Resource:** [NamespaceGroup](../resources/NamespaceGroup.md)
**Operation ID:** `UpdateNamespaceGroup`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [NamespaceGroupUpdationParams](../schemas/Namespace/NamespaceGroupUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_NamespaceGroup_](../schemas/With/WithTask-NamespaceGroup.md)

## Security

- **Authorization**
