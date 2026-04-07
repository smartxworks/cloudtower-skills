# POST /get-my-info

**Resource:** [User](../resources/User.md)
**Operation ID:** `GetMyInfo`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `external-cloudtower-id` | header | string | No |  |

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[User](../schemas/User/User.md)

## Security

- **Authorization**
