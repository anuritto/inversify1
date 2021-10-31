import { injectable } from "inversify";
import "reflect-metadata"; // хранения данных о классах(просто необходимо импортнуть)

/**
 * Допустим есть сущность катаны
 */
@injectable()
export class Katana {
    public hit() {
        return "катанический вжух";
    }
}

/**
 * И у нас есть тестовая катана которая не бьет в БД)
 * можно заменить только те методы, которые используются у катаны в юнит тесте
 */
@injectable()
export class KatanaTest extends Katana {
    public hit() {
        return "Тестовый катанический вжух";
    }
}