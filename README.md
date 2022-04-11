<h1 align="center">
  Todo App
  <p>-- App de lista de afazeres --</p>
</h1>

## Projeto realizado para testar as tecnologias:
- [x] Next
- [x] TailwindCSS
- [x] Prisma
- [x] PlanetScale

## Para usar o projeto localmente:
- Baixe o repositório
```shell
git clone https://github.com/FelipeJanotte/todo-list.git
```
- Execute o comando de instalação de dependências
```shell
npm install
```

- Crie um projeto(database) no [PlanetScale](https://planetscale.com/)
- - Sendo pela CLI:
```shell
# Criação do banco:
pscale db create todo-list

# Criação de ramificação inicial:
pscale branch create todo-list initial-setup

# Criação de ramificação para desenvolvimento:
pscale branch create todo-list shadow

# Promover a branch main para ser a principal do projeto:
pscale branch promote todo-list main
```

- Iniciando o projeto: 
```shell
# Conectando com o banco: 
pscale connect todo-list initial-setup --port 3309
pscale connect todo-list shadow --port 3310

# Iniciando o frontend:
npm run dev

# Abrir visualizador do banco via prisma:
npx prisma studio

```
---
<p align="center">
Você pode acessar em: https://todo-app-one-iota.vercel.app/?
</p>
