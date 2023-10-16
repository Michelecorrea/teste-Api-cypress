{
	"info"; {
		"_postman_id"; "c6001a0d-cc9e-4790-b5cf-95628450ddbe",
		"name"; "teste servest",
		"schema"; "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id"; "21597270"
	};
	"item"; [
		{
			"name": "Criar Usuario",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"nome\": \"michelecorrea\",\r\n  \"email\": \"michelecorrea@qa.com.br\",\r\n  \"password\": \"teste2\",\r\n  \"administrador\": \"true\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/usuarios",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"usuarios"
					]
				}
			},
			"response": []
		},
		{
			"name": "listar usuarios ",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhdGlhbmVndWVycmFAcWEuY29tLmJyIiwicGFzc3dvcmQiOiJ0ZXN0ZSIsImlhdCI6MTY1NjYxODQxOCwiZXhwIjoxNjU2NjE5MDE4fQ.Omv2WgVRZHFB6yv0bNm8VFAjJxk4D1Jyoi40Ub9Ggaw",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/usuarios",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"usuarios"
					]
				}
			},
			"response": []
		},
		{
			"name": "Post login",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"const resposta = pm.response.json();\r",
							"pm.globals.set(\"variable_key\", resposta.authorization);"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhdGlhbmVndWVycmFAcWEuY29tLmJyIiwicGFzc3dvcmQiOiJ0ZXN0ZSIsImlhdCI6MTY1NjYxODQxOCwiZXhwIjoxNjU2NjE5MDE4fQ.Omv2WgVRZHFB6yv0bNm8VFAjJxk4D1Jyoi40Ub9Ggaw",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"email\": \"michelecorrea@qa.com.br\",\r\n  \"password\": \"teste12\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"login"
					]
				}
			},
			"response": [
				{
					"name": "Post login",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"email\": \"michelecorrea@qa.com.br\",\r\n  \"password\": \"teste12\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"login"
							]
						}
					},
					"status": "Unauthorized",
					"code": 401,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "x-dns-prefetch-control",
							"value": "off"
						},
						{
							"key": "x-frame-options",
							"value": "SAMEORIGIN"
						},
						{
							"key": "strict-transport-security",
							"value": "max-age=15552000; includeSubDomains"
						},
						{
							"key": "x-download-options",
							"value": "noopen"
						},
						{
							"key": "x-content-type-options",
							"value": "nosniff"
						},
						{
							"key": "x-xss-protection",
							"value": "1; mode=block"
						},
						{
							"key": "x-moesif-transaction-id",
							"value": "72caf6f1-d9f7-4169-afeb-8e45bacaa5a2"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "48"
						},
						{
							"key": "Date",
							"value": "Wed, 03 Aug 2022 16:46:53 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"Email e/ou senha inválidos\"\n}"
				},
				{
					"name": "Post login",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"email\": \"michelecorrea@qa.com.br\",\r\n  \"password\": \"teste12\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"login"
							]
						}
					},
					"status": "Unauthorized",
					"code": 401,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "x-dns-prefetch-control",
							"value": "off"
						},
						{
							"key": "x-frame-options",
							"value": "SAMEORIGIN"
						},
						{
							"key": "strict-transport-security",
							"value": "max-age=15552000; includeSubDomains"
						},
						{
							"key": "x-download-options",
							"value": "noopen"
						},
						{
							"key": "x-content-type-options",
							"value": "nosniff"
						},
						{
							"key": "x-xss-protection",
							"value": "1; mode=block"
						},
						{
							"key": "x-moesif-transaction-id",
							"value": "a45d0c98-685a-4a67-b5b6-2ca21431abd4"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "48"
						},
						{
							"key": "Date",
							"value": "Wed, 03 Aug 2022 17:04:13 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"Email e/ou senha inválidos\"\n}"
				}
			]
		},
		{
			"name": "Usuario Deletado",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"pm.test(\"Body matches string\", function () {\r",
							"    pm.expect(pm.response.text()).to.include(\"string_you_want_to_search\");\r",
							"});\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhdGlhbmVndWVycmFAcWEuY29tLmJyIiwicGFzc3dvcmQiOiJ0ZXN0ZSIsImlhdCI6MTY1NjYxODQxOCwiZXhwIjoxNjU2NjE5MDE4fQ.Omv2WgVRZHFB6yv0bNm8VFAjJxk4D1Jyoi40Ub9Ggaw",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/usuarios/HplIulShNrh3VHwy",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"usuarios",
						"HplIulShNrh3VHwy"
					]
				}
			},
			"response": []
		},
		{
			"name": "usuarios alterados ",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"nome\": \"Michele Correa\",\r\n  \"email\": \"michelecorrea@qa.com.br\",\r\n  \"password\": \"teste1\",\r\n  \"administrador\": \"true\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/usuarios/D3pWlKItj71YOv1K",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"usuarios",
						"D3pWlKItj71YOv1K"
					]
				}
			},
			"response": []
		}
	]
}