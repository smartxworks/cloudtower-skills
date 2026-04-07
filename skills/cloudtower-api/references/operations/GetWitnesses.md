# POST /get-witnesses

**Resource:** [Witness](../resources/Witness.md)
**Operation ID:** `GetWitnesses`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetWitnessesRequestBody](../schemas/Get/GetWitnessesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [Witness](../schemas/Witness/Witness.md)

## Security

- **Authorization**
