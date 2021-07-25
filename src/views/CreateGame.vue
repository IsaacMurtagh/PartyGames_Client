<template>
  <div>
    <main-app-bar />
    <v-container>
      <v-row>
        <v-col align="center">
          <h1>Create your Game!</h1>
          <span class="subtitle-1">
            You're almost there, all you need to do is continue, 
            share the link and once your friends are in... <b>START!</b>
          </span>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col align="center" class="col-md-8">
          <v-form ref="form" @submit="createGame">
            <v-card class="pa-4" align="left" elevation="1">
                <div class="subtitle-2 pb-2 d-flex justify-space-between align-center"> 
                  <div>Game Type: Would You Rather</div>
                  <info-dialog>
                    <template v-slot:header>Would You Rather</template>
                    <template v-slot:content>
                      <div class="pb-4">Currently, <b>Would You Rather</b> is the only supported game mode. <br></div>
                      <h2 class="pb-1">How to play</h2>
                      <ol>
                        <li>Create a room for this game mode, and then share the link provided with your friends so they can join you.</li>
                        <li>Once all in and you've chosen your names, the host starts the game.</li>
                        <li>Each player is presented with the same set of images, and individually you must choose what you prefer. For example, ice-cream or frozen yogurt.</li>
                        <li>After 10 rounds, you will all proceed to a summary page where you can analyse results and compare choices!</li>
                      </ol>
                    </template>
                  </info-dialog>
                </div>
                <v-text-field
                  v-model.lazy.trim="roomName"
                  :counter="maxLengthRoomName"
                  :rules="roomNameRules"
                  type="text"
                  placeholder="Enter Room Name"
                  label="Room Name"
                  prepend-inner-icon="mdi-home"
                  solo
                />
            </v-card>
            <v-col>
              <v-btn width="66%" type="submit" :loading="createGameLoading" class="block">
                Continue
              </v-btn>
            </v-col>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import MainAppBar from '../components/MainAppBar';
import InfoDialog from '../components/InfoDialog';
import { mapState } from 'vuex';

const maxLengthRoomName = 16;

export default {
  name: 'CreateGame',
  components: {
    MainAppBar,
    InfoDialog
  },

  data() {
    return {
      roomName: '',
      maxLengthRoomName,
      roomNameRules: [
        v => !!v || 'Name is required',
        v => v.length <= maxLengthRoomName || `Room name cannot be more than ${maxLengthRoomName} characters`,
      ],
    }
  },

  computed: {
    ...mapState('game', ['createGameLoading', 'game']),
  },

  methods: {
    async createGame(e) {
      e.preventDefault();
      const validForm = this.$refs.form.validate();
      if (validForm) {
        await this.$store.dispatch('game/createGame', {
          name: this.roomName,
          type: 'WouldYouRather'
        });
        this.game && this.$router.push(`/game/${this.game.id}`);
      }
    }
  }
}
</script>