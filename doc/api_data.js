define({ "api": [
  {
    "type": "get",
    "url": "/v1/lessons/:id",
    "title": "getLessons",
    "version": "0.1.0",
    "name": "getLessons",
    "group": "Lessons",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/LessonsController.php",
    "groupTitle": "Lessons",
    "sampleRequest": [
      {
        "url": "/api/v1/lessons/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/lessons",
    "title": "storeLesson",
    "version": "0.1.0",
    "name": "storeLesson",
    "group": "Lessons",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "sub_title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "track",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/LessonsController.php",
    "groupTitle": "Lessons",
    "sampleRequest": [
      {
        "url": "/api/v1/lessons"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/lessons/:id",
    "title": "updateLesson",
    "version": "0.1.0",
    "name": "updateLesson",
    "group": "Lessons",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "sub_title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "track",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/LessonsController.php",
    "groupTitle": "Lessons",
    "sampleRequest": [
      {
        "url": "/api/v1/lessons/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/payments/check",
    "title": "PaymentCheck",
    "version": "0.2.0",
    "name": "PaymentCheck",
    "group": "Payments",
    "description": "<p>Проверка покупки по хешу, так же добавление новые доступных уроков по хешу, пример покупки http://prntscr.com/cdogm2</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "payment_hash",
            "description": "<p>Хеш с покупки для её проверки</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "google_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "security_hash",
            "description": "<p>Хеш для подтверждения отправителя, создаётся как sha1('NBA'+payment_hash+googleId+'VICTORY') при тесте, показывает, какой хеш ожидает система</p> "
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/PaymentsController.php",
    "groupTitle": "Payments",
    "sampleRequest": [
      {
        "url": "/api/v1/payments/check"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/payments/check",
    "title": "PaymentCheck",
    "version": "0.1.0",
    "name": "PaymentCheck",
    "group": "Payments",
    "description": "<p>Проверка покупки по хешу, так же добавление новые доступных уроков по хешу, пример покупки http://prntscr.com/cdogm2</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "payment_hash",
            "description": "<p>Хеш с покупки для её проверки</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "lessons",
            "description": "<p>Уроки, которые были куплены</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "security_hash",
            "description": "<p>Хеш для подтверждения отправителя, создаётся как sha1('NBA'.payment_hash.serialize(lessons).'VICTORY') при тесте, показывает, какой хеш ожидает система</p> "
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/PaymentsController.php",
    "groupTitle": "Payments",
    "sampleRequest": [
      {
        "url": "/api/v1/payments/check"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/products/:id",
    "title": "deleteProducts",
    "version": "0.1.0",
    "name": "deleteProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ProductsController.php",
    "groupTitle": "Products",
    "sampleRequest": [
      {
        "url": "/api/v1/products/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/products/:id",
    "title": "getProducts",
    "version": "0.1.0",
    "name": "getProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ProductsController.php",
    "groupTitle": "Products",
    "sampleRequest": [
      {
        "url": "/api/v1/products/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/products",
    "title": "storeProducts",
    "version": "0.1.0",
    "name": "storeProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>double</p> ",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "lessons",
            "description": "<p>Например '1,2,3,5'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "google_id",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ProductsController.php",
    "groupTitle": "Products",
    "sampleRequest": [
      {
        "url": "/api/v1/products"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/products",
    "title": "updateProducts",
    "version": "0.1.0",
    "name": "updateProducts",
    "group": "Products",
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
            "type": "<p>double</p> ",
            "optional": true,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "lessons",
            "description": "<p>Например '1,2,3,5'</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "google_id",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ProductsController.php",
    "groupTitle": "Products",
    "sampleRequest": [
      {
        "url": "/api/v1/products"
      }
    ]
  },
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