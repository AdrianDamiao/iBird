# iBird
## __A rede social de sua ave favorita!__

### __Nossos objetivos__
Com o objetivo de simplificar o dia a dia de criadores de aves, a aplicação permite ao usuário cadastrar e monitorar as informações delas.

Através de um sistema interativo e inteligente de cadastro de aves, o usuário é capaz de colocar a documentação de sua ave com o objetivo de simplificar o acesso a seus em momentos futuros, fazendo com que todas as informações essenciais de sua ave estejam catalogadas em um só lugar de fácil acesso.

### __Mas como faço isso?__
Ao acessar o site, basta preencher os dados relacionados a sua ave (Nome, Peso, Espécie e Idade), e salvá-la! Todos os dados relacionados a ela ficarão registrados e serão exibidos em um catálogo com todas as aves atualmente cadastradas no nosso sistema.

## 🚀 Como executar o projeto
Este projeto é divido em três partes:
1. Backend (iBird.Webapi). 
2. Frontend (iBird.Client).
3. Banco de dados (iBird.Infra).

💡Para que o Frontend funcione é necessário criar o primeiro o banco de dados e depois executar o Backend.

### Pré-requisitos
Primeiramente você precisa instalar em sua máquina as seguintes ferramentas: 
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [VSCode](https://code.visualstudio.com/), [.NET SDK 5.0](https://dotnet.microsoft.com/en-us/download/dotnet/5.0) e também o [Docker](https://www.docker.com/products/docker-desktop) ou o [PostgreSQL](https://www.postgresql.org/) para o banco de dados.

#### 🎲 Rodando o Backend
Após fazer a instalação do [SDK](https://dotnet.microsoft.com/en-us/download/dotnet/5.0) do .NET 5.0 siga os passos seguintes:
```
# Acesse a pasta do Backend
cd iBird.Webapi

# Execute a API
dotnet run
```

#### 🎲 Criando o Banco de Dados (servidor)
```
# Clone este repositório
git clone https://github.com/AdrianDamiao/iBird.git

# Com o Docker e execução use o comando
docker-compose -f .\iBird.Infra\postgres.yml up
```
Caso você não esteja utilizando o Docker, será necessário criar uma conexão 
com as mesmas informações presentes no arquivo `postgres.yml` com o PostgreSQL.

Após a criação do banco, instale a ferramenta que vai gerencias as migrações do banco de dados
```
dotnet tool install --global dotnet-ef
```
Por ultimo, atualize o banco de dados
```
dotnet ef database update
```

Você pode acessar o banco de dados utilizando ferramentas como o [Beekeeper Stuidio](https://www.beekeeperstudio.io/).

#### 🎲 Rodando o Frontend
Após instalar o [Node.js](https://nodejs.org/en/), acesse a pasta do frontend:
```
cd iBird.Client
```
Faça a instalação das dependências do projeto
```
npm install
```

Com o [VSCode]() instalado, faça download da extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), abra o arquivo `meuCatalogo.html` e depois clique com o botão direito, selecionando a opção `Open With Live Server`.

![image](https://user-images.githubusercontent.com/79238503/154318683-7eb0b620-92f4-4407-b10d-676ddb7b3bb0.png)

Com tudo em execução, basta utilizar o sistema agora.
