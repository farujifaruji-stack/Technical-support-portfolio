# Update User — 400 Bad Request

## Scenario

A `PUT /api/users/{{userId}}` request returns `400 Bad Request` because the request body contains invalid or missing user data.

**Method:** `PUT`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`  
**Expected status:** `200 OK`  
**Actual status:** `400 Bad Request`

## Purpose

Demonstrates investigation and resolution of an Update User request with invalid request data.

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

## Invalid request body

```json
{
  "name": "",
  "email": "invalid-email"
}
```

## Expected result

The API updates the user record and returns `200 OK`.

## Actual result

The API returns `400 Bad Request`.

```json
{
  "success": false,
  "message": "Invalid request data"
}
```

## Root cause

The request body contained invalid, missing, or incorrectly formatted user data.

## Resolution

Provide valid user fields and values in the request body.

## Verification

After correcting the request body, resend the request and verify that the API returns `200 OK`.


![Update User — 400 Bad Request](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/update-user/400%20Bad%20Request/API%20Project%20-%20Update%20Users%20-%20400%20Bad%20Request.png)

## Postman location

`Update User → 4xx - Client Errors → 400 - Bad Request - Update User`
