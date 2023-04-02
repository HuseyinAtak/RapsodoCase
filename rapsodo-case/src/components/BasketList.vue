<template>
    <v-container>
        <!-- Header Row -->
        <v-row>
            <v-col  align='center' cols="8">
                <v-row class="headerRow">
                    <v-col align="start" cols="9">
                        <div>selam</div>
                    </v-col>
                    <v-col cols="3">
                        <div>
                            <router-link style="text-decoration: none;" to="/home">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 24 34" fill="none">
                                    <path d="M16.707 0L0 16.707L16.707 33.414L18.121 32L2.828 16.707L18.121 1.414L16.707 0Z" fill="blue"/>
                                </svg>
                                Devam et
                            </router-link>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="1">
            </v-col>
            <v-col class="headerRow" align='center' cols="3">
                <div >Toplam fiyat</div>
            </v-col>
        </v-row>
        <!-- Basket Row -->
        <v-row >
        <v-col cols="8">
        <!-- Basket Item -->
          <div>
            <v-row>
            <v-col align="center" cols="3">
          <v-img width="240" src="https://picsum.photos/250/250?random=1" ></v-img>
            </v-col>
            <v-col  cols="6">
                <v-card-text>
            <h2>sss</h2>
          <div>Ebat: </div>
          <div>Renk: </div>
          <div>Fiyat:  $</div>
          <div>
          </div>
        </v-card-text>
            </v-col>
            <v-col align="center" cols="3">
            <v-btn>-</v-btn>
            <p >adet</p>
            <v-btn>+</v-btn>
          </v-col>
          </v-row>
          <br> <hr>
          </div>
        </v-col>
        <v-col cols="1">
        </v-col>
        <v-col align="center" cols="3">
            $290
        </v-col>
        </v-row>
    </v-container>
    </template>
    
    <script>
      export default {
        name: 'BasketComponent',
        
      }
    </script>
    
    <style scoped>
    .container {
        margin: 60px auto;
        max-width: 60%;
    }
    .headerRow{
        background-color: rgb(211, 210, 210);
        padding-left: 10px;
    }
    </style>