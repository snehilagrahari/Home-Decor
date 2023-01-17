# abrasive-back-4176
CW B22 Project


instructions : 
- clone repo
- cd abrasive-back-4176
- npm i

interface ProductType{
    id : number,
    images: string[],
    title : string,
    from : string
    price : number,
    returnable : boolean,
    timeToShip : number,
    cancellable : boolean,
    discount : number,
    description : string
    category : string
}

UserType : 
{
    id : number,
    userId : number,
    userName : string,
    userMobile: string,
    userPassword : string,
    userEmail : string,
    address : 
    {
        lane : string ,
        city : string ,
        state: string ,
        pinCode : string
    }
}

CartItemType : 
{
    id : number ,
    {
        ...ProductType
    }
    productQty : number
}

OrderType : {
    orderId : number,
    products : [
        {...ProductType,productQty}
    ],
    userId : number,
    orderDate : string,
    orderTime : string,
    orderStatus : "Pending" | "Confirmed",
    orderAddress : string

}






