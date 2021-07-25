<template>
  <div class="text-center">
    <v-dialog
      v-model="display"
      persistent
      width="550"
    >
      <v-form ref="form" @submit="chosenDisplayName">
        <v-card align="center">
          <v-card-title class="text-h5 justify-center" >
            <h3>Choose your name</h3>
          </v-card-title>

          <v-spacer />

          <v-card-text>
            <v-text-field
              v-model.lazy.trim="displayName"
              :counter="maxLengthDisplayName"
              :rules="roomNameRules"
              type="text"
              placeholder="Enter your display name"
              label="Display Name"
              prepend-inner-icon="mdi-account-circle"
              solo
            />
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn
              color="secondary"
              text
              @click="$router.push('/')"
              class="mx-4"
            >
              Leave
            </v-btn>
            <v-btn
              color="primary"
              class="mx-4"
            >
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>
<script>
const maxLengthDisplayName = 14;

  export default {
  props: {
    display: { type: Boolean, required: true },
  },

  data() {
    return {
      displayName: '',
      maxLengthDisplayName,
      roomNameRules: [
        v => !!v || 'Name is required',
        v => v.length <= maxLengthDisplayName || `Display name cannot be more than ${maxLengthDisplayName} characters`,
      ],
    }
  },

  methods: {
    async chosenDisplayName(e) {
      e.preventDefault();
      const validForm = this.$refs.form.validate();
      if (validForm) {
        this.$emit('chosen-display-name', this.displayName);
      }
    }
  }
}
</script>