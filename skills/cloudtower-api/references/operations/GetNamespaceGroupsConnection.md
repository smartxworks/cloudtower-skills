# POST /get-namespace-groups-connection

**Resource:** [NamespaceGroup](../resources/NamespaceGroup.md)
**Operation ID:** `GetNamespaceGroupsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNamespaceGroupsConnectionRequestBody](../schemas/Get/GetNamespaceGroupsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[NamespaceGroupConnection](../schemas/Namespace/NamespaceGroupConnection.md)

## Security

- **Authorization**
