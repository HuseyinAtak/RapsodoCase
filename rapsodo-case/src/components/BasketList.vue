<template>
    <v-container>
        <!-- Header Row -->
        <v-row>
            <v-col  align='center' cols="8">
                <v-row class="headerRow">
                    <v-col align="start" cols="9">
                        <div v-if="$store.state.cartItems.length!==0">Sepette ki urun sayisi: {{$store.state.cartItems.length}}</div>
                        <div v-if="$store.state.cartItems.length==0">Sepette urun bulunmamaktadir.</div>
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
          <div v-for="item in $store.state.cartItems" :key="item.name">
            <v-row>
            <v-col align="center" cols="3">
                <v-img width="240" :src="`https://picsum.photos/250/250?random=${item.amount}`" ></v-img>
            </v-col>
            <v-col  cols="6">
                <v-card-text>
            <h2>{{item.name}}</h2>
          <div>Size: {{item.size}}</div>
          <div>Color: {{item.color}} </div>
          <div>Fiyat: $ {{item.amount}}</div>
          <div>
          </div>
        </v-card-text>
            </v-col>
            <v-col align="center" cols="3">
            <v-btn @click="removeQuantity(item)" >-</v-btn>
            <p >{{ item.quantity }}</p>
            <v-btn @click="addQuantity(item)">+</v-btn>
          </v-col>
          </v-row>
          <br> <hr>
          </div>
        </v-col>
        <v-col cols="1">
        </v-col>
        <v-col align="center" cols="3">
            <div v-if="this.$store.state.totalPrice!==0">
                {{this.$store.state.totalPrice}}
            </div>
        </v-col>
        </v-row>
    </v-container>
    </template>
    
    <script>
      export default {
        name: 'BasketComponent',
        methods:{
            addQuantity(item) {
      this.$store.commit('addClickedItem', {name: item.name, amount:item.amount,size:item.size,stock:item.stock,color:item.color,quantity:1});
    },
    removeQuantity(item){
        this.$store.commit('removeClickedQuantity', {name: item.name, amount:item.amount,size:item.size,stock:item.stock,color:item.color});
    }
        }
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