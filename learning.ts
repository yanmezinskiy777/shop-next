


export default function learning() {
  interface Info {
      type: string,
      price: number,
      name: string,
      author: string
  }

  type Person = {
      gender: string
  }

  type Book = {
      name: string,
      author: string
  }

  type Product<T extends any = Info> = T extends Book ? {
      info: T,
      status: boolean
  } : string


  function getProduct(product: Product){
      console.log(product.info.price)
      console.log(product.info.type)
  }

  const SimpleBook: Product = {
      info:{
          type: 'Book',
          price: 20,
          name: 'Adventures',
          author: 'Doyle'
      },
      status: true
  }

  getProduct(SimpleBook);

}