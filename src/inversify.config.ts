import { Container } from "inversify";
import { Ninja } from "./Warriors/Ninja";
import { Katana } from "./PrimaryWearons/Katana";

/** Наш контейнер, хранящий классы */
const myContainer = new Container();
// при обращении к контейнеру по кодовому слову "дай мне инстанс класс Katana" будет дан инстанс класс Katana
// т.е. биндим класс катану за себя
myContainer.bind(Katana).toSelf();
myContainer.bind(Ninja).toSelf();

export { myContainer };