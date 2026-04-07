# POST /get-user-role-nexts-connection

**Resource:** [UserRoleNext](../resources/UserRoleNext.md)
**Operation ID:** `GetUserRoleNextsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetUserRoleNextsConnectionRequestBody](../schemas/Get/GetUserRoleNextsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[UserRoleNextConnection](../schemas/User/UserRoleNextConnection.md)

## Security

- **Authorization**
