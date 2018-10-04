export interface HeroObject {
    id: number;
    img: string;
    localizedName: string;
    roles: Array<string>[];
    primaryAttribute: string;
}

// export class Hero {
//     private heroList: Array<HeroObject>[];

//     constructor(rawHeroListObject) {
//         this.heroList = this.formatHeroList(rawHeroListObject);
//     }

//     private formatHeroList(heroList) {
//         return heroList.map((hero) => ({
//             id: hero.id,
//             img: hero.img,
//             localizedName: hero.localized_name,
//             roles: hero.roles,
//             primaryAttribute: hero.primary_attr
//         }));
//     }

//     getHeroList() {
//         return this.heroList;
//     }
// }
