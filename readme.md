## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:5000](http://localhost:5000) to view it in the browser.

## Available API

### ROOT API - http://localhost:5000/api

### `/citizen` - GET

response body - JSON

```
{
    "ok": true,
    "data": [
        {
            "id": 3,
            "name": "Анна",
            "city_id": 1,
            "groups": [
                {
                    "type": "city",
                    "name": "Москва г."
                },
                {
                    "type": "district",
                    "name": "Пресненский р-н"
                },
                {
                    "type": "street",
                    "name": "Гашека ул."
                }
            ],
            "createdAt": "2022-08-08T13:52:06.944Z",
            "updatedAt": "2022-08-08T13:52:06.944Z"
        }
    ]
}
```
### `/citizen` - POST

requset body - JSON

```
{
    "id": 0,
    "name": "Артём",
    "city_id": 4,
    "groups": [
        {"type": "city", "name": "Горловка г."},
        {"type": "district", "name": "Чёрный р-н"},
        {"type": "street", "name": "Фридриха ул."}
    ]
}
```
response body - JSON

```
{
    "ok": true,
    "data": "Citizen created"
}
```
