import { myContainer } from "./inversify.config";
import { myTestContainer } from "./inversify.test.config";
import { Ninja } from "./Warriors/Ninja";

/** это экземляр класса ниндзя с реальной катаной, которой он машет при дергании за его апи */
const realNinja = myContainer.get(Ninja);

/** а это ниндзя которому подсунули тестовую катану */
const testNinja = myTestContainer.get(Ninja)

realNinja.fight();
testNinja.fight();

// юху мы можем писать юнит тесты почти не изменив архитектуру

// по умолчанию inversify не использует синглтон, поэтому на каждое обращение в контейнер будет выдан новый ниндзя
const realNinja2 = myContainer.get(Ninja);
console.log('realNinja === realNinja2 :>> ', realNinja === realNinja2);

// сделайте 'ts-node ./src/index.ts' мне лень скрипт добавлять