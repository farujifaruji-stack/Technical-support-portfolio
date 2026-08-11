# Get User by ID API

Retrieves a single user record using the user ID.

## Endpoint

```http
GET {{baseUrl}}/api/users/{{userId}}
```

## Purpose

This endpoint is used to retrieve the details of a specific user record.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to retrieve | `200` |

## Successful response

### `200 OK`

```json
{
  "success": true,
  "data": {
    "id": 200,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

## Error responses

| Status | Description |
|---|---|
| `401 Unauthorized` | Authentication credentials are missing, invalid, or expired. |
| `404 Not Found` | The specified user ID does not exist. |

## Test scenarios

| Scenario | Expected status |
|---|---|
| Retrieve an existing user | `200 OK` |
| Request without valid authentication | `401 Unauthorized` |
| Request a non-existent user ID | `404 Not Found` |

## Postman location

`Get User by ID`
