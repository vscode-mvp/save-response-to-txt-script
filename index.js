import fs from "node:fs/promises"
import os from "node:os"

const APPEND_FILE_NAME = 'jsonResponses.txt'

async function apiFetchAndWrite(url) {
    try {
        if (!url) {
            console.error('Произошла ошибка! Скорее всего не указан URL в вызове (как это сделать читай в инструкции README)')
            return
        }
            const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            
                await fs.appendFile(APPEND_FILE_NAME, JSON.stringify(data) + os.EOL, 'utf-8')
                console.log(`Ответ успешно сохранен в файл ${APPEND_FILE_NAME}!`)
            }
            else {
                throw new Error(`Ошибка сервера! Статус: ${response.status}`)
        }
    }
    catch(error) {
        console.error(`Ошибка: ${error.message}`)
    }
}

apiFetchAndWrite(process.argv[2])