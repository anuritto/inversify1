import { inject, injectable } from "inversify";
import { Katana } from "../PrimaryWearons/Katana";

/**
 * Сущность ниндзя
 */
@injectable()
export class Ninja {
    // фактически почти та же зависимость от класса Катана, не переходим на интерфейсы классов
    // т.е. без inplement и интерфейса Primary wearons
    public constructor(
	   private weapon: Katana,
    ) {

    }

    public fight() { console.log(this.weapon.hit()) }
}