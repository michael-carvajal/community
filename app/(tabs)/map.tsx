import React, { useEffect, useRef, useState } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';
import * as Location from 'expo-location';

const INITIAL_REGION = {
	latitude: 37.33,
	longitude: -122,
	latitudeDelta: 2,
	longitudeDelta: 2
};

export default function MapScreen() {
	const navigation = useNavigation();
	const mapRef = useRef<MapView>(null);
	const [locationPermission, setLocationPermission] = useState(false);

	useEffect(() => {
		(async () => {
			const { status } = await Location.requestForegroundPermissionsAsync();
			setLocationPermission(status === 'granted');
		})();

		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={focusMap}>
					<View style={{ padding: 10 }}>
						<Text>Focus</Text>
					</View>
				</TouchableOpacity>
			)
		});
	}, []);

	const focusMap = () => {
		const GreenBayStadium = {
			latitude: 44.5013,
			longitude: -88.0622,
			latitudeDelta: 0.1,
			longitudeDelta: 0.1
		};

		mapRef.current?.animateToRegion(GreenBayStadium);

		// Or change the camera with a duration
		// mapRef.current?.animateCamera({ center: GreenBayStadium, zoom: 10 }, { duration: 2000 });
	};

	const onRegionChange = (region: Region) => {
		console.log(region);
	};

	return (
		<View style={{ flex: 1 }}>
			{locationPermission && (
				<MapView
					style={StyleSheet.absoluteFillObject}
					initialRegion={INITIAL_REGION}
					showsUserLocation
					showsMyLocationButton
					provider={PROVIDER_GOOGLE}
					ref={mapRef}
					onRegionChangeComplete={onRegionChange}
				></MapView>
			)}
		</View>
	);
} 