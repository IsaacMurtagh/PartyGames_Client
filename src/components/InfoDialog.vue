<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="550"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon v-text="'mdi-information-outline'"></v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5">
          <slot name="header" />
        </v-card-title>

        <v-card-text class="text-subtitle-2">
          <slot name="content" />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>