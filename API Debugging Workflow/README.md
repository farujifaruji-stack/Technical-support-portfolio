# API Debugging Workflow

A technical support portfolio project demonstrating API testing, troubleshooting, error investigation, documentation, and resolution workflows.

## Project purpose

This project documents common API scenarios for user-management endpoints. Each scenario includes request details, expected and actual results, troubleshooting steps, timestamped logs, Jira issue documentation, and screenshots.

## Tools used

- Postman
- REST APIs
- JSON
- HTTP status codes
- GitHub
- Jira

## API base URL

```text
{{baseUrl}}/api
```

## Authentication

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Endpoints covered

| Endpoint | Method | Purpose |
|---|---|---|
| `/users` | `GET` | Retrieve all users |
| `/users/{{userId}}` | `GET` | Retrieve a user by ID |
| `/users/{{userId}}` | `PUT` | Update a user |
| `/users/{{userId}}` | `DELETE` | Delete a user |

## Test scenarios

| Endpoint | Status code | Scenario |
|---|---:|---|
| Get Users | `200 OK` | Successfully retrieve users |
| Get Users | `401 Unauthorized` | Missing, invalid, or expired authentication |
| Get Users | `429 Too Many Requests` | API rate limit exceeded |
| Get User by ID | `200 OK` | Successfully retrieve an existing user |
| Get User by ID | `401 Unauthorized` | Missing, invalid, or expired authentication |
| Get User by ID | `404 Not Found` | User ID does not exist |
| Update User | `200 OK` | Successfully update an existing user |
| Update User | `400 Bad Request` | Invalid or missing request data |
| Update User | `404 Not Found` | User ID does not exist |
| Update User | `409 Conflict` | Email address already exists |
| Update User | `422 Unprocessable Entity` | Request body fails validation |
| Delete User | `200 OK` | Successfully delete an existing user |
| Delete User | `404 Not Found` | User ID does not exist |

## Project structure

```text
API Debugging Workflow/
├── get-users/
├── get-user-by-id/
├── update-user/
├── delete-user/
└
