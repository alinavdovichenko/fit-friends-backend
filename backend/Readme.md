## Структура проекта

[Алина Вдовиченко](https://up.htmlacademy.ru/nodejs-2/7/user/1837789).

---
_Не удаляйте и не изменяйте папки и файлы:_
_`.editorconfig`, `.gitattributes`, `.gitignore`._

## Алгоритм работы над бэкендом

1. Перейдите в диретокрию `backend\project`.

2. Установите зависимости, выполнив команду `npm install`.

3. Запуск проекта npx nx run app:serve

4. Для создания контейнера базы данных в докере выполните команду:

docker compose \
--file ./apps/app/docker-compose.ayml \
--env-file ./apps/app/app.env \
--project-name "fitfriends" \
up \
-d

5. Удалите все данные из базы данных: `npx nx run app:db:reset`

6. Сгенерируйте базу: `npx nx run app:db:generate`

7. Заполните базу данными: `npx nx run app:db:seed`

8. Запустите бэкенд: `npx nx run app:serve`