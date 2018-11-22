<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <form>
              <!--v-validate="'required|email'"-->
            <v-text-field
              v-validate="'required'"
              v-model="email"
              :error-messages="errors.collect('email')"
              label="E-mail"
              data-vv-name="email"
              required
            ></v-text-field>
            <v-text-field
              v-validate="'required|min:6'"
              v-model="password"
              :error-messages="errors.collect('password')"
              label="Password"
              data-vv-name="password"
              type="password"
              required
            ></v-text-field>

            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import Vue from 'vue';
  import { createNamespacedHelpers } from 'vuex';
  import VeeValidate from 'vee-validate';
  Vue.use(VeeValidate);

  const { mapState, mapActions } = createNamespacedHelpers('auth');

  export default {
    name: 'Login',
    $_veeValidate: {
      validator: 'new',
    },

    data: () => ({
      name: '',
      email: '',
      password: '',
      dictionary: {
        attributes: {
          email: 'E-mail Address',
          // custom attributes
        },
        custom: {
          password: {
            required: () => '필수값입니다.',
            min: 'password는 6글자 이상 입력하세요.',
            // custom messages
          },
        },
      },
    }),

    mounted() {
      this.$validator.localize('en', this.dictionary);
    },

    methods: {
      ...mapActions(['login']),
      submit() {
        this.$validator.validateAll()
          .then((success) => {
            if(!success) return;
            this.login(this.email);
          });
      },
      clear() {
        this.email = '';
        this.password = '';
        this.$validator.reset();
      },
    },
  };
</script>

<style scoped>

</style>
