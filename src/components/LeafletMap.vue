<template>
  <div class="map-container">
    <l-map :zoom="12" :center="[48.8566, 2.3522]"> 
      <!-- Ajout du fond de carte OpenStreetMap -->
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />

      <!-- Marqueur 1 : Neuilly-sur-Seine -->
      <l-marker :lat-lng="[48.8846, 2.2689]">
        <l-popup>Lieu 1 : Neuilly-sur-Seine</l-popup>
      </l-marker>

      <!-- Marqueur 2 : Puteaux -->
      <l-marker :lat-lng="[48.8857, 2.2389]">
        <l-popup>Lieu 2 : Puteaux</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue-leaflet";



export default {
  name: "LeafletMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  }
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}

/* Taille de la carte */
.l-map {
  width: 100%;
  height: 100%;
}
</style>
