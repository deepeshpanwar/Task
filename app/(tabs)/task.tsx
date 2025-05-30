import { View, Text,StyleSheet, TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Task() {
    const [focusColor,setFocusColor]=useState(false)
const [value,setvalue]=useState(0)

    const[email,setemail]=useState('')
    const[showerror,setshowerror]=useState(false)

const isValidEmail = (text:any) => /^\S+@\S+\.\S+$/.test(text);

const hanlde=()=>{
    setshowerror(!isValidEmail(email))
}

  return (
    <View style={styles.main}>
        <View style={styles.secondview}>
        <View style={{gap:5}}>
            <Text>Normal</Text>
            <TextInput
            placeholder='placeholder text'
            style={styles.input}
            />
        </View>
     <View style={{gap:5}}>
            <Text>Focus</Text>
            <View style={[styles.shadowWrapper,focusColor&&styles.redShadow]}>
            <TextInput
            placeholder='placeholder text'
            style={styles.input}
            onFocus={()=>setFocusColor(true)}
            onBlur={()=>setFocusColor(false)}

        
            />
            </View>
        </View>
        <View style={{gap:5}}>
            <Text>Active</Text>
            <TextInput
            placeholder='placeholder text'
            style={[styles.input,{borderColor:focusColor?'white':'blue'}]}
            onFocus={()=>setFocusColor(true)}
            onBlur={()=>setFocusColor(false)}
            />
        </View>
        <View style={{gap:5}}>
            <Text>Normal</Text>
            <TextInput
            placeholder='Ui'
            style={styles.input}
            />
            <Text style={styles.text}>
                Write any text might help the user to fill the input
            </Text>
        </View>
        </View>


        <View style={styles.secondview}>
        <View style={{gap:5}}>
            <Text>Normal</Text>
            <TextInput
            placeholder='placeholder text'
            style={styles.input}
            />
        </View>
     <View style={{gap:5}}>
            <Text>Error</Text>
            <TextInput
            placeholder='placeholder text'
            value={email}
            onChangeText={(text)=>setemail(text)}
            onFocus={()=>setshowerror(true)}
            onBlur={hanlde}
            style={[styles.input,showerror?
                styles.errorborder:null,
            ]}

            />
            {showerror&&(
                <Text style={styles.errortext}>please provide a valid email address</Text>
            )}
        </View>
        <View style={{gap:5}}>
            <Text>Date</Text>
            <TextInput
            placeholder='placeholder text'
            style={styles.input}
            />
        </View>
        <View style={{gap:5}}>
            <Text>Value</Text>
           <View style={styles.valueview}>

<TouchableOpacity onPress={()=>setvalue(value+1)}> 
    <Image source={require('../../assets/images/images.png')}  style={styles.img} />
</TouchableOpacity>
<Text>{value}</Text>
<TouchableOpacity onPress={()=>setvalue(value-1)}>
    <Image source={require('../../assets/images/download (1).png')}  style={styles.img}/>
</TouchableOpacity>

           </View>
            
        </View>
        </View>

        <View style={styles.secondview}>
        <View style={{gap:5}}>
            <Text>Password</Text>
            <TextInput
            placeholder='placeholder text'
            style={styles.input}
            secureTextEntry={true}
            />
        </View>
     <View style={{gap:5}}>
            <Text>Autocomplete</Text>
            <TextInput
            placeholder='placeholder text'
            style={styles.input}
            />
        </View>
        
        
        </View>

    </View>
  )
}
const styles=StyleSheet.create({
    main:{
        backgroundColor:'skyblue',
        flex:1,
        paddingTop:90,
        paddingHorizontal:10,
        gap:30,
        flexDirection:'row'
    },
    input:{

        height:30,
        width:200,
        backgroundColor:'white',
        borderWidth:2,
        paddingLeft:10
    
    },
    text:{
        height:30,
        width:250,
        letterSpacing:0,
        fontSize:13,
        lineHeight:16
    },
    secondview:{
        gap:25
    },
  shadowWrapper: {
    borderRadius: 8,
  },
  redShadow: {
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8, 
   backgroundColor: 'white', 
  }, 
  errortext:{
     color: 'red',
    marginTop: 5,
    fontSize: 12,
  } ,
  errorborder:{
    borderColor: 'red',
  },
  valueview:{
 height:30,
        width:200,
        backgroundColor:'white',
        borderWidth:2,
        paddingLeft:10,
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:10

  },
  img:{
    height:20,
    width:20,
    resizeMode:'contain',
  top:4
  }

})