# POST /delete-user

**Resource:** [User](../resources/User.md)
**Operation ID:** `DeleteUser`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [UserDeletionParams](../schemas/User/UserDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 | Ok |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteUser_](../schemas/With/WithTask-DeleteUser.md)

## Security

- **Authorization**
