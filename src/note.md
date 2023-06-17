# I. Minimum requirements :
- react-native >= 0.63.0
- expo >= 41 (if you use Expo)

# II. Setup project : 
(Mọi người ko cần làm những cái này, vì tui đã cài ròi , Chỉ cần pull project về ; Mở Terminal của thư mục src ; rồi chạy lệnh `npm install` thoi)
## 1/ Chạy lệnh sau để tạo "khuôn" cho project :

    npx create-expo-app .

## 2/ Cài đặt REACT NATIVE NAVIGATION và các package cần thiết :

    npm install @react-navigation/native 
    
    Tiếp theo là cài hiệu ứng chuyển trang (Xem mấy cái GIF trong link dưới để biết hiệu ứng) :

        npm install @react-navigation/native-stack
        => Này dùng để tạo `Stack Navigator`

        npm install @react-navigation/bottom-tabs
        => Này dùng để tạo `Bottom Tabs Navigator`

        npm install @react-navigation/drawer
        npx expo install react-native-gesture-handler react-native-reanimated
        => Này dùng để tạo `Drawer Navigator`

    npx expo install react-native-screens react-native-safe-area-context

https://blog.logrocket.com/react-native-navigation-tutorial/

## 3/ Project Directory Architecture
- Thư mục `components` để chứa mấy cái thành phần nhỏ nhỏ như Card , InputField , ...
- Thư mục `screens` để chứa các trang

---
---
---

# III. Giải thích Code :
## 1/ Cơ chế điều hướng của React Native Navigation :
- React Native Navigation sẽ sử dụng 1 cái Stack gọi là `Stack Navigator` , dùng để chứa những cái Screen
- Và cái React Native Navigation này sẽ có tự động transition khi mà đổi trang
- Một cái app có thể có nhìu hơn 1 cái Stack/BottomTab/Drawer Navigator


## 2/ Giải thích flow routing :
- File `App.js` sẽ được chạy đầu tiên.

        const Stack = createNativeStackNavigator();
    
    => Ta sẽ tạo 1 cái `Stack` dùng để chứa các Screen (Đặt tên j cũng đc, đặt là `StackScreen` thì bên dưới cũng phải sửa lại theo)
    
        ...
        <NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="LoginPage" component={LoginScreen} />
				<Stack.Screen name="SignupPage" component={SignupScreen} />
				...
				<Stack.Screen name="CustomerMain" component={CustomerMain} />
			</Stack.Navigator>
		</NavigationContainer>
        ...
    
    => Rồi tạo cái khung <NavigationContainer> để routing trong đó
    
    + Thì cái `screenOptions` là để tắt cái thanh Header của React Native Navigation thoi , ko cần quan tâm đâu
    +  `<Stack.Screen name="SignupPage" component={SignupScreen} />` có nghĩa là push 1 cái Screen **Có tên là SignupPage** vào `Stack` . Khi ta điều hướng vào trang **SignupPage** thì sẽ render cái `SignupScreen`

- Thì bên File `LoginScreen.jsx` thì :

        export default function LoginScreen({ navigation }) {
            ...
        }

    => Ta phải truyền 1 cái props `navigation` dô

        <Button
            title="Sign up"
            onPress={() => navigation.navigate("SignupPage")}
        />

    => Ta tạo 1 cái nút có cái sự kiện onPress khi bấm vào thì sẽ điều hướng trang qua cái Screen **Có tên là SignupPage**

