# Update User API

Updates an existing user record using the user ID.

## Endpoint

```http
PUT {{baseUrl}}/api/users/{{userId}}
```

## Purpose

This endpoint is used to update the details of an existing user record.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to update | `200` |

## Request body

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

## Successful response

### `200 OK`

```json
{
  "success": true,
  "message": "User updated successfully",
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
| `400 Bad Request` | The request body is missing required fields or contains invalid data. |
| `404 Not Found` | The specified user ID does not exist. |
| `409 Conflict` | The submitted email address already belongs to another user. |
| `422 Unprocessable Entity` | The request body fails validation requirements. |

## Test scenarios

| Scenario | Expected status |
|---|---|
| Update an existing user with valid data | `200 OK` |
| Send missing or invalid request data | `400 Bad Request` |
| Update a non-existent user | `404 Not Found` |
| Update with an email already in use | `409 Conflict` |
| Update with a validation error | `422 Unprocessable Entity` |

## Postman location

`Update User`
