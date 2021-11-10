
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formState : {},
      nombreMaxLength : 15,
      edadMin : 18,
      edadMax: 120,
      nombreMinLength : 3,
      url : 'https://6189765ed0821900178d79d0.mockapi.io/Usuarios',
      datos : []
    }
  },
  computed: {

  },
  mounted () {
    this.pedirDatosAlServidor()
  },
  methods: {

    getInicialData(){
      return{
        nombre:'',
        edad:'',
        email:''
      }
    },
    async enviarDatosAlServidor(datos) {
      try {
        let respuesta = await this.axios.post(this.url, datos, {'content-type':'application/json'} )
        let datosRecibidos = respuesta.data
        console.log('Datos recibidos POST', datosRecibidos)

        //this.pedirDatosAlServidor()
        this.datos.push(datosRecibidos)
      }
      catch(error) {
        console.error('Error en envio de datos del formulario')
      }
    },

    async pedirDatosAlServidor() {
      try {
        let respuesta = await this.axios(this.url)

        let datos = respuesta.data
        console.log('Datos GET', datos)
        this.datos = datos
      }
      catch(error) {
        console.error('Error en recepción de datos del servidor')
      }
    },
    enviar(){
      let datos = {...this.formData}
      console.log(datos)
      this.enviarDatosAlServidor(datos)
      this.formData = this.getInicialData() // Inicializando los valores.
      this.formState._reset() // Inicializando el estado.

    }
  }
}


