# API Loja de Carros


## Rotas Principais (CRUD)

A API estará disponível em `http://localhost:3000`.

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/veiculos` | Cria um novo veículo. |
| `GET` | `/api/veiculos` | Lista todos os veículos (suporta filtros, ex: `?marca=Fiat`). |
| `GET` | `/api/veiculos/:id` | Busca um veículo específico pelo seu ID. |
| `PUT` | `/api/veiculos/:id` | Atualiza um veículo (Ex: preço, status, km). |
| `DELETE` | `/api/veiculos/:id` | Remove um veículo. |
| `POST` | `/api/veiculos/:id/imagens` | Faz o upload de uma imagem para o veículo. (Deve ser `form-data` com o campo `foto`).|