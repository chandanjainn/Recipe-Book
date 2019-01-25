export class Recipe{
public recipeName : string;
public description : string;
public imageURL : string;

constructor(name : string, desc : string, imgURL : string){
    this.description = desc;
    this.recipeName = name;
    this.imageURL = imgURL;
}
}