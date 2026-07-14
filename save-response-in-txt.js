import fs from "node:fs/promises"
import os from "node:os"

async function apiFetchAndWrite(url) {
    try {
        if (url) {
    const data = await fetch(url).then(response => response.json())
        }
        else {
            console.log('Произошла ошибка! Скорее всего не указан URL в вызове (как это сделать читай в инструкции README)')
        }

    await fs.appendFile('jsonResponses.txt', JSON.stringify(data) + os.EOL, 'utf-8')
    console.log(`Ответ успешно сохранен в файл jsonResponses.txt рядом с главным файлом index.js!`)
    }
    catch(error) {
        console.error(`Ошибка: ${error.message}`)
    }
}

apiFetchAndWrite() // В АРГУМЕНТАХ ВАШ URL ПО КОТОРОМУ НЕОБХОДИМО ПОЛУЧИТЬ ОТВЕТ