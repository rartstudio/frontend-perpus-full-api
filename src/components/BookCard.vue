<template>
  <router-link class="home__link" :to="{name: 'book-show', params: {slug: book.slug}}">
    <v-flex xs12 class=" mx-2">
        <v-card
          class="mx-auto card-book relative"
          max-width="120"
        >
        
        <template v-if=book.cover> 
          <v-img class="d-inline-block image-book"
            :src="link(book.cover)"
            height="140px"
            width="107px"
          ></v-img>
          <div class="rating">
            <span class="font-weight-bold text-caption">
                <v-icon color="#FFCB36">mdi-star</v-icon>
                {{ rating(book.reviews) }}
            </span>
          </div>
        </template>
        <template v-else>
          <image-placeholder class="image-placeholder"
              :width="107"
              :height="140"
              :show-ratio="true"
              :backgroundColour="backgroundColour"
              :borderColour="borderColour"
              :font-size="12"
              :fontFamily="fontFamily"
          >Belum ada foto</image-placeholder>
          <div class="rating">
            <span class="font-weight-bold text-caption">
              <v-icon color="#FFCB36">mdi-star</v-icon>
                {{ rating(book.reviews) }}
            </span>
          </div>
        </template>
          <div class="text-body-2 mt-2 book-title">
            <!-- {{ book.title.slice(0,30) + '...' }} -->
            {{ book.title }}
          </div>
          <div class="text-caption text--disabled d-flex align-center justify-space-between">
            <slot name="custom-bar">
              <template v-if="book.stock.qty != 0">
                <v-chip class="d-flex justify-center align-center" color="#3285C0">
                  <v-icon color="#fff" size="24px">
                    ri ri-check-line
                  </v-icon>
                  <p class="text-caption mb-0 ml-1" style="color:white">Tersedia</p>
                </v-chip>
              </template>
              <template v-else>
                <v-chip class="d-flex justify-center align-center" color="#e31a1a">
                    <v-icon color="#fff" size="24px">
                      ri ri-indeterminate-circle-line
                    </v-icon>
                    <p class="text-caption mb-0 ml-1" style="color:white">Tersedia</p>
                  </v-chip>
              </template>
            </slot>
          </div>
        </v-card>
    </v-flex>
  </router-link>
</template>

<style>
  .card-book {
    line-height: 1.4rem;
    word-break: normal;
    box-shadow: none !important;
  }
  .btn-borrow {
    color: #00005e !important;
    background-attachment: #e2e2e2;
  }
  .book-title {
    min-height: 4.2rem;
  }
  .image-placeholder {
    border-radius: 9px !important;
  }
  .image-book {
    border-radius: 5px !important;
  }
  .rating {
    position: absolute;
    background: rgba(10, 54, 157,0.9);
    color: white;
    right: 0;
    top: 55px;
    padding: 4px;
  }
</style>

<script>
import imagePlaceholder from 'vuejs-image-placeholder'
import {bookMixin} from "@/mixins/bookMixin.js";
export default {
  mixins: [bookMixin],
  props : {
    book : Object
  },
  data() {
    return {
      borderColour: '#fff',
      backgroundColour: '#dcdee8',
      fontFamily: 'Nunito, sans-serif'
    }
  },
  components : {
    imagePlaceholder
  }
}
</script>