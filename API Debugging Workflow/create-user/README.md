````
# Create User API Debugging

This folder documents successful and failed `Create User` API requests for a mock User Management API.

> **Note:** This is a simulated portfolio project. All API requests, Jira tickets, logs, credentials, and customer data are sanitized or created for demonstration purposes.

## Endpoint

**Method:** `POST`  
**Endpoint:** `{{baseUrl}}/api/users`

## Purpose

Demonstrates how Create User API requests are tested, documented, and troubleshot through request payloads, response status codes, Jira tickets, simulated logs, and verification steps.

## Required headers

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

## Status-code coverage

| Status code | Scenario |
|---|---|
| **200 OK** | Request completed successfully. |
| **201 Created** | A new user record was created successfully. |
| **400 Bad Request** | A required field is missing from the request body. |
| **401 Unauthorized** | The Authorization header is missing or invalid. |
| **403 Forbidden** | The request is authenticated but does not have the required API-key permission. |
| **404 Not Found** | The requested API endpoint does not exist. |
| **409 Conflict** | A user with the submitted email address already exists. |
| **422 Unprocessable Entity** | The request body is valid JSON but contains invalid field data. |
| **429 Too Many Requests** | The API rate limit has been exceeded. |
| **500 Internal Server Error** | The server encountered an unexpected error while processing the request. |
| **503 Service Unavailable** | The User service is temporarily unavailable. |

## Evidence included

Each status-code folder may include:

- A status-specific `README.md`
- Postman request and response screenshots
- A simulated Jira ticket
- A simulated, sanitized troubleshooting log
- A `troubleshooting.md` file for selected scenarios

## Postman collection

Import the User Management Postman collection from the `Postman-collection` folder to run the requests.

## Skills demonstrated

- REST API testing with Postman
- Request headers, authentication, and API keys
- JSON request payload validation
- HTTP status-code troubleshooting
- Jira issue documentation and resolution tracking
- Log analysis and error investigation
- Impact assessment and escalation decisions
```
