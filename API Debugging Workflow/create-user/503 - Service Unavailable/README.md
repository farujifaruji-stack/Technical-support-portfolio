````
# Create User — 503 Service Unavailable

## Scenario

A valid `POST /api/users` request returns `503 Service Unavailable` because the User service is temporarily unavailable.

**Method:** `POST`  
**Endpoint:** `{{baseUrl}}/api/users`  
**Expected status:** `201 Created`  
**Actual status:** `503 Service Unavailable`

## Purpose

Demonstrates investigation, impact assessment, and escalation of a temporary service-availability issue.

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

## Expected result

The API creates the user and returns `201 Created`.

```json
{
  "success": true,
  "message": "User created successfully"
}
```

## Actual result

The API returns `503 Service Unavailable`.

```json
{
  "success": false,
  "message": "Service unavailable"
}
```

## Impact

- **Impacted end customers:** 32
- **Business impact:** 70% of user-creation attempts failed while the User service was unavailable, delaying new-user onboarding and increasing customer-support requests.

## Postman location

`Create User → 5xx - Server Errors → 503 - Service Unavailable - Create User`

## Jira case study

> **Note:** This Jira ticket is a simulated portfolio artifact demonstrating incident documentation, impact assessment, investigation, and escalation.

<!-- Add the 503 Jira screenshot here after uploading it to GitHub. -->
````
