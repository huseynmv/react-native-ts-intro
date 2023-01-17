import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {

  interface Product{
  id: number,
  supplierId: number,
  categoryId: number,
  quantityPerUnit: string,
  unitPrice: number,
  unitsInStock: number,
  unitsOnOrder: number,
  reorderLevel: number,
  discontinued: boolean,
  name: string,
  supplier?: Supplier,
  category? : Category
}

interface Supplier {
  id: number,
  companyName: string,
  contactName: string,
  contactTitle: string,
  address?: Address,
  category? : Category

}

interface Address{
  street: number,
  city: string,
  region: string,
  postalCode: number,
  country: string,
  phone: string,
}

interface Category{
  id: number,
  description: string,
  name: string
}


  const [products, setproducts] = useState<Product[]>([])

  useEffect(() => {
      fetch('https://northwind.vercel.app/api/products')
    .then(res => res.json())
  .then((data:Product[]) => setproducts(data))
  }, [])
  

  const renderItem = ({item}:{item:Product}) => {
    return (
      <>

      <Text style = {{fontSize: 24}}>{item.name}</Text>

      </>
    )
  }

  return (
   
      
    <FlatList
        data={products}
        renderItem = {renderItem}
      />

    
  )
}



export default App

const styles = StyleSheet.create({})