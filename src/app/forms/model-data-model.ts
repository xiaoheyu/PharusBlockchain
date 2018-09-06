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
value_type:string;
value_range:string;
parameter_type:string;

constructor()
{
   this.name='';
   this.value_type='';
   this.value_range='';
   this.parameter_type='';
}
}

export const url="http://18.236.104.52:8080/api/product";