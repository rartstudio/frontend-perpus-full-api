<template>
    <router-link to="/cart">
        <v-btn icon class="btn__cart">
            <template v-if="getCartLength != 0">
                <v-badge
                color="#FFCB36"
                :content="getCartLength"
                overlap
                >
                <v-icon color="#fff">ri ri-shopping-cart-line</v-icon>
            </v-badge>
            </template>
            <template v-else>
                <v-icon color="#fff">ri ri-shopping-cart-line</v-icon>
            </template>
        </v-btn>
    </router-link>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        computed: {
            ...mapGetters('transaction',['getCartLength'])
        }
    }
</script>

<style lang="scss">
.v-badge__badge {
    color: #000 !important;
}
</style>