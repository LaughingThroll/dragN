# Инструкция 

## Скачать с GitHub
* Заходишь на репозиторий проекта https://github.com/LaughingThroll/dragN
* Нажимаешь на зелененькую кнопочку Код или Code
* Выбираешь скачать архив или Download Zip

![GitHub](https://github.com/LaughingThroll/dragN/blob/master/readmeImages/gitHub.jpg)

***

## Ты скачал с GitHub и у тебя уже есть архив 
* Разархивируй папку 
* Разверни проект в любой IDE
Приблизительно так:

![IDE](https://github.com/LaughingThroll/dragN/blob/master/readmeImages/IDE.jpg)

* Убедись в том что у тебя есть node.js и npm последних стабильных версий
* Просмотреть версию node.js  `node -v`
* Проверить актуальную версию node.js https://nodejs.org/uk/
* Если не совпадает переустанови Node.js или обнови
* Просмотреть версию npm   `npm -v`
* Просмотреть актуальную версию https://docs.npmjs.com/cli/v7/commands/npm
* Если не совпадает обнови npm командой `npm install npm@latest -g`
* Все команди пишешь в терминале самой IDE или в cmd 
  - ### Терминал в самой IDE

  ![Commands In IDE](https://github.com/LaughingThroll/dragN/blob/master/readmeImages/commandsInIDE.jpg)
  
  - ### Использование cmd
    - переходишь в папку с проектом в cmd

    ![Commands In Cmd](https://github.com/LaughingThroll/dragN/blob/master/readmeImages/commandsInCmd.jpg)
  
    - пишешь свою команду 
  
    ![your Command In Cmd](https://github.com/LaughingThroll/dragN/blob/master/readmeImages/yourCommandInCmd.jpg)

***

## Команды которые доступны 
  * Первая команда `npm i` - установить все зависимости которые есть `package.json`
  * После установки зависимостей тебе достпуны остальные команды текущего проекта, которые находяться в `package.json` в ключе `scripts`   

  ![Scripts](https://github.com/LaughingThroll/dragN/blob/master/readmeImages/scripts.jpg)

  * `npm run start` - откроет тебе DEV окружение на 3000 порту
    * Автоматически должен открыться браузер
    * Если этого не произошло открываешь браузер и в адресной строке пишешь `localhost:3000`

    ![Localhost](https://github.com/LaughingThroll/dragN/blob/master/readmeImages/localhost.jpg)

  * `npm run build` - создаст тебе готовое, оптимизированое приложения в папке `build` которое можно заливать на хостинг

  ![Build](https://github.com/LaughingThroll/dragN/blob/master/readmeImages/build.jpg)

  * __Описанные только основные команды__ 

## Навигация по проекту

* Основная папка для разработчика `src`
* Папка `api` содержит в себе тестовые данные, в дальнейшем их можно удалить
* Папка `components` содержит компоненты необходимые для работы приложения
* Папка `styles` содержит стилизацию елементов
* Файл `constant.js` описанные некоторые константы
* Файл `index.js` содержит подключения всех стилей и рендер всего приложения 
## Скачай заново репозиторий и там будут написаны основные комментарии к коду 







