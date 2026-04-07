# POST /get-users-connection

**Resource:** [User](../resources/User.md)
**Operation ID:** `GetUsersConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetUsersConnectionRequestBody](../schemas/Get/GetUsersConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[UserConnection](../schemas/User/UserConnection.md)

## Security

- **Authorization**
