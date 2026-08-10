````
# Delete User — 204 No Content

## Scenario

A `DELETE /api/users/{{userId}}` request successfully deletes an existing user record.

**Method:** `DELETE`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`  
**Expected status:** `204 No Content`  
**Actual status:** `204 No Content`

## Purpose

Demonstrates successful deletion of a user record through the API.

## Required headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to delete | `123456789` |

## Expected result

The API deletes the user record and returns `204 No Content`.

A `204` response does not include a response body.

## Verification

After receiving `204 No Content`, send a `GET` request for the same user ID.

```text
GET {{baseUrl}}/api/users/123456789
```

The API should return `404 Not Found`, confirming that the user record was deleted.

## Postman location

`Delete User → 2xx - Success → 204 - No Content - Delete User`
````
