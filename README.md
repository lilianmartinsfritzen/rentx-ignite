<p align="center">
  <a href="#CHAPTERIII">CHAPTER III - IV</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#I">I</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#II">II</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#III">III</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#execucao">Execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#api">RentX API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licenca">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#desenvolvedora">🙋‍♀️</a>
</p>

<p align="center">
<a href="https://github.com/lilianmartinsfritzen">
  <img src="https://img.shields.io/static/v1?label=self-learning&message=LMF&color=49AA26&labelColor=000000" alt="Self Learning Lílian Martins Fritzen" />
</a>
<a href="https://github.com/lilianmartinsfritzen/rentx-ignite/commit/fc3cdffa2f2b0675b4c6e0f42b725390e4b9a104">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000" />
</a>
</p>

<h2 align="center"> 
  <img src="https://user-images.githubusercontent.com/83084256/180630928-a914ddb1-38c9-4d0e-bc35-fd3e532fad3e.png" width="60" height="30"/> 
  RentX 
</h2>
<br>
<div align="center">

![RentX](https://user-images.githubusercontent.com/83084256/180630900-467f9357-2808-44e8-a668-dcd5af3c3f17.png)

</div>
<br>

<h2 id="CHAPTERIII">
  🚀 CHAPTER III e IV - IGNITE <a href="https://www.rocketseat.com.br/">Rocketseat
</a>
</h2>

<div align="justify">

<h2> 📝 Conceitos aprendidos durante a construção da aplicação</h2>
<br>

> Consumo de API, métodos HTTP, lidar com requisições e respostas, criar animações, entender sobre boas práticas de User Experience e sobre o universo Offline First.

<br>
<hr>
<h3 id="I">📱 MÓDULO I - Interfaces e Consumo de API</h3>

- [x] Criação de um thema global e componentes de estilo reutilizáveis.

- [x] Descobrindo as Heurísticas de Nielsen e UX.

- [x] Mais sobre navegação.

- [x] Utilizando a biblioteca JsonServer para simular a API, até que fique a API do aplicativo fique disponível para consumo.

- [x] Implementando componente calendário e a seleção de período para uso no agendamento, a partir da biblioteca React Native Calendars.
<hr>

<h3 id="II">📱 MÓDULO II - Animações</h3>

- [x] Instalando a React Native Reanimated.

- [x] Transições.

- [x] Animando a tela de Splash.

- [x] As animações criadas por meio do Reanimated V2 ocorrem na UI (User Interface) por questões de performance, enquanto o código JavaScript como, por exemplo, a navegação, chamar outra tela, etc., acontecem em outra thread. Dessa forma, o aplicativo se perde ao ter que lidar com chamadas em threads diferentes, gerando falhas que podem encerrar o app inesperadamente. A solução para essa questão está no uso do Worklet interface, que nos dá acesso a partes de baixo nível do pipeline de renderização, logo após a inserção do worklet usamos runOnJS que chama um retorno de chamada de forma assíncrona, direcionando para a thread que deve ser executada após a animação.

- [x] Scroll animado.

- [x] Animação de menu flutuante inspirado no botão flutuante do Spotify, este menu conterá a lista de agendamento do usuário. A implementação irá utilizar os recursos da biblioteca Gesture Handler com o hook useAnimatedGestureHandler da Reanimated e recuperando o contexto da última posição em que o usuário o deixou. Finalizamos incluindo o withSpring, também da Reanimated, para gerar um efeito elástico ao retornar o menu para a posição inicial.

- [x] Instalamos a biblioteca LottieFiles que traz animações leves, performáticas e escaláveis, construídas com base em arquivos JSON. Com essa biblioteca incluímos um pequeno carro em movimento que servirá de loading para os momentos em que a aplicação terá que aguardar alguma resposta.
<hr>

<h3 id="III">📱 MÓDULO III - Offline First</h3>

- [x] Escolha de recursos que ficarão disponíveis Offline e Banco de Dados 🍉 WatermelonDB.

- [x] Configuração do banco de dados para iOS.

- [x] Configuração do banco de dados para Android.

- [x] Estrutura e implementação da base de dados, persistindo dados.

- [x] MEMORY LEAK! Em um determinado momento da aplicação criamos uma função que assina uma promessa, e caso o componente fosse desmontado, a interface fosse renderizada, antes da promessa ser resolvida, o código iria tentar definir, atualizar um estado que “já passou”, quando ocorreu a renderização. Seguindo a própria orientação do React podemos resolver esse problema de performance, aplicando uma função de limpeza que venha permitir as atualizações dos estados somente enquanto o componente está montado e após a resolução da promessa garantir o cancelamento das subscrições, limpando, desmontando o componente para as próximas renderizações e efeitos. Esse é um assunto importante, pois seria uma das causas de vazamento de memória e comportamentos inadequados durante renderizações.

- [x] Verificando conexão, sincronizando usuário e carros.

- [x] Exibindo status da conexão do usuário e quais recursos precisam de internet para disponibilização.

- [x] Cache de imagem com a bilbioteca FastImage.
<hr>

<h2 id="requisitos">✔️ Requisitos</h2>

- <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
- <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
- <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white">

<h3> Para Android </h3>

- <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white">
- <img src="https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white" />
- <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white"/>

<h3> Para IOS</h3>

- <img src="https://img.shields.io/badge/homebrew-2e2b24?style=for-the-badge&logo=homebrew&logoColor=white"/>

- <img src="https://img.shields.io/badge/watchman-4456e6?style=for-the-badge&logo=watchman&logoColor=white"/>

- <img src="https://img.shields.io/badge/cocoapods-FA2A02?style=for-the-badge&logo=cocoapods&logoColor=white"/>

- <img src="https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white"/>

<br>
<h3>Para simular os ambientes mobile você pode consultar as documentações abaixo:</h3>
  <p><a href="https://developer.android.com/studio/run/emulator?authuser=2">📑 Emulador Android</a></p>

  <p><a href="https://developer.apple.com/documentation/xcode/running-your-app-in-the-simulator-or-on-a-device">📑 Emulador IOS</a></p>

🏅 Utilizando o comando `expo start` você pederá selecionar o emulador desejado. Também é possível testar sua aplicação por meio do seu dispositivo físico, desde que estejam compartilhando a mesma rede. Para isso instale o Expo Go.

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

<hr>

<h2 id="tecnologias">🛠 Tecnologias e Ferramentas</h2>

- <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>
- <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
- <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
- <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
- <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
- <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
- <img src="https://img.shields.io/badge/watermelondb-ff4755?style=for-the-badge&logo=watermelondb&logoColor=white">

<hr>

<h2 id="execucao">🕹 Execução</h2>

```bash
# Clonar repositório
git clone git@github.com:lilianmartinsfritzen/myskills-ignite.git

# Entrar na pasta abaixo
cd myskills-ignite

# Restaurar pacotes
npm install

# Para aproveitar o ecossistema Expo use o comando abaixo e selecione o emulador desejado
expo start

# O template Expo selecionado permite o uso dos comandos abaixo
# Será necessário ao lidar com o banco de dados WatermelonDB

# Executar o projeto Android
npx react-native run-android && npm start

# Executar o projeto IOS
cd ios
pod install
cd ..
npx react-native run-ios && npm start

```

<h2 id="api">🕹 RentX API</h2>
Para ter uma experiência completa sobre a aplicação, clone também a API que utilizamos para consumir as informações do usuário, carros e agendamento.

Link do repositório: <a href="https://github.com/lilianmartinsfritzen/rentx-api-ignite">rentx-api-ignite</a>

```bash
# Clonar repositório
git clone git@github.com:lilianmartinsfritzen/rentx-api-ignite.git

# Entrar na pasta abaixo
cd rentx-api-ignite

# Restaurar pacotes
npm install

# Executar o projeto
npm start

```

<hr>

<h2 id="licenca">📃 Licença</h2>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/lilianmartinsfritzen/rentx-ignite/commit/fc3cdffa2f2b0675b4c6e0f42b725390e4b9a104) para mais detalhes.

<br>

<h2 id="desenvolvedora">Desenvolvedora</h2>
  <img src="https://user-images.githubusercontent.com/83084256/180618959-7691ab72-29fd-413f-a489-d3206831231b.jpeg" width="110" height="110" style="border-radius: 65px" /> <br>
  <a href="https://www.linkedin.com/in/lilian-martins-fritzen/" target="blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
