# Frutas API — deploy gratuito no Render

Backend de frutas feito com Node.js, Express, TypeScript e MongoDB, empacotado com Docker.

## Executar localmente

Requer Node.js 22 ou superior.

```sh
npm install
npm run dev
```

Crie um arquivo `.env` com `MONGODB_URI=sua_uri_do_mongodb` e execute `npm run dev`. A API fica em <http://localhost:8080/api/frutas>.

## Rotas da API

| Método | Rota | Uso |
| --- | --- | --- |
| GET | `/api/frutas` | Lista frutas |
| GET | `/api/frutas/:id` | Busca uma fruta |
| POST | `/api/frutas` | Cria com `{ "nome": "Uva", "tipo": "Roxa" }` |
| PUT | `/api/frutas/:id` | Atualiza uma fruta |
| PATCH | `/api/frutas/:id` | Atualiza parcialmente uma fruta |
| DELETE | `/api/frutas/:id` | Remove uma fruta |
| GET | `/health` | Verifica a saúde do serviço |

Configure `MONGODB_URI` também nas variáveis de ambiente do Render. Nunca publique o arquivo `.env`.

## Executar com Docker

```sh
docker build -t frutas-api .
docker run --rm -p 8080:8080 -e MONGODB_URI='sua_uri_do_mongodb' frutas-api
```

Consulte <http://localhost:8080/api/frutas>.

## Deploy gratuito no Render (Docker)

Alternativa ao Google Cloud Run autorizada para a atividade.

1. Publique esta pasta no repositório GitHub `Vitoria-Rabelo/dev-web`, sem `.env`, `node_modules` ou `dist`.
2. Acesse https://dashboard.render.com e escolha **New > Web Service**.
3. Selecione o repositório `dev-web` e a branch que contém esta atividade.
4. Configure:
   - Name: `frutas-api-vitoria` (ou outro nome disponível).
   - Root Directory: `13_cloud_run`.
   - Language/Runtime: **Docker**.
   - Dockerfile Path: `./Dockerfile`.
   - Instance Type: **Free**.
   - Health Check Path: `/health`.
5. Em Environment, configure `MONGODB_URI` com o valor do seu `.env`. O MongoDB deve estar acessível pela hospedagem; `localhost` não serve como endereço de um banco externo.
6. Clique em **Deploy Web Service** e aguarde o status **Live**.
7. Abra a URL HTTPS fornecida pelo Render, com `/health` e `/api/frutas`, e teste os cinco métodos.

O arquivo `render.yaml` descreve a mesma configuração para Blueprint; seu caminho no repositório é `13_cloud_run/render.yaml`.

### Evidência para entrega

Depois do deploy real, capture o navegador mostrando a URL pública e a resposta de `/api/frutas`. Entregue o código junto com esse print. O endereço será fornecido pelo Render após a criação do serviço; não há URL de deploy confirmada ainda.

O Render fornece um domínio HTTPS público (`https://NOME.onrender.com`), que deve ser usado como endereço da aplicação. Ele substitui o endereço do Google porque o professor autorizou outra nuvem.

O plano Free possui limites de uso e pausa após 15 minutos de inatividade. O próximo acesso pode demorar cerca de um minuto. Se houver exigência de cartão ou upgrade, não selecione um plano pago.

Documentação: https://render.com/docs/free e https://render.com/docs/docker.
