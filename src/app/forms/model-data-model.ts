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
// used in add-model component for adding more parameters for new model
export class Parameter{
    display_name:string;
    name:string;
    value_type:string;
    value_range:string;
    parameter_type:string;

constructor(){
   this.display_name='';
   this.name='';
   this.value_type='';
   this.value_range='';
   this.parameter_type='';
  }
}
// Structural definition of model categories
export class ModelCategory{
    categoryId:number;
    title:string;
    abbr:string;
    description:string;
}

export const modelcategories:ModelCategory[]=[
    {
        categoryId:1,
        title:'Partner Matching',
        abbr:'partnermatching',
        description:'Businesses identify the most ideal trading partners by calling Artificial Intelligence (AI) engines which are continuously refined by AI service providers through AI upload interface. AI models could be trained to suit specific industries, products, and geography. '
    },
    {
        categoryId:2,
        title:'Business 360',
        abbr:'business360',
        description:'Empowered by the AI, Business 360 provides the capability for business user to know more about their business trading partners. They can leverage the AI models to forecast the product demand from their partners and accurately target the right business partners with right products.'
    },
    {
        categoryId:3,
        title:'Inventory Planning',
        abbr:'inventoryplanning',
        description:'Pharus Protocol gathers internal and external data to help business enhance inventory control and optimize inventory planning. The service will minimize incidents of wasting resource from overstock or missing sale opportunity from insufficient stock. The service can also provide real-time tracking of product popularity on the market. '
    },
    {
        categoryId:4,
        title:'Demand Forecasting',
        abbr:'demandforecasting',
        description:'Product demand could be dynamically forecasted as competition, market, and social sentiment evolve. By providing model input information, businesses obtain accurate model result and also get rewards since information is an asset on the network.'
    },
    {
        categoryId:5,
        title:'Logistics Optimization',
        abbr:'logsticsoptimization',
        description:'Inefficient planning, volatile freight rate, and route congestion are key challenges to businesses. Pharus Protocol helps optimize transportation route and assets by considering alternate transportation modes, customer delivery windows, cost, and service levels.'
    },
]

export const receiptChartColumn:string[]=[
    'account',
    'receipt.balance',
    'receipt.receipt.blockHash',
    'receipt.receipt.blockNumber',
    'receipt.receipt.cumulativeGasUsed',
    'receipt.receipt.gasUsed',
    'receipt.receipt.status',
    'receipt.receipt.transactionHash',
    'receipt.receipt.transactionIndex'];