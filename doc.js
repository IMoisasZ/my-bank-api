export const swaggerDocument =
{
    "swagger": "2.0",
    "info": {
        "description": "My bank API",
        "version": "1.0.0",
        "title": "My Bank API",
        "termsOfService": "http://swagger.io/terms/",
        "contact": {
            "email": "apiteam@swagger.io"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    "host": "My Bank IPI",
    "basePath": "/v2",
    "tags": [
        {
            "name": "account",
            "description": "Account management"
        },
    ],
    "paths": {
        "/account": {
            "get": {
                "tags": [
                    "account"
                ],
                "summary": "Get existing account",
                "description": "Get existing account description",
                "produces": [
                    "application/json",
                ],
                "responses": {
                    "200": {
                        "description": "Successfull operation",
                        "schema": {
                            "type": "array",
                            "items":
                                { "$ref": "#definations/Account" }
                        }
                    },
                    "400": {
                        "description": "Error occurred",
                    }
                }
            },
            "post": {
                "tags": [
                    "account"
                ],
                "summary": "Create a new account",
                "description": "Create a new account with the recevied parameters",
                "operationId": "updatePet",
                "consumes": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Account object",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Account"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Account created"
                    },
                    "400": {
                        "description": "Error occurred"
                    }
                },
            },
            "definitions": {
                "Account": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "example": "moisas"
                        },
                        "balance": {
                            "type": "float",
                            "exemple": "800.65"
                        }
                    }
                }
            }

        }
    }
}