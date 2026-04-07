# POST /update-brick-topo

**Resource:** [BrickTopo](../resources/BrickTopo.md)
**Operation ID:** `UpdateBrickTopo`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [BrickTopoUpdationParams](../schemas/Brick/BrickTopoUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_BrickTopo_](../schemas/With/WithTask-BrickTopo.md)

## Security

- **Authorization**
