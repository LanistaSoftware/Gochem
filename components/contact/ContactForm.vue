<template>
  <section>
    <div id="form-container" class="form-container">
      <div class="twin-input left-inputs">
        <div class="inputBox">
          <input v-model="communication.name" type="text" name="name" class="input radius-1em" placeholder="İsim">
        </div>
        <div class="inputBox">
          <input v-model="communication.email" type="email" name="email" class="input radius-1em" placeholder="E-mail">
        </div>
      </div>
      <div class="twin-input right-inputs clearfix">
        <div class="inputBox">
          <input v-model="communication.telephone" type="text" name="phone" class="input radius-1em" placeholder="Telefon">
        </div>
        <div class="inputBox">
          <select id="konu" v-model="communication.subject" class="radius-1em deneme" name="Konu" placeholder="Konu">
            <option value="Bilgi almak istiyorum.">
              Bilgi almak istiyorum.
            </option>
            <option value=" Ürün işlemleri.">
              Ürün işlemleri.
            </option>
            <option value="  Stok işlemleri.">
              Stok işlemleri.
            </option>
            <option value=" Sipariş işlemleri.">
              Sipariş işlemleri.
            </option>
          </select>
        </div>
      </div>
      <div class="text-container">
        <div class="inputBox">
          <textarea v-model="communication.message" class="input radius-1em" placeholder="Mesajınız" />
        </div>
        <div class="btn-container">
          <button class="form-btn radius-05em" name="send" @click="send">
            Gönder
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      communication: {
        name: '',
        telephone: '',
        email: '',
        subject: '',
        message: '',
        toemail: 'korkacserkan@gmail.com'
      }
    }
  },
  methods: {
    ...mapActions({
      sendMail: 'sendMail',
      sendCommunication: 'sendCommunication'
    }),
    send () {
      this.sendCommunication(this.communication).then(() => {
        this.sendMail(this.communication).then(() => {
          this.communication.name = ''
          this.communication.telephone = ''
          this.communication.subject = ''
          this.communication.message = ''
          this.communication.email = ''
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.twin-input {
  width: 50%;
  float: left;
  margin-bottom: 1.2rem;
}

.left-inputs {
  padding-right: 1rem;
}

.right-inputs {
  padding-left: 1rem;
}
input,
textarea,
select {
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem 0.8rem 1rem 1.2rem;
  width: 100%;
  margin: 0.5rem;
  border: none;
  color:#9A9A9A;
    font-size:0.9rem;
}
::placeholder{
  color:#9A9A9A;
  font-size:0.9rem;
}
textarea {
  height: 13.56rem;
}
.btn-container{
  position: relative;
}
  .form-btn {
    font-family: Arial, Helvetica, sans-serif;
    font-size:0.9rem;
    position: absolute;
    border: 1px solid;
    padding: .6rem 1rem;

    color: #9A9A9A;
    background: none;
    transition: 0.2s;
    bottom: 1.5rem;
    right: 0.5rem;
  }

  .form-btn:hover {
    color: lightgreen;
    border-color: lightgreen;
  }
</style>
