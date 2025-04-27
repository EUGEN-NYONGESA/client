import { View, Text, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { roleStyles } from '@/styles/roleStyles';
import CustomText from '@/components/shared/CustomText';

const Role = () => {
  const handleCustomerPress = () => {
    router.navigate("/customer/auth")
  };

  const handleRiderPress = () => {
    router.navigate("/rider/auth")
  }
  return (
    <View style={roleStyles.container}>
      <Image
        source={require("@/assets/images/logo_t.png")} 
      />
      <CustomText fontFamily='Medium' variant='h6'>
        Choose your user type
      </CustomText>
      <Text>role</Text>
    </View>
  )
}

export default Role;