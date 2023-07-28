import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { mapStyle } from "../global/mapStyle"
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { colors, parameters } from '../global/styles';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useState } from 'react';
import { useEffect } from 'react';

function MapComponent() {
  const latitude = -15.355798;
  const longitude = 28.285184;


  const userDestination = { latitude: latitude, longitude: longitude }
  const userOrigin = { latitude: -15.355798, longitude: 28.183187 }

  const [state, setState] = useState({

  })

  const _map = React.createRef(35)


  /*const componentDidUpdate = () => {
    setTimeout(() => {
      if (userDestination.latitude !== null) {
        _map?.current?.fitToCoordinates(
          [userOrigin, userDestination], {
          edgePadding: { top: 450, right: 50, left: 50, bottom: 350 },
          animated: true
        }
        )
      }
    }, 500)
  }

  useEffect(() => {
    componentDidUpdate()
  }, [userDestination])*/

  const GOOGLE_MAPSKey = "AIzaSyABnmmFgtKFmnYkTW-CS21ISZtNeFv3uZc"

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 300, }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyle}
      // ref={_map}
      >
        {userOrigin.latitude != null &&

          <Marker coordinate={userOrigin} anchor={{ x: 0.5, y: 0.5 }} >
            <Image
              source={require('../../assets/location.png')}
              style={styles.markerOrigin2}
              resizeMode="cover"
            />
          </Marker>

        }
        {userDestination.latitude != null &&
          <Marker coordinate={userDestination} anchor={{ x: 0.5, y: 0.5 }} >
            <Image
              source={require('../../assets/location.png')}
              style={styles.markerDestination}
              resizeMode="cover"
            />
          </Marker>
        }
        {userDestination.latitude !== null &&
          <MapViewDirections
            origin={userOrigin}
            destination={userDestination}
            apikey={GOOGLE_MAPSKey}
            strokeWidth={4}
            strokeColor={colors.black}
          />
        }
      </MapView>
    </View>
  )

}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%"
  },


  markerWrapOrigin: {
    //  alignItems: "center",
    // justifyContent: "center",
    width: 40,
    height: 20,
    // marginTop:0
  },
  markerOrigin: {
    width: 16,
    height: 16,
    borderRadius: 8
  },

  destination: {
    width: 20,
    height: 20,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center"
  },

  view1: {
    width: 7,
    height: 7,
    backgroundColor: colors.white
  },
  markerDestination: {
    width: 16,
    height: 16,

  },

  markerOrigin2: {
    width: 20,
    height: 20,
    borderRadius: 10
  },

  car: {
    paddingTop: 0,
    width: 40,
    height: 20,
  },

  view2: {
    position: "absolute",
    top: 10,
    right: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 180,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8

  },

  view3: {
    flexDirection: "row",
    alignItems: "center",
    //marginRight:15,
    //backgroundColor:"white",
    //paddingHorizontal:2,
    paddingVertical: 2,
    //borderRadius:20
  },

  view4: {
    position: "absolute",
    top: 50,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 140,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8

  },

  location: {
    width: 20,
    height: 20,
    borderRadius: 9,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center"

  },

  view9: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: "white"
  }
})

export default MapComponent
