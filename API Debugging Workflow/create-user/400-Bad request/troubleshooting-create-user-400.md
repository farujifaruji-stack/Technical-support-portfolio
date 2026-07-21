# Troubleshooting Process — Create User 400 Bad Request

> **Note:** This is a simulated portfolio troubleshooting case. All logs and request data are sanitized and created for demonstration purposes.

1- Getting a ticket from a customer claiming he failed creating a new user.

2- Check logs

2026-07-21T10:42:15Z INFO  Request payload created

2026-07-21T10:42:15Z INFO  "Create" button submitted

2026-07-21T10:42:15Z INFO  Request received: POST /api/users

2026-07-21T10:42:17Z ERROR Validation failed: firstName is required

2026-07-21T10:42:17Z INFO  Response sent: 400 Bad Request

3- Check the body request sent in the code:
```{
    "lastName":"Doe",
    "id":"123456789",
    "phoneNumber":"0501234567",
    "emailAddress":"walaa@test.com",
    "dateOfBirth":"14/01/2000"
}
```

4- Create a Jira for documrntaion purposes (in this case there is no need for DEV team)

5- Change the body request:
```{
    "firstName":"John",
    "lastName":"Doe",
    "id":"123456789",
    "phoneNumber":"0501234567",
    "emailAddress":"walaa@test.com",
    "dateOfBirth":"14/01/2000"
}
```
