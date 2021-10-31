import { Container } from "inversify";
import { Ninja } from "./Warriors/Ninja";
import { Katana, KatanaTest } from "./PrimaryWearons/Katana";

/** Наш тестовый контейнер, хранящий классы */
const myTestContainer = new Container();
// а теперь при обращении к контейнеру по кодовому слову "дай мне инстанс класс Katana" будет дан инстанс класс KatanaTest
myTestContainer.bind(Katana).to(KatanaTest);
// класс ниндзя всё так же оставляем
myTestContainer.bind(Ninja).toSelf();

export { myTestContainer };