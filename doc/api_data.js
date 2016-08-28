define({ "api": [
  {
    "type": "post",
    "url": "/v1/users",
    "title": "LoginBySocialToken",
    "version": "0.1.0",
    "name": "LoginBySocialToken",
    "group": "Users",
    "description": "<p>Отправляем токен после получения его от гугла, если записи в базе с таким токеном нет, она будет создана, если есть, то вернётся объект User</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "social_token",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/UsersController.php",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/users",
    "title": "UpdateUser",
    "version": "0.1.0",
    "name": "searchMessage",
    "group": "Users",
    "permission": [
      {
        "name": "Secured"
      }
    ],
    "description": "<p>Обновить профиль пользователя</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "age",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/UsersController.php",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users"
      }
    ]
  }
] });