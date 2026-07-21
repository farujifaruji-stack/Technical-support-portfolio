# Create User — 429 Too Many Requests

## Scenario

A `POST /api/users` request returns `429 Too Many Requests` because the API rate limit has been exceeded.

**Method:** `POST`  
**Endpoint:** `{{baseUrl}}/api/users`  
**Expected status:** `201 Created`  
**Actual status:** `429 Too Many Requests`

## Purpose

Demonstrates investigation and resolution of an API rate-limiting error.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Request body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "id": "123456789",
  "phoneNumber": "0501234567",
  "emailAddress": "walaa@test.com",
  "dateOfBirth": "14/01/2000"
}
```

## Reproduction steps

1. Send the Create User request repeatedly within a short period.
2. Exceed the API request limit.
3. Observe the `429 Too Many Requests` response.

## Expected result

The API creates the user and returns `201 Created`.

```json
{
  "success": true,
  "message": "User created successfully"
}
```

## Actual result

The API returns `429 Too Many Requests`.

```json
{
  "success": false,
  "message": "Rate limit exceeded"
}
```

## Root cause

Too many requests were sent within the API rate-limit window.

## Resolution

1. Stop sending repeated requests.
2. Wait for the time specified in the `Retry-After` header, if provided.
3. Retry using exponential backoff, for example: wait 1 second, then 2 seconds, then 4 seconds.
4. Add client-side throttling or a request queue to prevent repeated `429` responses.

## Verification

After waiting for the rate-limit window to reset and sending requests at a controlled rate, the API returns `201 Created`.

## Postman location

`Create User → 4xx - Client Errors → 429 - Too Many Requests - Create User`

## Jira case study

A Jira bug was created to document the rate-limit issue, the investigation, and the recommended prevention steps.

![Jira ticket — Create User 429 Too Many Requests](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/create-user/429%20-%20Too%20Many%20Requests/Jira%20API%20Project%20Create%20User%20429%20Too%20Many%20Requests.png)
