import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() { 
  const [A, setInputA] = useState('');
  const [B, setInputB] = useState('');
  const [C, setInputC] = useState('');
  const [result, setInputResult] = useState('');

  const pressHandler = () =>{
      let a = Number.parseInt(A);
      let b = Number.parseInt(B);
      let c = Number.parseInt(C);
      if(A!='' && B!='' && C!=''){
      let D = b*b-4*a*c;
      if(D==0){
        let res = (-c)/b;
        setInputResult('Уравнение имеет один корень x = '+res);
      }
      else if(D>0){
        let x1 = (-b-Math.sqrt(D))/(2*a);
        let x2 = (-b+Math.sqrt(D))/(2*a);
        setInputResult('Первый корень x1 = '+ x1+'\n\nВторой корень x2 = '+x2);
      }
      else if(D<0){
        setInputResult('Нет корней!');
      }
    }else{
     Alert.alert("Поля не должны быть пустыми!");
    }
  }

  return (
    <View style = {{backgroundColor: '#202020', width: '100%', height: '100%'}}>
      <View style ={styles.header}>
        <Text style={styles.headerText}>Quadratic Equations</Text> 
      </View>

      <Text style = {{paddingTop:10,color: '#ff7f58',fontWeight: 'bold', fontSize: 17, paddingLeft:10}}
       paddingTop>Заполните необходимые поля:</Text>

      <View style = {styles.block}>
        <TextInput style = {styles.input} keyboardType='numeric' placeholder= 'a' placeholderTextColor='#ccc'
        value = {A} onChangeText={text => setInputA(text)+setInputResult('')}/>

        <Text style = {styles.text}>x^2+</Text>
        <TextInput style = {styles.input} keyboardType='numeric' placeholder= 'b' placeholderTextColor='#ccc'
         value = {B} onChangeText={text => setInputB(text)+setInputResult('')}/>
         
        <Text style = {styles.text}>x+</Text>
        <TextInput style = {styles.input} keyboardType='numeric' placeholder= 'c' placeholderTextColor='#ccc'
        value = {C} onChangeText={text => setInputC(text)+setInputResult('')}/>

        <Text style = {styles.text}>= 0</Text>
      </View>

      <View style = {{alignItems: 'center', paddingTop: 20,  }}>
        <Button title = "Вычислить" onPress = {pressHandler} color = '#ff7f58'/>
      </View>

      <Text style = {{color:'#ff7f58', paddingTop: 10, fontSize: 25, paddingLeft: 10, fontWeight: 'bold'}}>Ответ:</Text>
      <Text style = {styles.res}>{result}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
      marginTop: 10
  },
  input: {
      color: '#fff',
      width: '20%',
      textAlign: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ff7f58',
  },
  text: {
      color: '#ff7f58',
      fontWeight: 'bold'
  },
  res: {
    
      color: '#fff',
      marginTop: 5,
      marginLeft: 15,
      fontSize: 17
  },
  header: {
      height: '15%',
      backgroundColor: '#ff7f58',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign:'center',
    paddingTop: 20,
    paddingBottom: 20
  }
});
