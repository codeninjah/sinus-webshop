<template>
  <div class="register-comp-wrapper">
    <h2>{{ registerHeader }}</h2>

    <form @submit.prevent class="register-form">
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        v-model="newUser.firstname"
        v-on:change="$emit('validateFirstname', newUser.firstname)"
      />
      <label class="text-align" for="lastname">Lastname</label>
      <input
        type="text"
        name="lastname"
        v-model="newUser.lastname"
        v-on:change="$emit('validateLastname', newUser.lastname)"
      />
      <label for="address">Address</label>
      <input
        class="fullrow"
        type="text"
        name="address"
        v-model="newUser.address.street"
        v-on:change="$emit('validateAddress', newUser.address.street)"
      />
      <label for="postcode">Postal Code</label>
      <input
        type="text"
        name="postcode"
        v-model="newUser.address.zip"
        v-on:change="$emit('validateZip', newUser.address.zip)"
      />
      <label class="text-align" for="city">City</label>
      <input
        type="text"
        name="city"
        v-model="newUser.address.city"
        v-on:change="$emit('validateCity', newUser.address.city)"
      />
      <label for="email">E-mail</label>
      <input
        class="fullrow"
        type="text"
        name="email"
        v-model="newUser.email"
        v-on:change="$emit('validateEmail', newUser.email)"
      />
      <label v-if="isRegister" for="password">Password</label>
      <input
        v-if="isRegister"
        class="fullrow"
        type="text"
        name="password"
        v-model="newUser.password"
      />
      <input
        v-if="isRegister"
        class="default-btn"
        type="button"
        v-bind:value="ctaBtn"
        @click="createNewUser"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        address: {
          street: "",
          zip: "",
          city: "",
        },
        orderHistory: []
      },
    };
  },
  created() {
     let user = this.$store.state.user;
    if (user._id!== undefined) {
      this.newUser = user;
      let name = user.name.split(" ");
      this.newUser.firstname = name[0];
      let lastname = "";
      for (let i = 1; i < name.length; i++) {
        lastname += name[i] + " ";
      }
      this.newUser.lastname = lastname;
    }
  },
  props: {
    registerHeader: String,
    ctaBtn: String,
    isRegister: Boolean,
  },
  methods: {
    createNewUser() {
      if (this.userValidation(this.newUser)) {
        this.newUser.name =
          this.newUser.firstname + " " + this.newUser.lastname;
        this.$store.dispatch("registerUser", this.newUser);
        this.$router.push("/");
      }
    },
    userValidation(newUser) {
      const userAsArray = Object.values(newUser);
      console.log(userAsArray);
      for (let i = 0; i < userAsArray.length; i++) {
        if (userAsArray[i] === "") {
          alert("Fill out form");
          return false;
        }
    }
    return true; 
  }
  },
};
</script>

<style lang="scss" scoped>
.register-comp-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 400px;
  height: auto;
  margin: auto;
  margin-bottom: 32px;
  margin-top: 32px;
  padding: 32px;

  h2 {
    font-weight: 100;
    font-size: 40px;
  }
  p {
    margin: 16px 16px 16px 0;
  }

  .register-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    
    input {
      padding: 10px;
      border: none;
      outline: none;
      border-radius: 5px;
    }
    .default-btn {
      justify-self: center;
      margin-top: 20px;
      align-self: center;
      width: 160px;
      cursor: pointer;
      background-color: wheat;
    }
    .text-align {
      text-align: center;
    }
  }
}
</style>
