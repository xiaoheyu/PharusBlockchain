export class AiModel
{
    title : string;
    description : string;
    price : number;
    url:string;
    parameter:Array<Parameter>;
    category:number;
    subcategory:number;

    constructor()
    {
        this.title='';
        this.description='';
        this.price=0;
        this.url='';
        this.parameter=[];
        this.category=0;
        this.subcategory=0;
    }
}

export class Parameter
{
name:string;
field:string;

constructor()
{
    this.name='';
    this.field='';
}
}

export const url="http://18.236.104.52:8080/api/product";