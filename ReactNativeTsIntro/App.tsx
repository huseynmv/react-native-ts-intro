import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  // interface Product {
  //   id: number;
  //   supplierId: number;
  //   categoryId: number;
  //   quantityPerUnit: string;
  //   unitPrice: number;
  //   unitsInStock: number;
  //   unitsOnOrder: number;
  //   reorderLevel: number;
  //   discontinued: boolean;
  //   name: string;
  //   supplier?: Supplier;
  //   category?: Category;
  // }

  // interface Supplier {
  //   id: number;
  //   companyName: string;
  //   contactName: string;
  //   contactTitle: string;
  //   address?: Address;
  //   category?: Category;
  // }

  // interface Address {
  //   street: number;
  //   city: string;
  //   region: string;
  //   postalCode: number;
  //   country: string;
  //   phone: string;
  // }

  // interface Category {
  //   id: number;
  //   description: string;
  //   name: string;
  // }

  // const [products, setproducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetch('https://northwind.vercel.app/api/products')
  //     .then(res => res.json())
  //     .then((data: Product[]) => setproducts(data));
  // }, []);

  // const renderItem = ({item}: {item: Product}) => {
  //   return (
  //     <>
  //       <Text style={{fontSize: 24}}>{item.name}</Text>
  //     </>
  //   );
  // };

  // return <FlatList data={products} renderItem={renderItem} />;

  const [companyName, setcompanyName] = useState<string>('')
  const [contactName, setcontactName] = useState<string>('');
  const [contactTitle, setcontactTitle] = useState<string>('');
  const [street, setstreet] = useState<string>('');

  interface Supplier {
    id?: number;
    companyName: string;
    contactName: string;
    contactTitle: string,
    address: {
      street: string,
      city?: string,
      region?: string,
      postalCode?: number,
      country?: string,
      phone?: number
    }
  }

  const Add = () => {
    let new_supplier: Supplier = {
      companyName: companyName,
      contactName: contactName,
      contactTitle: contactTitle,
      address: {
        street: street
      }
    };

    axios.post('https://northwind.vercel.app/api/suppliers', new_supplier)
  }

  return (
    <>
      <View>
        <View>
          <Text>CompanyName:</Text>
          <TextInput style={styles.input} onChangeText={setcompanyName} />
        </View>

        <View>
          <Text>ContactName:</Text>
          <TextInput style={styles.input} onChangeText={setcontactName} />
        </View>

        <View>
          <Text>ContactTitle:</Text>
          <TextInput style={styles.input} onChangeText={setcontactTitle} />
        </View>
        <View>
          <Text>Street</Text>
          <TextInput style={styles.input} onChangeText={setstreet} />
        </View>
        <View>
          <Button title="Add" onPress={() => Add()} ></Button>
        </View>
      </View>
    </>
  );
 
};

export default App;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
