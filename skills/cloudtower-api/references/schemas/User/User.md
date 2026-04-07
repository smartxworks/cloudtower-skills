# User

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `auth_config_id` | string | No |  |
| `display_username` | string | Yes |  |
| `email_address` | string | No |  |
| `id` | string | Yes |  |
| `internal` | boolean | Yes |  |
| `ldap_dn` | string | No |  |
| `mobile_phone` | string | No |  |
| `name` | string | Yes |  |
| `password_expired` | boolean | No |  |
| `password_recover_qa` | any | No |  |
| `password_updated_at` | string | No |  |
| `role` | any | No |  |
| `roles` | NestedUserRoleNext[] | No |  |
| `source` | [UserSource](UserSource.md) | Yes |  |
| `username` | string | Yes |  |

