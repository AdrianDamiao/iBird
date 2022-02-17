# iBird
## __A rede social de sua ave favorita!__

![image](https://user-images.githubusercontent.com/79238503/154381605-1c602efb-09e0-4397-8d89-c81bb2c49a7d.png)


### __Nossos objetivos__
Com o objetivo de simplificar o dia a dia de tutores e observadores de aves, a aplicação permite ao usuário cadastrar e monitorar as informações delas.

Através de um sistema interativo e inteligente de cadastro de aves, o usuário é capaz de colocar características de sua ave com o objetivo de simplificar o acesso a seus em momentos futuros, fazendo com que todas as informações essenciais de sua ave estejam catalogadas em um só lugar de fácil acesso.

### __Mas como faço isso?__
Ao acessar o site, basta preencher os dados relacionados a sua ave (Nome, Peso, Espécie e Idade), e salvá-la! Todos os dados relacionados a ela ficarão registrados e serão exibidos em um catálogo com todas as aves atualmente cadastradas no nosso sistema.

## 🚧 Estrutura do Projeto
#### Diagrama de Caso de Uso Inicial
![image](https://user-images.githubusercontent.com/79238503/154382393-5c3da6c9-beaa-4eac-824d-bc9f95eb8b57.png)

#### Diagrama de Classe Inicial
![image](https://user-images.githubusercontent.com/79238503/154381831-4315e671-4f8a-4aa9-a57d-b9ecf5238259.png)

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

## 🚀 Autores

<table>
  <tr>
    <td align="center"><a href="https://www.instagram.com/adrian_damiao/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/79238503?v=4" width="100px;" alt=""/><br /><sub><b>Adrian Damião</b></sub></a><br /><a href="https://www.instagram.com/adrian_damiao/" title="Instagram">🦅</a><a href="https://github.com/AdrianDamiao" title="Github">🌐</a></td>
    <td align="center"><a href="https://www.instagram.com/bianeaime/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/81256287?v=4" width="100px;" alt=""/><br /><sub><b>Beatriz Neaime</b></sub></a><br /><a href="https://www.instagram.com/bianeaime/" title="Instagram">🐦</a><a href="https://github.com/BeatrizNeaime" title="Github">🌐</a></td>
    <td align="center"><a href="https://www.instagram.com/ohiagomartins/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/57905893?v=4" width="100px;" alt=""/><br /><sub><b>Hiago Sousa</b></sub></a><br /><a href="https://www.instagram.com/ohiagomartins/" title="Instagram">🦅</a><a href="https://github.com/hiagosousa" title="Github">🌐</a></td>
    <td align="center"><a href="https://www.instagram.com/joonata_martins/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/99758646?v=4" width="100px;" alt=""/><br /><sub><b>Jônata Martins</b></sub></a><br /><a href="https://www.instagram.com/joonata_martins/" title="Instagram">🐦</a><a href="https://github.com/JonataMartins" title="Github">🌐</a></td>
    <td align="center"><a href="https://www.instagram.com/luandvenancio/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/9398249?v=4" width="100px;" alt=""/><br /><sub><b>Luan Venancio</b></sub></a><br /><a href="https://www.instagram.com/luandvenancio/" title="Instagram">🦅</a><a href="https://github.com/luanvenancio" title="Github">🌐</a></td>   
  </tr>
</table>

##
