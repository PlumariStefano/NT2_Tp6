<template>

  <section class="src-componentes-Usuarios">
    <div class="jumbotron">
      <h2>Usuarios Data Page</h2>
      <hr>
      <br>

     <div v-if="this.hayUsers" class="table-responsive">
      <table class="table">
        <tr>
          <th>Nombre</th>
          <th>edad</th>
          <th>Email</th>
        </tr>
        <tr v-for="(usuario, index) in usuarios" :key="index" >
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.edad }}</td>
          <td> {{ usuario.email }}</td>
        </tr>
      </table>
    </div>
    <h4 v-else class="alert alert-info">No hay Usuarios</h4>

    </div>
  </section>

</template>

<script>
  export default  {
    name: 'src-componentes-Usuarios',
    props: [],
    mounted () {
      this.getUsuarios()
    },
    data () {
      return {
        urlUsuarios : 'https://6189765ed0821900178d79d0.mockapi.io/Usuarios',
        usuarios : [],
        hayUsers: false
      }
    },
    methods: {
      convertirFyH(fyh) {
        return new Date(fyh).toLocaleString()
      },
    
      async getUsuarios() {
        try {
          let respuesta = await this.axios(this.urlUsuarios)
          let usuarios = respuesta.data
          console.log('AXIOS GET USUARIOS', usuarios)
          this.usuarios = usuarios,
          this.usuarios.length?this.hayUsers = true : this.hayUsers
        }
        catch(error) {
          console.error('ERROR AXIOS GET USUARIOS', error)
        }
      },
      
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .src-componentes-api-rest-ful {
  }
.jumbotron {
    background-color: rgb(154, 125, 182);
    color: white;
  }  
  hr {
    background-color: #bbb;
  }  
  pre {
    color: white;
  }
  p{
    font: 1em sans-serif;
  }
</style>