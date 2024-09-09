## Testando o framework HONO e Postgree


Para Testar comece pelo docker compose para subir os serviço do Postgree
```
docker compose up -d
```


Instalar os pacotes do package.json
```
npm install
```

Faça a migration para pode criar a tabela no banco com o comando:
```
npm migrate
```

Rode a Aplicação
```
npm dev
```

Na rota /api/person, vocẽ consegue fazer um 
- GET ( Buscar pessoas )
- POST ( Cadastrar pessoas )
- Corpo:
```json
{
    "name": "string",
    "age": 1
}
```
