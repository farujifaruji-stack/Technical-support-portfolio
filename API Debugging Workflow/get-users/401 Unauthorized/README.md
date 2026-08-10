# Get Users — 401 Unauthorized

## Scenario

A `GET /api/users` request returns `401 Unauthorized` because the request is missing valid authentication credentials.

**Method:** `GET`  
**Endpoint:** `{{baseUrl}}/api/users`  
**Expected status:** `200 OK`  
**Actual status:** `401 Unauthorized`

## Purpose

Demonstrates investigation and resolution of a Get Users request with invalid or missing authentication.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Expected result

The API returns a list of user records with `200 OK`.

## Actual result

The API returns `401 Unauthorized`.

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

## Root cause

The authorization token or API key was missing, invalid, or expired.

## Resolution

Provide a valid `Authorization` bearer token and `x-api-key`, then resend the request.

## Verification

After updating the authentication credentials, resend the request and verify that the API returns `200 OK` with the list of users.

## Postman location

`Get Users → 4xx - Client Errors → 401 - Unauthorized - Get Users`

![Get Users — 401 Unauthorized](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/get-users/401%20Unauthorized/API%20Project%20-%20Get%20Users%20-%20401%20Unauthorized.png)
