import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { useRouter, Stack } from "expo-router";

import { COLORS, SIZES, icons, images } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("AA");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              console.log(searchTerm);
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
